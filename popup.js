function populateConfigData(config) {
    console.log('config', config);
    if(!config?.config?.application) {
        document.getElementById("config").innerText = "Application not supported.";
    } else {
        document.getElementById("host").innerText = config.config.appHostName;
        document.getElementById("company").innerText = config.config.application.company_id;
        document.getElementById("id").innerText = config.config.application.id;
        document.getElementById("token").innerText = config.config.application.token;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    let backgroundPage = chrome.extension.getBackgroundPage();

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let currentTabId = tabs[0].id;
        let config = backgroundPage.fyndAppConfig[currentTabId];
        populateConfigData(config);
    });
});