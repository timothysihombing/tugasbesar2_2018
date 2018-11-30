var edit_profile = document.getElementsByClassName("edit-profile")[0];
var name_edit_profile = document.getElementById("edit-profile__name");
var address_edit_profile = document.getElementById("edit-profile__address");
var phone_edit_profile = document.getElementById("edit-profile__phone");
var profile_tab = document.getElementById("profile_tab");

profile_tab.className = "header_app_content orange-background hover_lightOrange"
function validateRegisterForm() {
    var alerts = "";

    alerts += validateName(name_edit_profile.value);
    alerts += validateAddress(address_edit_profile.value);
    alerts += validatePhone(phone_edit_profile.value);

    if (alerts.length == 0) {
        return true;
    }
    alert(alerts);
    return false;
}