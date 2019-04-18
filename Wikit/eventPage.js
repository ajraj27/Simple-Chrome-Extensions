const menuItem={
    "id":"wikit",
    "title":"Wikit",
    "contexts":["selection"]
}

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener((clickedItem) => {
    if(clickedItem.menuItemId=="wikit" && clickedItem.selectionText){
        const wikiurl="https://en.wikipedia.org/wiki/"+encodeURIComponent(clickedItem.selectionText);
        const data={
            "url":wikiurl,
            "type":"popup",
            "top":5,
            "left":5,
            "width":Math.round(screen.availWidth/2),
            "height":Math.round(screen.availHeight/2)
        }

        chrome.windows.create(data,() => {});
        
    }
})