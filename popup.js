function populateConfigData(config) {
    console.log('config', config);
    if(!config?.config?.application) {
        document.getElementById("config").innerText = "Application not supported.";
    } else {
        document.getElementById("appLogo").setAttribute('src', config.config.application.mobile_logo.secure_url);
        document.getElementById("appLogo").setAttribute('title', config.config.application.name);
        document.getElementById("appLogo").setAttribute('alt', config.config.application.name);

        document.getElementById("host").innerText = config.config.appHostName;
        document.getElementById("company").innerText = config.config.application.company_id;
        document.getElementById("application").innerText = config.config.application.id;
        document.getElementById("token").innerText = config.config.application.token;
        document.getElementById("title").innerText = `${config.config.application.name} Application Configuration`;
    }
}

async function copyContentToClipboard(value) {
    try {
        await navigator.clipboard.writeText(value);
    } catch(err) {
        console.log(err);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    let bg = chrome.extension.getBackgroundPage();

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let currentTabId = tabs[0].id;
        let config = bg.fyndAppConfig[currentTabId];
        populateConfigData(config);
    });

    ["token__copy", "application__copy"].forEach((element) => {
        document.getElementById(element).addEventListener('click', (event) => {
            switch(event.target.id) {
                case "application__copy": 
                    copyContentToClipboard(document.getElementById("application").innerText);
                    break;
                default:
                    copyContentToClipboard(document.getElementById("token").innerText);
                    break;
            }
        })
    });
});