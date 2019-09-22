var school = document.getElementById("addSchoolForm");
var schoolYear = document.getElementById("schoolYear");
var emailPre = document.getElementById("emailFormPre");
var emailPost = document.getElementById("emailFormPost");
var passwd = document.getElementById("passwdForm");
var passRetype = document.getElementById("passRetypeForm");
var firstName = document.getElementById("FirstNameForm");
var lastName = document.getElementById("LastNameForm");
var phoneNum = document.getElementById("phoneNum");

/*** School Validation */
var school_Regex_tooShort = new RegExp(/^.{0,3}$/, "i");

function schoolValidation(elm, isRequired) {
    if (isRequired === false) {
        elm.setCustomValidity("");
        return;
    } else {
        if (elm.value == "") {
            elm.setCustomValidity("Hãy nhập Tên Trường của bạn.");
        } else if (school_Regex_tooShort.test(elm.value)) {
            elm.setCustomValidity("Tên Trường ngắn quá! Bạn có thể cho mình biết tên đầy đủ được không ^^!");
        } else {
            elm.setCustomValidity("");
        }
    }
}
/*** School Year Validation */
function schoolYearValidate(elm) {
    if (elm.value == "") {
        elm.setCustomValidity("Hãy nhập Niên khóa của bạn.");
    } else if (parseInt(elm.value) <= 1900) {
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
    if (elm.value == "") {
        elm.setCustomValidity("");
    } else if (!phoneNum_Regex.test(elm.value)) {
        elm.setCustomValidity("Hãy nhập đúng 10 chữ số của Số điện thoại (bắt đầu bằng số '0').");
    } else {
        elm.setCustomValidity("");
    }
}

function signUpValidate() {
    if (school.required == true) {
        schoolValidation(school, true);
    }

    schoolYearValidate(schoolYear);
    emailPreValidate(emailPre);
    emailPostValidate(emailPost);
    passwdValidate(passwd);
    nameValidate(firstName, lastName);
    phoneNumValidate(phoneNum);
}
// Real-time setting
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

$(document).ready(function() {
    $selectPickerContainer = $(".main-area__body .selectpicker-container");
    $selectSchoolContainer = $("#selectSchool-container");
    $selectFacultyContainer = $("#selectFaculty-container");
    $formSwap_1 = $(".form-swap--form-1");
    $formSwap_2 = $(".form-swap--form-2");
    $emailDomain = $("#emailFormPost");

    /*** Custom select-picker ***/
    $("#selectSchool").on("changed.bs.select", function(e, clickedIndex, isSelected, previousValue) {
        if (clickedIndex === 1) {
            setTimeout(function() {
                $emailDomain.val("hcmut.edu.vn");
            }, 250);
            $emailDomain.addClass("focused");
            $emailDomain.attr("readonly", true);

            $formSwap_1.fadeIn();
            $formSwap_2.fadeOut();

            school.required = false;
            schoolValidation(school, false);
        } else {
            $emailDomain.val("");
            $emailDomain.removeClass("focused");
            $emailDomain.attr("readonly", false);

            $formSwap_2.fadeIn();
            $formSwap_1.fadeOut();

            school.required = true;
            schoolValidation(school, true);
        }

        if (isSelected == true) {
            $selectSchoolContainer.css("color", "rgba(0, 0, 0, 0.75)");

            $("#selectSchool").on("hidden.bs.select", function() {
                $selectSchoolContainer.addClass("focused");
            });
        }
    });

    $("#selectFaculty").on("changed.bs.select", function(e, clickedIndex, isSelected, previousValue) {
        if (isSelected == true) {
            $selectFacultyContainer.css("color", "rgba(0, 0, 0, 0.75)");

            $("#selectFaculty").on("hidden.bs.select", function() {
                $selectFacultyContainer.addClass("focused");
            });
        }
    });

    $("#selectSchool").on("show.bs.select", function() {
        $selectSchoolContainer.removeClass("focused");
    });

    $("#selectFaculty").on("show.bs.select", function() {
        $selectFacultyContainer.removeClass("focused");
    });

    /*** RULES ***/
    $("#schoolYear").inputFilter(function(value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 2019);
    });

    $("#phoneNum").inputFilter(function(value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 1000000000);
    });
});
