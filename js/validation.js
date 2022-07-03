var checkValidation = function() {
    var valid = true;
    //checkNull
    valid = checkNull("aFullname", "error_fullname") & checkNull("aEmail", "error_email") & checkNull("aPhone", "error_phone") & checkNull("aCVLetter", "error_CVLetter");
    //  checkAllLetter
    valid &= checkLetter("aFullname", "error_fullnameAllLetter");
    if (!valid) {
        return false;
    }

    return true;
}


var checkNull = function(idValue, idError) {
    var inputData = document.getElementById(idValue);
    if (inputData.value.trim() === "") {
        document.getElementById(idError).innerHTML = inputData.name + " not be empty!";
        document.getElementById(idError).style.display = block;
        return false;
    } else {
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = none;
        return true;
    }
}

var checkLetter = function(idValue, idError) {
    var inputData = document.getElementById(idValue)
    var regexLetters = /^[A-Za-z]+$/;
    if (regexLetters.test(inputData.value)) {
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idError).style.display = none;
        return true;
    } else {
        document.getElementById(idError).innerHTML = inputData.name + " must be the letter";
        document.getElementById(idError).style.display = block;
    }
}

document.getElementById('btnSend').onclick = checkValidation;