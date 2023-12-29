const btn = document.querySelector(".btn");
const main = document.querySelector(".main");
const add = document.querySelector(".add");
const input = document.querySelector(".head input");
const qr = document.querySelector("#qrimg");

btn.disabled=true;
input.addEventListener("input",()=>{
    if(input.value==""||input.value.length<0){
        btn.disabled=true;
    }
    else{
        btn.disabled=false;
    }
})

function generate(){
    qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
}

btn.addEventListener("click",()=>{
    main.classList.add("expand");
    add.classList.add("qr");
    generate();
    input.value=""
    btn.disabled=true;
});

