$(document).ready(function() {
    /*** Custom select-picker ***/
    $selectPickerContainer = $(".main-body .selectpickerContainer");
    $selectPickerDD_toggle = $(".main-body .selectpickerContainer .dropdown-toggle");
    $selectPickerDD_toggle.append("<span class='running-indicator'></span>");

    $("#selectSchool").on("show.bs.select", function() {
        $selectPickerContainer.css("color", "rgba(0, 0, 0, 0.75)");
        $selectPickerDD_toggle.removeClass("focusCustom");
    });

    $("#selectSchool").on("hidden.bs.select", function() {
        if ($selectPickerDD_toggle.attr("title").indexOf("Chọn") !== 0) {
            $selectPickerDD_toggle.addClass("focusCustom");
        } else {
            $selectPickerContainer.css("color", "rgba(0, 0, 0, 0.35)");
            $selectPickerDD_toggle.removeClass("focusCustom");
        }
    });

    $emailDomain = $("#emailFormPost");
    $("#selectSchool").on("changed.bs.select", function(e, clickedIndex, isSelected, previousValue) {
        if (clickedIndex === 1) {
            setTimeout(function() {
                $emailDomain.val("hcmut.edu.vn");
            }, 150);
            $emailDomain.addClass("focusCustom");
            $emailDomain.prop("disabled", true);
        } else {
            $emailDomain.val("");
            $emailDomain.removeClass("focusCustom");
            $emailDomain.prop("disabled", false);
        }

        if (isSelected == true) {
            $selectPickerContainer.css("color", "rgba(0, 0, 0, 0.75)");
        }

        if (clickedIndex === 7) {
            $selectPickerDD_toggle.css("width", "auto");
            $(".form-invisible").fadeIn();
            document.getElementById("addUniForm").required = true;
        } else {
            $selectPickerDD_toggle.css("width", "100%");
            $(".form-invisible").hide();
            document.getElementById("addUniForm").required = false;
        }
    });
    /*** RULES ***/
    $("#schoolYear").inputFilter(function(value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 2019);
    });

    $("#phoneNum").inputFilter(function(value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 1000000000);
    });
});

/*** School Validation */
var school_Regex_tooShort = new RegExp(/^.{0,4}$/, "i");
var school_Regex_checkAbbre = new RegExp(/\(\w{0,9}\)/, "i");

function schoolValidation(elm) {
    if (elm.value == "") {
        elm.setCustomValidity("Hãy nhập Tên Trường của bạn.");
    } else if (school_Regex_tooShort.test(elm.value)) {
        elm.setCustomValidity("Tên Trường ngắn quá! Bạn có thể cho mình biết tên đầy đủ được không ^^!");
    } else if (!school_Regex_checkAbbre.test(elm.value)) {
        elm.setCustomValidity(
            "Bạn có thể cho biết tên viết tắt của Trường bạn được không? Hãy viết bên trong dấu ngoặc đơn:'(' và ')'!"
        );
    } else {
        elm.setCustomValidity("");
    }
}
/*** Faculty Validation */
function facultyValidate(elm) {
    if (elm.value == "") {
        elm.setCustomValidity("Hãy nhập Khoa/ngành của bạn.");
    } else {
        elm.setCustomValidity("");
    }
}
/*** School Year Validation */
function schoolYearValidate(elm) {
    if (elm.value == "") {
        elm.setCustomValidity("Hãy nhập Niên khóa của bạn.");
    } else if (parseInt(elm.value) <= 1800) {
        elm.setCustomValidity("Bạn có phải là người thuộc Hội Thiên Cổ?");
    } else {
        elm.setCustomValidity("");
    }
}
/*** Email validation */
var emailPre_Regex = new RegExp(/^[A-Za-z][A-Za-z0-9_\.]{4,64}$/, "i");

