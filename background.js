window.fyndAppConfig = {}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  window.fyndAppConfig[sender.tab.id] = message.config || null;
})