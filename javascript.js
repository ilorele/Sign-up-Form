const pwdInputEl = document.getElementById("pwd");
const pwdConfirmEl = document.getElementById("confirm-pwd");


function checkMatch(pwd, pwdConfirm) {
    if (pwd.value === pwdConfirm.value) {
        console.log("SUCCESS");
        toggleClass(pwd);
    } else {
        console.log("password do not match");
    }
}

function toggleClass(inputField) {
    inputField.classList.add("cute");
    inputField.style.backgroundColor = "blue";
}

pwdConfirmEl.addEventListener("input", () => {
    checkMatch(pwdInputEl, pwdConfirmEl);
});