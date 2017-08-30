'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.format = format;

var _documentFactory = require('./factories/document-factory');

var _documentFactory2 = _interopRequireDefault(_documentFactory);

var _documentStructure = require('./meta/document-structure');

var _documentStructure2 = _interopRequireDefault(_documentStructure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function format(markdownText, options) {
  return new ordinanceFormatJp(markdownText).toHtml(options);
}

var ordinanceFormatJp = function () {
  function ordinanceFormatJp(markdownText) {
    _classCallCheck(this, ordinanceFormatJp);

    var title = markdownText;
    this.document = new _documentFactory2.default().createFromText(markdownText);
  }

  _createClass(ordinanceFormatJp, [{
    key: 'toHtml',
    value: function toHtml(options) {
      var ds = new _documentStructure2.default(this.document);
      return this.document.toHtml(ds, options || {});
    }
  }, {
    key: 'toPlainText',
    value: function toPlainText() {
      var ds = new _documentStructure2.default(this.document);
      return this.document.toPlainText(ds);
    }
  }]);

  return ordinanceFormatJp;
}();

exports.default = ordinanceFormatJp;