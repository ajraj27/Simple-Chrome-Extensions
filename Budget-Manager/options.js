const saveLimit=document.getElementById('saveLimit');
const resetLimit=document.getElementById('resetLimit');
const setLimit=document.getElementById('setLimit');

chrome.storage.sync.get('limit',(budget) => {
    setLimit.value=budget.limit;
});

saveLimit.addEventListener('click',() => {
    const limValue=setLimit.value;

    if(limValue){
        chrome.storage.sync.set({'limit':limValue},() => {
            close();
        });
    }
});

resetLimit.addEventListener('click',() => {
    chrome.storage.sync.set({'total':0},() => {
        const notifOptions={
            'type':'basic',
            'iconUrl':'Money-icon.png',
            'title':'Total Reset.',
            'message':"Total has been reset to 0."
        }

        chrome.notifications.create('resetTotal',notifOptions);
    });
})