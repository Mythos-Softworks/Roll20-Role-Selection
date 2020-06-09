function beforeRequestCallback(details) {
    let url = details["url"];
    if (url.indexOf("?") !== -1) {
        return;
    }
    return {
        "redirectUrl": `${url}?desiredrole=player`
    };
}

browser.webRequest.onBeforeRequest.addListener(
    beforeRequestCallback,
    {"urls": ["https://app.roll20.net/editor/setcampaign/*"]},
    ["blocking"]);