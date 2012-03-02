(function() {

  $(document).ready(function() {
    var coffeescriptOptions, htmlOptions;
    coffeescriptOptions = {
      mode: 'coffeescript',
      tabMode: 'indent',
      tabSize: 2
    };
    htmlOptions = {
      mode: 'html',
      tabMode: 'indent',
      tabSize: 2,
      lineNumbers: true
    };
    $("textarea.coffeescript").each(function() {
      return CodeMirror.fromTextArea($(this)[0], coffeescriptOptions);
    });
    return $("textarea.html").each(function() {
      return CodeMirror.fromTextArea($(this)[0], htmlOptions);
    });
  });

}).call(this);
