'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _document = require('../elements/document');

var _document2 = _interopRequireDefault(_document);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _article = require('../elements/article');

var _article2 = _interopRequireDefault(_article);

var _element = require('../elements/element');

var _element2 = _interopRequireDefault(_element);

var _item = require('../elements/item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// inlineのみをrenderできるような設定
// label文法(codespan)だけはスルーするようにも設定
var inlineRenderer = new _marked2.default.Renderer();
inlineRenderer.paragraph = function (v) {
  return v;
};
inlineRenderer.codespan = function (v) {
  return '`' + v + '`';
};

var DocumentFactory = function () {
  function DocumentFactory() {
    _classCallCheck(this, DocumentFactory);
  }

  _createClass(DocumentFactory, [{
    key: 'createFromText',
    value: function createFromText(markdownText) {
      var _this = this;

      var tokens = new _marked2.default.Lexer().lex(markdownText);

      var doc = new _document2.default();
      var id = 1;
      var beforeId = void 0;
      var currentArticle = void 0;
      var itemStack = [];
      var inBlockquote = false;

      tokens.forEach(function (token) {
        var currentItem = itemStack[itemStack.length - 1];

        switch (token.type) {
          case 'heading':
            {
              if (token.depth === 1) {
                doc.title = token.text;
                break;
              }
              // depth が 2以上のときはarticleとみなす

              var _parseInline = _this.parseInline(token.text),
                  _labelName = _parseInline.labelName,
                  text = _parseInline.text;

              var article = new _article2.default({ id: (++id).toString(), title: text, labelName: _labelName });
              doc.articles.push(article);
              currentArticle = article;
              itemStack = [];
              break;
            }
          case 'paragraph':
            {
              // 第1条に達していないとき、descriptionと判断
              if (currentArticle == null) {
                doc.description = token.text;
                break;
              }

              var _parseInline2 = _this.parseInline(token.text),
                  _labelName2 = _parseInline2.labelName,
                  _text = _parseInline2.text;

              if (inBlockquote) {
                var currentElement = currentItem || currentArticle;
                currentElement.appendix = _text;
                break;
              }

              var paragraphItem = new _item2.default({ id: (++id).toString(), statement: _text, labelName: _labelName2 });
              // $FlowIssue(he-is-not-null)
              currentArticle.items.push(paragraphItem);
              itemStack = [paragraphItem];
              break;
            }
          case 'list_item_start':
            {
              var listItem = new _item2.default({ id: (++id).toString() });
              currentItem.items.push(listItem);
              itemStack.push(listItem);
              break;
            }
          case 'list_item_end':
            {
              itemStack.pop();
              break;
            }

          case 'text':
            {
              var _parseInline3 = _this.parseInline(token.text),
                  _labelName3 = _parseInline3.labelName,
                  _text2 = _parseInline3.text;

              if (beforeId !== id) {
                currentItem.statement = _text2;
                currentItem.labelName = _labelName3;
              } else {
                console.warn('"' + _text2 + '" \u306E\u524D\u306B\u6539\u884C\u3092\u958B\u3051\u3066\u304F\u3060\u3055\u3044');
              }
              beforeId = id;
              break;
            }
          case 'code':
            {
              doc.timestamps = token.text.split('\n');
              break;
            }
          case 'blockquote_start':
            {
              inBlockquote = true;
              break;
            }
          case 'blockquote_end':
            {
              inBlockquote = false;
              break;
            }
        }
      });

      return doc;
    }
  }, {
    key: 'parseInline',
    value: function parseInline(text) {
      var t = (0, _marked2.default)(text, { renderer: inlineRenderer });
      var matched = void 0;
      if (matched = t.match(/^`([^\$][^`]+)`( *)/)) {
        return { labelName: matched[1], text: t.slice(matched[1].length + matched[2].length + 2) };
      }
      return { labelName: '', text: t };
    }
  }]);

  return DocumentFactory;
}();

exports.default = DocumentFactory;