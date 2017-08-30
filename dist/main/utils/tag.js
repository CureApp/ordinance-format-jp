'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tag;

var _escapeHtml = require('./escape-html');

var _escapeHtml2 = _interopRequireDefault(_escapeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var through = function through(v) {
  return v;
};

// デフォルトではescapeしない
function tag(name, body, attrs) {
  var noEscape = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var e = noEscape ? through : _escapeHtml2.default;
  // $FlowIssue(object-loop)
  var attrsStr = !attrs ? '' : ' ' + Object.keys(attrs).map(function (key) {
    return e(key) + '="' + e(attrs[key]) + '"';
  }).join(' ');
  var html = '<' + e(name) + attrsStr;
  if (!body) {
    return html + ' />';
  }
  return html + '>' + e(body) + '</' + e(name) + '>';
}