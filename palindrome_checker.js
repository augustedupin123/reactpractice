const text1 = document.querySelector("inputs input"),
checkbtn = document.querySelector(".inputs button");
let filterinput;
checkbtn.addEventListener('click', ()=>{
    let text2 = filterinput.split("").reverse().join("");
    checkbtn.style.display = "block";
    if(filterinput != text2){
        return checkbtn.innerHTML = `No,<span>${text1.value}</span>isn't a palindrome`
    }
    `Yes,<span>${text1.value}</span>is a palindrome`
})
text1.addEventListener("keyup", ()=>{
    let filterinput = text1.ariaValueMax.replace(/[^A-Z0-9]/ig, "");
    if(filterinput){
        return checkbtn.classList.add("active");
    }
    checkbtn.classList.remove("active");
    filterinput.style.display = "none";
    checkbtn.style.display = "block";
})