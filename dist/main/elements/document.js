'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _element = require('./element');

var _element2 = _interopRequireDefault(_element);

var _article = require('./article');

var _article2 = _interopRequireDefault(_article);

var _tag = require('../utils/tag');

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var style = 'div.ordinance-format-jp{max-width:1200px;line-height:1.5em;font-size:14px;margin:6em auto;color:#333337;padding:0 2em;}div.ordinance-format-jp ol{margin:0;padding:0;}div.ordinance-format-jp h1.documentTitle{text-align:center;font-size:20px;margin-bottom:3em;}div.ordinance-format-jp div.documentDescription{margin-bottom:3em;}div.ordinance-format-jp div.article{margin-bottom:1.5em;counter-increment:articleNum;}div.ordinance-format-jp h2.articleTitle:before{content:"\u7B2C" counter(articleNum) "\u6761\u3000";}div.ordinance-format-jp h2.articleTitle{font-size:1em;font-weight:normal;margin-bottom:auto;}div.ordinance-format-jp .articleItems{padding-left:2.5em;}div.ordinance-format-jp .item1>ol.subItems{list-style-type:none;}div.ordinance-format-jp .item1>ol.subItems>li{counter-increment:parenNum;}div.ordinance-format-jp .item1>ol.subItems>li:before{content:"(" counter(parenNum) ")";}div.ordinance-format-jp div.item2{display:inline;padding-left:0.3em;}div.ordinance-format-jp div.item2>div.statement{display:inline;}div.ordinance-format-jp .item2>ol.subItems{padding-left:3.1em;list-style-type:katakana;margin-bottom:-1.5em;}div.ordinance-format-jp .item3>ol.subItems{list-style-type:none;}div.ordinance-format-jp .item3>ol.subItems>li{counter-increment:parenKatakana;}div.ordinance-format-jp .item3>ol.subItems>li:before{content:"(" counter(parenKatakana, katakana) ")";}div.ordinance-format-jp div.item4{display:inline;padding-left:0.3em;}div.ordinance-format-jp div.item4>div.statement{display:inline;}div.ordinance-format-jp ol.timestamps{list-style-type:none;margin-top:3em;}div.ordinance-format-jp div.appendix{padding-top:1.5em;}div.ordinance-format-jp div.appendix>p{padding:0;}';

/**
 * 文書
 *
 * 文書は1つの「概要」を含む
 * 文書は複数の条を含む
 * 複数のタイムスタンプを含む
 *
 * メタ情報として、ラベル一覧、および各elementの座標の解決も行う
 */
var Document = function () {
  function Document(plain) {
    _classCallCheck(this, Document);

    var p = plain || {};
    this.title = p.title || '';
    this.description = p.description || '';
    this.articles = p.articles ? p.articles.map(function (pa) {
      return new _article2.default(pa);
    }) : [];
    this.timestamps = p.timestamps || [];
  }

  _createClass(Document, [{
    key: 'toHtml',
    value: function toHtml(ds, options) {
      var optName = ['standalone', 'elementId'];
      Object.keys(options).forEach(function (name) {
        if (!optName.includes(name)) {
          throw new Error('Unknown option: "' + name + '"');
        }

        if (_typeof(options[name]) === 'object') {
          throw new Error('type of ' + name + ' option is \'object\'. You should not be \'object\'');
        }
      });

      var elementId = options.elementId || 'ordinance-format-jp';
      var h1 = (0, _tag2.default)('h1', this.title, { class: 'documentTitle' });

      var description = (0, _tag2.default)('div', this.description, { class: 'documentDescription' });

      var articles = this.articles.map(function (article) {
        return article.toHtml(ds);
      }).join('\n');
      var footer = this.renderTimestamps();

      var htmlWithoutLabelLinks = (0, _tag2.default)('div', [h1, description, articles, footer].join('\n'), { id: elementId, class: 'ordinance-format-jp' });

      var html = this.resolveLabels(htmlWithoutLabelLinks, ds);

      if (!options.standalone) {
        return html;
      }
      // $FlowIssue(css-is-string)
      return '<html><head><style>\n' + style + '</style><body>\n' + html + '</body></html>';
    }
  }, {
    key: 'toPlainText',
    value: function toPlainText(ds) {

      var articles = this.articles.map(function (article) {
        return article.toPlainText(ds);
      }).join('\n\n');
      var footer = this.timestamps.map(function (ts) {
        return '  ' + ts;
      }).join('\n');
      return [this.title, this.description, articles, footer].join('\n\n');
    }
  }, {
    key: 'renderTimestamps',
    value: function renderTimestamps() {
      var inner = this.timestamps.map(function (ts) {
        return (0, _tag2.default)('li', ts, { class: 'timestamp' });
      }).join('\n');

      return (0, _tag2.default)('ol', inner, { class: 'timestamps' });
    }
  }, {
    key: 'resolveLabels',
    value: function resolveLabels(html, ds) {
      return html.replace(/`\$?([^`]+)` */g, function (x, label) {
        try {
          return ds.getElementNameByLabel(label);
        } catch (e) {
          throw new Error('\u4E0D\u660E\u306A\u30E9\u30D9\u30EB: ' + label);
        }
      });
    }
  }]);

  return Document;
}();

exports.default = Document;