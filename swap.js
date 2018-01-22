var nn = document.activeElement.nodeName;
if (nn === 'INPUT' || nn === 'TEXTAREA') {
  var ele = document.activeElement;
  var start = ele.selectionStart;
  var end = ele.selectionEnd;
  ele.value = ele.value.slice(0, start) + TXT + ele.value.substr(end);
  ele.selectionStart = start + TXT.length;
  ele.selectionEnd = ele.selectionStart;
}
else {
  var sel = window.getSelection();
  var range;
  if (sel.rangeCount) {
    range = sel.getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(TXT));
  }
}