let userName = document.querySelector(".username")
let passWord = document.querySelector(".password")
let modal = document.querySelector(".modal-content")

function dataValidation(event) {
    event.preventDefault(); 
    let userNameValue = userName.value;
    let passWordValue = passWord.value;

    modal.style.display = "none";  
    modal.innerHTML = "";  

    if(userNameValue.length<12 || passWordValue.length<8) {
        modal.style.display = "inline";
        modal.innerHTML = "wrong username or password";
        modal.style.backgroundColor ="red";
    } else {
        modal.style.backgroundColor ="green";
        modal.innerHTML = "Log in Successfully";
        modal.style.display = "inline";
    }

    setTimeout(function() {
        modal.style.display = "none";
        modal.innerHTML = "";  
        userName.value = "";
        passWord.value = "";
        document.getElementById('message').textContent = "";
    }, 2000)

    console.log(userNameValue,passWordValue);
}
document.querySelector("#loginForm").addEventListener("submit", dataValidation);

function passWordValidation(){
    let message = document.getElementById('message');
    if(passWord.value.length>=8){
        message.classList.remove('invalid');
        message.classList.add('valid');
        message.textContent="Password is valid.";
    }else{
        message.classList.remove('valid');
        message.classList.add('invalid');
        message.textContent="Password must be at least 8 characters.";
    }

}
