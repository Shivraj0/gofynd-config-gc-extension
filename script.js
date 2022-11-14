function parseConfigData() {
    let main = {};
    main.config = JSON.parse(JSON.stringify(window.config || {})) || null;
    return main;
}
let config = parseConfigData();
window.postMessage({type: 'GET_APP_CONFIG', config});