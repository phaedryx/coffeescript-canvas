(function() {
  var coffeescriptOptions, compile, htmlOptions;

  compile = function(editor, keyEvent) {
    var alertDiv, javascript, source, _ref;
    if (keyEvent.type !== "keyup") return;
    if ((_ref = keyEvent.keyCode) === 16 || _ref === 37 || _ref === 38 || _ref === 39 || _ref === 40) {
      return;
    }
    alertDiv = $(editor.getTextArea()).data('alert');
    source = editor.getValue();
    try {
      javascript = CoffeeScript.compile(source, {
        bare: true
      });
      eval(javascript);
      return $(alertDiv).html("<i class='icon-ok'></i> Successfully Compiled");
    } catch (error) {
      return $(alertDiv).html("<i class='icon-exclamation-sign'></i> " + error);
    }
  };

  coffeescriptOptions = {
    mode: 'coffeescript',
    tabMode: 'indent',
    tabSize: 2,
    onKeyEvent: function(editor, keyEvent) {
      return compile(editor, $.event.fix(keyEvent));
    }
  };

  htmlOptions = {
    mode: 'html',
    tabMode: 'indent',
    tabSize: 2,
    lineNumbers: true
  };

  $(document).ready(function() {
    $("textarea.coffeescript").each(function() {
      var editor;
      return editor = CodeMirror.fromTextArea($(this)[0], coffeescriptOptions);
    });
    return $("textarea.html").each(function() {
      return CodeMirror.fromTextArea($(this)[0], htmlOptions);
    });
  });

}).call(this);
