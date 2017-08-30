'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _document = require('../elements/document');

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var aiueo = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ'.split('');
var elementNameConverters = [function (num) {
  return '\u7B2C' + num + '\u6761';
}, function (num) {
  return num + '\u9805';
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

function newPos(pos, num) {
  var ret = pos.slice();
  ret.push(num);
  return ret;
}

function appendElements(ds, el, pos, depth) {
  ds.elementsById[el.id] = el;
  ds.positionsById[el.id] = pos;
  ds.depthsById[el.id] = depth;
  if (el.labelName) {
    ds.elementsByLabel[el.labelName] = el;
  }
  el.items.forEach(function (item, i) {
    return appendElements(ds, item, newPos(pos, i + 1), depth + 1);
  });
}

/**
 * 文書構造
 */

var DocumentStructure = function () {
  function DocumentStructure(doc) {
    var _this = this;

    _classCallCheck(this, DocumentStructure);

    this.elementsById = {};
    this.elementsByLabel = {};
    this.positionsById = {};
    this.depthsById = {};
    doc.articles.forEach(function (article, i) {
      return appendElements(_this, article, [i + 1], 0);
    });
  }

  _createClass(DocumentStructure, [{
    key: 'getNumber',
    value: function getNumber(el) {
      var pos = this.positionsById[el.id];
      return pos[pos.length - 1];
    }
  }, {
    key: 'getDepth',
    value: function getDepth(el) {
      return this.depthsById[el.id];
    }
  }, {
    key: 'getElementNameByLabel',
    value: function getElementNameByLabel(labelName) {
      var el = this.elementsByLabel[labelName];
      var pos = this.positionsById[el.id];
      return pos.map(function (num, i) {
        return elementNameConverters[i](num);
      }).join('');
    }
  }]);

  return DocumentStructure;
}();

exports.default = DocumentStructure;