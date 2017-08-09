import legalDocFormatJp, { format } from '../../src/index.js'

function onChangeText() {
  const markdownText = document.getElementById("markdownText").value
  const html = format(markdownText, { standalone: false, elementId: 'corp-site-pp'})
  document.getElementById("convertedText").innerHTML = html
}

window.onload = function() {
  const mT = document.getElementById("markdownText")
  const cT = format(mT.value, { standalone: false, elementId: 'corp-site-pp' })
  document.getElementById("convertedText").innerHTML = cT
  mT.addEventListener("keydown", onChangeText)
}
