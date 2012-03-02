$(document).ready ->
  coffeescriptOptions = {
    mode: 'coffeescript'
    tabMode: 'indent'
    tabSize: 2
    lineNumbers: true
  }
  htmlOptions = {
    mode: 'html'
    tabMode: 'indent'
    tabSize: 2
    lineNumbers: true
  }
  
  $("textarea.coffeescript").each -> CodeMirror.fromTextArea($(this)[0], coffeescriptOptions)

  $("textarea.html").each -> CodeMirror.fromTextArea($(this)[0], htmlOptions)
