chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
        return {cancel: true}; },
    {urls: [
        "https://www.nzherald.co.nz/pb/gr/c/default/r0nARN1TvOjoZr/headjs/75b5749904.js?v=169"
    ]},
    ["blocking"]);