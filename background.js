chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: ["*://www.nzherald.co.nz/arc/subs/p.js", "*://www.nzherald.co.nz/pb/gr/c/default/*"]},
    ["blocking"]);