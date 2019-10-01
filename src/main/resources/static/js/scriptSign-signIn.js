/*** Email validation ***/
var email = document.getElementById("emailForm");
var emailFull_Regex = new RegExp(/^[A-Za-z][A-Za-z0-9_\.]{4,64}@[A-Za-z0-9_\-]{2,}(\.[A-Za-z0-9_\-]{2,4}){1,2}$/, "i");

function validateEmail(elm) {
    var value = elm.value;
    if (value == "") {
        elm.setCustomValidity("Hãy nhập Email của bạn.");
    } else if (!emailFull_Regex.test(value)) {
        elm.setCustomValidity("Email không đúng định dạng!");
    } else {
        elm.setCustomValidity("");
    }
}
/*** Password Validation ***/
var passwd = document.getElementById("passwdForm");

function validatePassword(elm) {
    var value = elm.value;
    if (value == "") {
        elm.setCustomValidity("Hãy nhập mật khẩu của bạn.");
    } else {
        elm.setCustomValidity("");
    }
}

function validateSignIn() {
    validateEmail(email);
    validatePassword(passwd);
}
