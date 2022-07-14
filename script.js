const signbtn =document.querySelector(".signupbtn");
const logbtn =document.querySelector(".loginbtn");
const movbtn =document.querySelector(".movebtn");
const signup =document.querySelector(".signup")
const login =document.querySelector(".login")

logbtn.addEventListener("click",()=>{
    movbtn.classList.add("rightbtn");
    login.classList.add("loginform");
    signup.classList.remove("signupform");
    movbtn.innerHTML="LogIn";
})

signbtn.addEventListener("click",()=>{
    movbtn.classList.remove("rightbtn");
    login.classList.remove("loginform");
    signup.classList.add("signupform");
    movbtn.innerHTML="SignUp";
})