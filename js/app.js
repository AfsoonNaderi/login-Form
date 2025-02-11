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
    }, 2000)

    console.log(userNameValue,passWordValue);
}
document.querySelector("#loginForm").addEventListener("submit", dataValidation);

// setTimeout(function() {
//     console.log("This message appears after 3 seconds");
// }, 6000); // 3000 milliseconds = 3 seconds
