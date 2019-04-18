const menuItem={
    "id":"speakit",
    "title":"Speakit",
    "contexts":["selection"]
}

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener((clickedItem) => {
    if(clickedItem.menuItemId=="speakit" && clickedItem.selectionText){
        chrome.tts.speak(clickedItem.selectionText,{'rate':0.7});
    }
})