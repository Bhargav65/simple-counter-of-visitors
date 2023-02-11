const countE1=document.getElementById("count");
countvisits();
function countvisits() {
    fetch('https://api.countapi.xyz/update/sath/2871f1cb-ff50-4bc7-89c3-a9ab2b570f45/?amount=1')
    .then((res)=>res.json())
    .then((res)=>{
        countE1.innerHTML=res.value;
    });
}
