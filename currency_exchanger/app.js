const baseURL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll(".sel select")
const btn = document.querySelector("#btn");
const fromcurr = document.querySelector("#from select");
const tocurr = document.querySelector("#to select");
const result = document.querySelector("#amt");


for(let drop of dropdown){
    for(let code in countryList){
        let newoption  = document.createElement("option");
        newoption.innerHTML = code;
        newoption.value=code;
        if(drop.name == "From"&&code=="USD"){
            newoption.selected = "selected";
        }else if(drop.name == "To"&&code=="INR"){
            newoption.selected = "selected";
        }
        drop.append(newoption);
    }
    drop.addEventListener("change",(evt)=>{
        upadateflag(evt.target);
    });
}

const upadateflag =(ele)=>{
    let code = ele.value;
    let link = countryList[code];
    let newsrc = `https://flagsapi.com/${link}/flat/64.png`;
    let img = ele.parentElement.querySelector("img");
    img.src = newsrc;
}

btn.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount");
    let amt = amount.value;
    if(amt==0||amt<0){
        amt = 1;
        amount.value ="1";
    }
    const URL = `${baseURL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[tocurr.value.toLowerCase()];
    let finalAmount = amt*rate;
    result.innerText = finalAmount;
})