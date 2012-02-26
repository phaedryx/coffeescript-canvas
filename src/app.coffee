$(document).ready ->
  htmlOptions = {
    mode: 'text/html'
    tabMode: 'indent'
    tabSize: 2
    lineNumbers: true
  }
  $("textarea.html").each -> CodeMirror.fromTextArea($(this)[0], htmlOptions)
