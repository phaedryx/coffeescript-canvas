$(document).ready ->
  htmlOptions = {
    mode: 'text/html'
    tabMode: 'indent'
    tabSize: 2
    lineNumbers: true
  }
  editor = CodeMirror.fromTextArea(document.getElementById("canvas-tag"), htmlOptions)
