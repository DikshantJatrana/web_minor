const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const sLetters = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "1234567890";
const Symbols = "~!@#$%^&*_-?:;><,./=+";
const allchar = letters+Numbers+sLetters+Symbols;
const char = 12;
const input = document.querySelector(".input");
const btn = document.querySelector(".Generate");
const copy = document.querySelector(".copy");

function rand(element){
    const len = element.length-1;
    const ran = Math.floor(Math.random()*len);
    return element[ran];
}

btn.addEventListener("click",()=>{
    let password ="";
    password += rand(letters);
    password += rand(sLetters);
    password += rand(Symbols);
    password += rand(Numbers);
    for(let i=3;i<char;i++){
        password += rand(allchar);
    }
    input.value =password;
});

copy.addEventListener("click",()=>{
    input.select();
    document.execCommand('copy');
});



