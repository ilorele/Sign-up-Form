const pwdContainerEl = document.querySelector(".pwd-input-container")
const pwdInputEl = document.getElementById("pwd");
const pwdConfirmEl = document.getElementById("confirm-pwd");


function checkMatch(pwd, pwdConfirm) {
    if (pwd.value !== pwdConfirm.value) {
        console.log("password do not match");
        addErrorClass(pwd);
        addErrorClass(pwdConfirm);
    } else {
        console.log("SUCCESS");
        removeErrorClass(pwd);
        removeErrorClass(pwdConfirm);
    }
}

function addErrorClass(inputField) {
    inputField.classList.add("error");
}

function removeErrorClass(inputField) {
    inputField.classList.remove("error");
}


pwdConfirmEl.addEventListener("input", () => {
    checkMatch(pwdInputEl, pwdConfirmEl);
});