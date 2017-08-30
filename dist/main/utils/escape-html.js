'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escapeHtml;
var table = {
  '&': '&amp;',
  "'": '&#x27;',
  // '`': '&#x60;' // backquoteはlabelとする
  '"': '&quot;',
  '<': '&lt;',
  '>': '&gt;'
};

function escapeHtml(html) {
  return html.replace(/[&'"<>]/g, function (match) {
    return table[match];
  });
}