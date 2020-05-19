chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
        return {cancel: true}; },
    {urls: [
        "https://www.nzherald.co.nz/*75b5749904.js?v=169"
    ]},
    ["blocking"]);