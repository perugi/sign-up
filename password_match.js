pwd = document.querySelector("#pwd");
confirmPwd = document.querySelector("#confirm_pwd");
passwordVal = document.querySelector(".password-validation");

console.log(pwd, confirm_pwd);

pwd.addEventListener('input', check_match);
confirmPwd.addEventListener('input', check_match);

function check_match() {
    let password = pwd.value;
    let confirm = confirmPwd.value;

    if (password && confirm) {
        if (password !== confirm) {
            passwordVal.textContent = "* Passwords do not match";
            pwd.setCustomValidity("Invalid field.");
            confirmPwd.setCustomValidity("Invalid field.");
        } else {
            passwordVal.textContent = "";
            pwd.setCustomValidity("");
            confirmPwd.setCustomValidity("");
        }

    }
    else {
        passwordVal.textContent = "";
        pwd.setCustomValidity("");
        confirmPwd.setCustomValidity("");
    }
}
