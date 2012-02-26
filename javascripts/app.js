(function() {

  $(document).ready(function() {
    var htmlOptions;
    htmlOptions = {
      mode: 'text/html',
      tabMode: 'indent',
      tabSize: 2,
      lineNumbers: true
    };
    return $("textarea.html").each(function() {
      return CodeMirror.fromTextArea($(this)[0], htmlOptions);
    });
  });

}).call(this);
