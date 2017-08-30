'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _element = require('./element');

var _element2 = _interopRequireDefault(_element);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _tag = require('../utils/tag');

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 条
 */
var Article = function (_Element) {
  _inherits(Article, _Element);

  function Article(plain) {
    _classCallCheck(this, Article);

    var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, plain));

    _this.title = plain.title || '';
    return _this;
  }

  _createClass(Article, [{
    key: 'toHtml',
    value: function toHtml(ds) {
      // タイトル部
      var h2 = (0, _tag2.default)('h2', this.title, { class: 'articleTitle' });

      var itemsHtml = this.renderItems(ds);
      var appendix = this.renderAppendix();

      return (0, _tag2.default)('div', [h2, itemsHtml, appendix].join('\n'), { class: 'article' });
    }
  }, {
    key: 'toPlainText',
    value: function toPlainText(ds) {
      var num = ds.getNumber(this);
      var title = '\u7B2C' + num + '\u6761 ' + this.title;
      var body = this.items.map(function (item) {
        return item.toPlainText(ds);
      }).join('\n');
      if (this.items.length === 1) {
        body = '     ' + body.slice(5);
      }
      return [title, body].join('\n');
    }
  }, {
    key: 'renderItems',
    value: function renderItems(ds) {
      if (this.items.length === 0) {
        return '';
      }

      // 項が1つだけなら、<ol>ではなく<div>で囲む
      if (this.items.length === 1) {
        return (0, _tag2.default)('div', this.items[0].toHtml(ds), { class: 'articleItems' });
      }

      // itemそれぞれに<li>タグをつけて囲む
      var inner = this.items.map(function (item) {
        return (0, _tag2.default)('li', item.toHtml(ds), { class: 'articleItem' });
      }).join('\n');

      return (0, _tag2.default)('ol', inner, { class: 'articleItems' });
    }

    // this method should be implemented at Element,
    // but written here to avoid circular dependencies (Element <=> Item)

  }, {
    key: 'constructItems',
    value: function constructItems(plainItems) {
      this.items = plainItems ? plainItems.map(function (pItem) {
        return new _item2.default(pItem);
      }) : [];
    }
  }]);

  return Article;
}(_element2.default);

exports.default = Article;