$(document).ready ->
  coffeescriptOptions = {
    mode: 'text/x-coffeescript'
    tabMode: 'indent'
    tabSize: 2
    lineNumbers: true
  }
  htmlOptions = {
    mode: 'text/html'
    tabMode: 'indent'
    tabSize: 2
    lineNumbers: true
  }
  
  $("textarea.coffeescript").each -> CodeMirror.fromTextArea($(this)[0], coffeescriptOptions)

  $("textarea.html").each -> CodeMirror.fromTextArea($(this)[0], htmlOptions)
