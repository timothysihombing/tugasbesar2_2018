var isUsernameValid = false;
var isEmailValid = false;

function validateRegisterForm() {
  var alerts = "";
  var form = document.forms["myform"];

  alerts += validateName(form["name"].value);
  if (isUsernameValid) {
    alerts += validateUsername(form["username"].value);
  } else {
    alerts += "*Username is not valid\n";
  }
  if (isEmailValid) {
    alerts += validateEmail(form["email"].value);
  } else {
    alerts += "*Email is not valid\n";
  }
  alerts += validatePassword(form["password"].value, form["password2"].value);
  alerts += validateAddress(form["address"].value);
  alerts += validatePhone(form["phone"].value);

  if (alerts.length == 0) {
    return true;
  }
  alert(alerts);
  return false;
}

function validateUsernameAjax() {
  var username = document.getElementById("username");
  var status = document.getElementById("status");
  if (username.value.length != 0) {
    fetch("/server/api/post_username.php", {
      method: "post",
      body: JSON.stringify({
        username: username.value
      })
    })
      .then(res => res.json())
      .then(statusNumber => {
        if (statusNumber == 1) {
          status.innerHTML = '<img src="../assets/img/checklist-orange.png"/>';
          isUsernameValid = true;
        } else {
          status.innerHTML = '<img src="../assets/img/close.png"/>';
          isUsernameValid = false;
        }
      })
      .catch(err => console.error(err));
  } else {
    status.innerHTML = '<img src="../assets/img/close.png"/>';
    isUsernameValid = false;
  }
}

function validateEmailAjax() {
  var email = document.getElementById("email");
  var status = document.getElementById("status2");

  if (email.value.length != 0) {
    fetch("/server/api/post_email.php", {
      method: "post",
      body: JSON.stringify({
        email: email.value
      })
    })
      .then(res => res.json())
      .then(statusNumber => {
        if (statusNumber == 1) {
          status.innerHTML = '<img src="../assets/img/checklist-orange.png"/>';
          isEmailValid = true;
        } else {
          status.innerHTML = '<img src="../assets/img/close.png"/>';
          isEmailValid = false;
        }
      })
      .catch(err => console.error(err));
  } else {
    status.innerHTML = '<img src="../assets/img/close.png"/>';
    isEmailValid = false;
  }
}
