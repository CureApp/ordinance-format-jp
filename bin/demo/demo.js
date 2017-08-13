import { format } from '../../src/index.js'

function transMD(rowStyle) {
  const markdownText = document.getElementById("markdownText").value
  const html = format(markdownText, { standalone: rowStyle, elementId: 'corp-site-pp'})
  return html
}

function toggleForm(mdWidth, mdHeight, htmlSize) {
  document.getElementById('markdownTextArea').style.width = mdWidth
  document.getElementById('markdownTextArea').style.height = mdHeight
  document.getElementById('convertedTextArea').style.width = htmlSize
}

let caretLeft = true
function onClickCaret() {
  const caret = document.getElementById("caret")
  if (caretLeft) {
    caret.className = 'fa fa-caret-square-o-right'
    toggleForm('0', '0', '100%')
    document.getElementById('markdownTextArea').style.display = 'block'
  } else {
    caret.className = 'fa fa-caret-square-o-left'
    toggleForm('48%', '98vh', '50%')
    document.getElementById('markdownTextArea').style.display = 'inline-block'
  }
  caretLeft = !caretLeft
}

let showedRowText = false
function onChangeText(rowStyle) {
  console.log('hog');
  const html = transMD(rowStyle)
  if (showedRowText) {
    document.getElementById("convertedText").textContent = html
  } else {
    document.getElementById("convertedText").innerHTML = html
  }
}

let htmlStyle
function onClickStandAlone() {
  htmlStyle = !htmlStyle
  document.getElementById("row-style-button").checked = htmlStyle
  onChangeText(htmlStyle)
}

function showRowText() {
  if (showedRowText) {
    const convertedText = document.getElementById('convertedText').textContent
    document.getElementById('convertedText').textContent = ''
    document.getElementById('convertedText').innerHTML = convertedText
  } else {
    const convertedText = document.getElementById('convertedText').innerHTML
    document.getElementById('convertedText').innerHTML = ''
    document.getElementById('convertedText').textContent = convertedText
  }
  showedRowText = !showedRowText
}

function copyConvetedHtml() {
  const html = transMD(htmlStyle)
  document.getElementById('hidden-textarea').value = html
  document.getElementById('hidden-textarea').select()
  document.execCommand("copy");
  document.getElementById('hidden-textarea').blur()
}


window.onload = function() {
  const mT = document.getElementById("markdownText")
  const cT = format(mT.value, { standalone: false, elementId: 'corp-site-pp' })
  document.getElementById("convertedText").innerHTML = cT
  mT.addEventListener("keydown", onChangeText)
  mT.addEventListener("change", onChangeText)

  const sB = document.getElementById("showRowTextButton")
  sB.addEventListener("click", showRowText)

  const cR = document.getElementById("caret")
  cR.addEventListener("click", onClickCaret)

  const rS = document.getElementById("row-style")
  rS.addEventListener("click", onClickStandAlone)

  const cB = document.getElementById('copy-button')
  cB.addEventListener("click", copyConvetedHtml)
}
