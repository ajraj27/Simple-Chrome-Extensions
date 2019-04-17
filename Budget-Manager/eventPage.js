const contextMenuItem={
    "id":"spendMoney",
    "title":"Spend Money",
    "contexts":["selection"]
};

chrome.contextMenus.create(contextMenuItem);

const isInt=(value) => {
    return !isNaN(value) && parseInt(Number(value))==value && !isNaN(parseInt(value,10));
}


chrome.contextMenus.onClicked.addListener((clickedItem) => {
    
    if(clickedItem.menuItemId =="spendMoney" && clickedItem.selectionText){
        if(isInt(clickedItem.selectionText)){
            
            chrome.storage.sync.get(['total','limit'],(budget) => {
                let newTotal=0;

                if(budget.total){
                    newTotal=parseInt(budget.total);
                }
                
                newTotal+=parseInt(clickedItem.selectionText);
                
                chrome.storage.sync.set({'total':newTotal},() => {
                    if(newTotal>=budget.total){
                        const notifOptions={
                            'type':'basic',
                            'iconUrl':'Money-icon.png',
                            'title':'Limit Reached.',
                            'message':"Uh Oh! You've reached your limit."
                        }
        
                        chrome.notifications.create('limitNotif',notifOptions);
                  }
                })
            })
        }
    }
});

chrome.storage.onChanged.addListener((changes,storageName) => {
    chrome.browserAction.setBadgeText({"text":changes.total.newValue.toString()});
})