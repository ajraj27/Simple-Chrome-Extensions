chrome.tabs.query({"active":true,"currentWindow":true},(tabs) => {
    console.log(tabs);

});

const inp=document.getElementById("changeColor");
let color=inp.value;

const func=() => {
    color=inp.value;
}

inp.addEventListener("change",func);
inp.addEventListener("paste",func);
inp.addEventListener("keyup",func);

document.getElementById('btnChange').addEventListener('click',() => {
    console.log(color);
    chrome.tabs.query({"active":true,"currentWindow":true},(tabs) => {
        chrome.tabs.sendMessage(tabs[0].id,{todo:"changeColor",clickedColor:color});
    });
})

