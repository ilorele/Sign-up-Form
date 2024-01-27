const pwdContainerEl = document.querySelector(".pwd-input-container");
const pwdInputEl = document.getElementById("pwd");
const pwdConfirmEl = document.getElementById("confirm-pwd");
const pwdErrorMessageEl = document.querySelector(".pwd-error-msg");


function checkMatch(pwd, pwdConfirm) {
    if (pwd.value !== pwdConfirm.value) {
        addErrorClass(pwd);
        addErrorClass(pwdConfirm);
        pwdErrorMessageEl.style.visibility = "visible";
    } else {
        removeErrorClass(pwd);
        removeErrorClass(pwdConfirm);
        pwdErrorMessageEl.style.visibility = "hidden";
    }
}

function addErrorClass(inputField) {
    inputField.classList.add("error");
}

function removeErrorClass(inputField) {
    inputField.classList.remove("error");
}


pwdConfirmEl.addEventListener("input", () => {
    pwdConfirmEl.pattern = pwdInputEl.value;
    checkMatch(pwdInputEl, pwdConfirmEl);
});