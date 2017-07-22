// @flow

const table = {
  '&': '&amp;',
  "'": '&#x27;',
  '`': '&#x60;',
  '"': '&quot;',
  '<': '&lt;',
  '>': '&gt;',
}

export default function escapeHtml(html: string): string {
  return html.replace(/[&'`"<>]/g, match => table[match])
}
