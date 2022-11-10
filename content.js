function injectScript(file_path, tag) {
    var node  = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    script.setAttribute('id', 'chromeExtensionAppConfig');
    node.appendChild(script);
}

injectScript(chrome.extension.getURL('script.js'), 'body');

window.addEventListener("message", function(event) {
    if(event.data.type && (event.data.type === 'GET_APP_CONFIG')) {
        // Remove below comment
        console.log('config data', event.data);
        chrome.runtime.sendMessage(
            {config: event.data.config}
        )
    }
}, false);