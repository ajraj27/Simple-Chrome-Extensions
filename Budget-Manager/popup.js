const total=document.querySelector('.totalAmt');
const limit=document.querySelector('.limit');
const amount=document.getElementById('amount');
const spend=document.getElementById('enter');

chrome.storage.sync.get(['total','limit'],(budget) => {
    total.innerHTML=budget.total;
    limit.innerHTML=budget.limit;
})

spend.addEventListener('click',() => {
    chrome.storage.sync.get(['total','limit'],(budget) => {
        let newTotal=0;

        if(budget.total)
            newTotal+=parseInt(budget.total);

        const amt=amount.value; 
        const lim=budget.limit;
        
        if(amt)
            newTotal+=parseInt(amt);
        
        chrome.storage.sync.set({'total':newTotal},() => {
            if(amt && newTotal>=lim){
                const notifOptions={
                    'type':'basic',
                    'iconUrl':'Money-icon.png',
                    'title':'Limit Reached.',
                    'message':"Uh Oh! You've reached your limit."
                }

                chrome.notifications.create('limitNotif',notifOptions);
            }
        });
        
        total.innerHTML=newTotal;
        amount.value='';
    });
});



// name.addEventListener('keyup',() => {
//     heading.innerHTML="Hello " + name.value;
// })