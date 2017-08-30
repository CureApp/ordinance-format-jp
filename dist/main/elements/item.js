'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _element = require('./element');

var _element2 = _interopRequireDefault(_element);

var _tag = require('../utils/tag');

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 項、およびそれ以下の概念
 */
var Item = function (_Element) {
  _inherits(Item, _Element);

  function Item(plain) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, plain));

    _this.statement = plain.statement;
    return _this;
  }

  _createClass(Item, [{
    key: 'toHtml',
    value: function toHtml(ds) {
      var num = ds.getNumber(this);
      var depth = ds.getDepth(this);

      // 文
      var statement = (0, _tag2.default)('div', this.statement, { class: 'statement' });
      var itemsHtml = this.renderItems(ds);
      var appendix = this.renderAppendix();

      return (0, _tag2.default)('div', [statement, itemsHtml, appendix].join('\n'), { class: 'item' + depth });
    }
  }, {
    key: 'toPlainText',
    value: function toPlainText(ds) {
      var aiueo = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ'.split('');
      var elementNameConverters = [function (num) {
        return '\u7B2C' + num + '\u6761';
      }, function (num) {
        return num + '.';
      }, function (num) {
        return '\uFF08' + num + '\uFF09';
      }, function (num) {
        return '' + aiueo[num - 1];
      }, function (num) {
        return '\uFF08' + aiueo[num - 1] + '\uFF09';
      }, function (num) {
        return '\u306E' + num;
      }, function (num) {
        return '\u306E' + num;
      }, function (num) {
        return '\u306E' + num;
      }, function (num) {
        return '\u306E' + num;
      }, function (num) {
        return '\u306E' + num;
      }];
      var depth = ds.getDepth(this);
      var num = ds.getNumber(this);
      var spaces = '                 '.slice(0, depth * 2);
      var prefix = elementNameConverters[depth](num);
      var firstLine = spaces + prefix + ' ' + this.statement;
      if (this.items.length === 0) {
        return firstLine;
      }
      var sub = this.items.map(function (item) {
        return item.toPlainText(ds);
      }).join('\n');
      return [firstLine, sub].join('\n');
    }
  }, {
    key: 'renderItems',
    value: function renderItems(ds) {
      if (this.items.length === 0) {
        return '';
      }

      // itemそれぞれに<li>タグをつけて囲む
      var inner = this.items.map(function (item) {
        return (0, _tag2.default)('li', item.toHtml(ds), { class: 'subItem' });
      }).join('\n');

      return (0, _tag2.default)('ol', inner, { class: 'subItems' });
    }

    // this method should be implemented at Element,
    // but written here to avoid circular dependencies (Element <=> Item)

  }, {
    key: 'constructItems',
    value: function constructItems(plainItems) {
      this.items = plainItems ? plainItems.map(function (pItem) {
        return new Item(pItem);
      }) : [];
    }
  }]);

  return Item;
}(_element2.default);

exports.default = Item;