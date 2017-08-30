'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tag = require('../utils/tag');

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 条 または 項
 * elementは下位のItemを配列で持つ
 */
var Element = function () {
  function Element(plain) {
    _classCallCheck(this, Element);

    this.id = plain.id;
    this.labelName = plain.labelName || '';
    this.appendix = plain.appendix || '';
    this.constructItems(plain.items);
  }

  _createClass(Element, [{
    key: 'renderAppendix',
    value: function renderAppendix() {
      if (!this.appendix) {
        return '';
      }
      return (0, _tag2.default)('div', this.appendix.split('\n').map(function (t) {
        return (0, _tag2.default)('p', t);
      }).join('\n'), { class: 'appendix' });
    }

    // template method to avoid circular dependencies (Item <=> Element)

  }, {
    key: 'constructItems',
    value: function constructItems() {
      throw new Error('implement constructItems() method');
    }
  }]);

  return Element;
}();

exports.default = Element;