(function() {

  $(document).ready(function() {
    var editor, htmlOptions;
    htmlOptions = {
      mode: 'text/html',
      tabMode: 'indent',
      tabSize: 2,
      lineNumbers: true
    };
    return editor = CodeMirror.fromTextArea(document.getElementById("canvas-tag"), htmlOptions);
  });

}).call(this);
