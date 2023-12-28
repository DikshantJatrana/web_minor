const main = document.querySelector("#dolist");
const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const lists = document.querySelector("#dolist");

function savadata(){
    localStorage.setItem("data",lists.innerHTML);
}

btn.disabled = true;
input.addEventListener("input",()=>{
    if(input.value != ""||input.value.length>0){
        btn.disabled=false;
    }
    else{
        btn.disabled=true;
    }
});


const checked =(element)=>{
    if(element.classList.contains("img")){
        element.classList.remove("img");
        element.parentElement.querySelector("p").classList.remove("effect");
    }
    else{
        element.classList.add("img");
        element.parentElement.querySelector("p").classList.add("effect");
    }
}


const para =(element)=>{
    if(element.classList.contains("effect")){
        element.classList.remove("effect");
        element.parentElement.querySelector(".check").classList.remove("img");
    }
    else{
        element.classList.add("effect");
        element.parentElement.querySelector(".check").classList.add("img");
    }
}


const parent=(element)=>{
    if(element.querySelector(".check").classList.contains("img")){
        element.querySelector(".check").classList.remove("img");
        element.querySelector("p").classList.remove("effect");
    }
    else{
        element.querySelector(".check").classList.add("img");
        element.querySelector("p").classList.add("effect");
    }
}


lists.addEventListener("click",(element)=>{
    const ele = element.target;
    if(ele.tagName==="DIV"){
        if(ele.classList.contains("check")){
            checked(ele);
            savadata();
        }
        else{
            parent(ele);
            savadata();
        }
    }
    else if(ele.tagName==="P"){
        para(ele);
        savadata();
    }
    else if(ele.tagName==="IMG"){
        ele.parentElement.remove();
        savadata();
    }
});

btn.addEventListener("click",()=>{
    let newtask = document.createElement("div");
    const html = `  <div class="check">
    </div>
    <p>${input.value}</p>
    <img src="close.png" alt="cross">`;
    newtask.innerHTML = html;
    newtask.classList.add("list");
    main.append(newtask);
    input.value ='';
    savadata();
    btn.disabled = true;
});

function showdata(){
    lists.innerHTML = localStorage.getItem("data");
}

showdata();