function beforeRequestCallback(details) {}

chrome.webRequest.onBeforeRequest.addListener(
    beforeRequestCallback,
    {"urls": ["https://app.roll20.net/editor/setcampaign/*"]},
    ["blocking"]);