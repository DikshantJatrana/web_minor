const next = document.querySelector("#next");
const card1 = document.querySelector("#card1");
const card2 =  document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const submit = document.querySelector("#submit");
const view = document.querySelector(".view");
const input = document.querySelector("#card1");

next.addEventListener("click",()=>{
    card1.classList.add("hidden");
    card2.classList.remove("hidden");
})

submit.addEventListener("click",()=>{
    card2.classList.add("hidden");
    card3.classList.remove("hidden");
    card3.classList.add("up");
})

let pass =0;
function password(){
    const passwor = document.querySelector(".password input");
    passwor.type="text";
    pass=1;
}
function hide_password(){
    const passwor = document.querySelector(".password input");
    passwor.type="password";
    pass=0;
}

view.addEventListener("click",()=>{
    if(pass === 0){
        password();
    }
    else{
        hide_password();
    }
})

input.addEventListener("click",(element)=>{
    const ele = element.target;
    if(ele.tagName=="INPUT"){
        const span = ele.parentElement.parentElement.querySelector("span");
        span.classList.remove("visiblity");
    }
})
function name_validity(){
    const name = document.querySelector(".name");
    if(name.value.lenght<=0){
        name.parentElement.parentElement.querySelector("span").innerText = "Enter full name";
    }
    if(!name.value.match(/^[a-zA-Z]+([ -][a-zA-Z]+)*$/)){
        name.parentElement.parentElement.querySelector("span").innerText = "Wrong Name format";
    }
    else{
        name.parentElement.parentElement.querySelector("span").innerText = "";
    }
}
function email_validity(){
    const name = document.querySelector(".email");
    if(name.value.length==0){
        name.parentElement.parentElement.querySelector("span").innerText = "Enter email";
    }
    if(!name.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        name.parentElement.parentElement.querySelector("span").innerText = "enter correct Email";
    }
    else{
        name.parentElement.parentElement.querySelector("span").innerText = "";
    }
}
function dob(){
    const dob = document.querySelector(".dob");
    if(dob.value.length>0){
        dob.parentElement.parentElement.querySelector("span").innerHTML="";
    }
}
function password_storng(){
    const password = document.querySelector(".password");
    if(password.value.length > 0 && password.value.length <= 4){
        password.parentElement.parentElement.querySelector("span").innerHTML ="weak password";
        password.parentElement.parentElement.querySelector("span").style.color = "red";
    }
    else if(password.value.length > 4 && password.value.length <= 7){
        password.parentElement.parentElement.querySelector("span").innerHTML = "medium password";
        password.parentElement.parentElement.querySelector("span").style.color = "yellow";
    }
    else if(password.value.length>7){
        password.parentElement.parentElement.querySelector("span").innerHTML = "strong password";
        password.parentElement.parentElement.querySelector("span").style.color = "green";
    }
}
function phone_validity(){
    const phone = document.querySelector(".phone");
    console.log(phone.value.length);
    if(phone.value.length<10 && !phone.value.match(/^\d{10}$/)){
        phone.parentElement.parentElement.querySelector("span").innerHTML = "enter 10 digits";
    }
    else{
        phone.parentElement.parentElement.querySelector("span").innerHTML="";
    }
}

input.addEventListener("input",(element)=>{
    const ele = element.target.classList
    if(ele=="name"){
        name_validity();
    }
    else if(ele=="email"){
        email_validity();
    }
    else if(ele=="dob"){
        dob();
    }
    else if(ele=="password"){
        password_storng();
    }
    else if(ele=="phone"){
        phone_validity();
    }
});

function snack(ele){
    const snac = document.querySelector(".snack")
    const slide = document.createElement("div");
    if(ele.contains("success")){
        slide.innerHTML='<span><img src="yes.png" alt="yes"></span><p>Success</p>'
        slide.classList.add("slide");
        slide.classList.add("popsuccess");
    }
    else if(ele.contains("failed")){
        slide.innerHTML='<span><img src="remove.png" alt="yes"></span><p>Failed</p>'
        slide.classList.add("slide");
        slide.classList.add("popfailed");
    }
    else if(ele.contains("invalid")){
        slide.innerHTML='<span><img src="warning.png" alt="yes"></span><p>Invalid</p>'
        slide.classList.add("slide");
        slide.classList.add("popinvalied");
    }
    snac.append(slide);
    setTimeout(() => {
        slide.remove();
    }, 5000);
}

card2.addEventListener("click",(element)=>{
    const ele = element.target.classList;
    if(element.target.tagName==="BUTTON"){
        snack(ele);
    }
})