compile = (editor) ->
  alertDiv = $(editor.getTextArea()).data('alert')
  source = editor.getValue()
  try
    javascript = CoffeeScript.compile(source, bare: on)
    eval javascript
    $(alertDiv).html "<i class='icon-ok'></i> Successfully Compiled"
  catch error
    $(alertDiv).html "<i class='icon-exclamation-sign'></i> #{error}"

realTimeCompile = (editor, keyEvent) ->
  return unless keyEvent.type is "keyup"
  return if keyEvent.keyCode in [16,37,38,39,40] # ignore arrow and shift keys
  compile(editor)

coffeescriptOptions = {
  mode: 'coffeescript'
  tabMode: 'indent'
  tabSize: 2
  onKeyEvent: (editor, keyEvent) -> realTimeCompile(editor, $.event.fix(keyEvent))
}

htmlOptions = {
  mode: 'html'
  tabMode: 'indent'
  tabSize: 2
  lineNumbers: true
}

$(document).ready ->
  $("textarea.coffeescript").each ->
    editor = CodeMirror.fromTextArea($(this)[0], coffeescriptOptions)
    compile(editor)

  $("textarea.html").each ->
    CodeMirror.fromTextArea($(this)[0], htmlOptions)
