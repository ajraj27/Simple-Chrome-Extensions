chrome.runtime.onMessage.addListener((req,sender,sendRes) => {
    if(req.todo=="showPageAction"){
        chrome.tabs.query({"active":true,"currentWindow":true},(tabs) => {
            chrome.pageAction.show(tabs[0].id);
        });
    }
});

