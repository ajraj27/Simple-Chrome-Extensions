chrome.runtime.sendMessage({"todo":"showPageAction"});

chrome.runtime.onMessage.addListener((req,sender,sendRes) => {
    if(req.todo=="changeColor"){
        const addColor="#"+req.clickedColor;
        document.querySelector('.article-content').style.color=addColor;
    }
})