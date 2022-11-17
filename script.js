const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-verification");
const form = document.querySelector("form");

function checkPassword() {
    if (password.value !== passwordConfirm.value) {
        form.addEventListener("submit", function(e) {
            passwordConfirm.classList.toggle("error");
            passwordConfirm.value = "";
            passwordConfirm.placeholder = "Doesn't Match Password";
            e.preventDefault();
        })
    } else {
        passwordConfirm.classList.toggle("error");
        form.submit();
    }
}