function emailPreValidate(elm) {
    if (elm.value == "") {
        elm.setCustomValidity("Hãy nhập Tên Email của bạn.");
    } else if (!emailPre_Regex.test(elm.value)) {
        elm.setCustomValidity("Tên Email không hợp lệ!");
    } else {
        elm.setCustomValidity("");
    }
}

var emailPost_Regex = new RegExp(/^[A-Za-z0-9_\-]{2,}(\.[A-Za-z0-9_\-]{2,4}){1,2}$/, "i");

function emailPostValidate(elm) {
    if (elm.value == "") {
        elm.setCustomValidity("Hãy nhập Tên miền Email của bạn.");
    } else if (!emailPost_Regex.test(elm.value)) {
        elm.setCustomValidity("Tên miền Email không hợp lệ!");
    } else {
        elm.setCustomValidity("");
    }
}
/*** Password and Retype-password validation */
var passwd_Regex = new RegExp(/^[\w\!\@\#\$\&\,\.]{8,}$/, "i");

function passwdValidate(elm) {
    if (elm.value == "") {
        elm.setCustomValidity("Hãy nhập mật khẩu của bạn.");
    } else if (!passwd_Regex.test(elm.value)) {
        elm.setCustomValidity(
            "Mật khẩu phải có ít nhất 8 ký tự là Chữ cái hoặc Chữ số và chỉ cho phép các ký tự đặc biệt: , . ! @ # $ & "
        );
    } else {
        elm.setCustomValidity("");
    }
}

function validateInputMatching(first, second) {
    if (first.value != second.value) {
        second.setCustomValidity("Mật khẩu không trùng khớp!");
    } else {
        second.setCustomValidity("");
    }
}
/*** First Name and Last Name validation */
function nameValidate(first, last) {
    if (first.value == "") {
        first.setCustomValidity("Hãy nhập Tên của bạn.");
    } else {
        first.setCustomValidity("");
    }

    if (last.value == "") {
        last.setCustomValidity("Hãy nhập Họ của bạn.");
    } else {
        last.setCustomValidity("");
    }
}
/*** Phone Number Validation */
var phoneNum_Regex = new RegExp(/^[0][0-9]{9}$/);
function phoneNumValidate(elm) {
    if (!phoneNum_Regex.test(elm.value)) {
        elm.setCustomValidity("Hãy nhập đúng 10 chữ số của Số điện thoại (bắt đầu bằng số '0').");
    } else {
        elm.setCustomValidity("");
    }
}

// var school = document.getElementById("addUniForm");
var faculty = document.getElementById("falcuty");
var schoolYear = document.getElementById("schoolYear");
var emailPre = document.getElementById("emailFormPre");
var emailPost = document.getElementById("emailFormPost");
var passwd = document.getElementById("passwdForm");
var passRetype = document.getElementById("passRetypeForm");
var firstName = document.getElementById("FirstNameForm");
var lastName = document.getElementById("LastNameForm");
var phoneNum = document.getElementById("phoneNum");

function signUpValidate() {
    // schoolValidation(school);
    facultyValidate(faculty);
    schoolYearValidate(schoolYear);
    emailPreValidate(emailPre);
    emailPostValidate(emailPost);
    passwdValidate(passwd);
    nameValidate(firstName, lastName);
    phoneNumValidate(phoneNum);
}
// Real-time setting
faculty.onkeyup = function() {
    facultyValidate(faculty);
};
emailPre.onkeyup = function() {
    emailPreValidate(emailPre);
};
emailPost.onkeyup = function() {
    emailPostValidate(emailPost);
};
passwd.onkeyup = function() {
    passwdValidate(passwd);
};
firstName.onkeyup = function() {
    nameValidate(firstName, lastName);
};
lastName.onkeyup = function() {
    phoneNumValidate(phoneNum);
};

passwd.onchange = function() {
    validateInputMatching(passwd, passRetype);
};
passRetype.onkeyup = function() {
    validateInputMatching(passwd, passRetype);
};
