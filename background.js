function cipher(text) {
  return text.replace(/[a-zA-Z]/g, function (c) { return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26); });
};

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  chrome.tabs.executeScript(
    tab.id,
    {code: 'var TXT = "' + cipher(info.selectionText) + '";'}, function() {
      chrome.tabs.executeScript(tab.id, {file: 'swap.js'});
    });
});

chrome.contextMenus.create({
  id: 'rot13ify',
  title: 'ROT13 encode/decode',
  contexts: ['selection'],
});