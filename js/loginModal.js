// LOGIN MODAL
var loginModal = document.getElementById("myModalLogin");
var loginBtn = document.getElementById("myBtnLogin");
var loginSpan = document.getElementsByClassName("login_close_modal")[0];

loginBtn.onclick = function() {
  loginModal.style.display = "block";
}

loginSpan.onclick = function() {
  loginModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
}