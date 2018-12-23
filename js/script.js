var link = document.querySelector(".link-feedback-form");
var popup = document.querySelector(".dialog-feedback-form");
var wrapper = document.querySelector(".overlay-pop-up");
var close = popup.querySelector(".feedback-form-close");
var userName = popup.querySelector("[name=first-name]");
var form = popup.querySelector("form");
var userMail = popup.querySelector("[name=email-for-answer]");
var feedback = popup.querySelector("[name=feedback-textarea]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  wrapper.classList.add("modal-show-wrapper");
  userName.focus();
  if (storage) {
userMail.value = storage;
}
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  wrapper.classList.remove("modal-show-wrapper");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userMail.value || !feedback.value) {
  evt.preventDefault();
} else {
  if (isStorageSupport) {
  localStorage.setItem("userMail", userMail.value);
}
}
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
evt.preventDefault();
if (popup.classList.contains("modal-show") && wrapper.classList.contains("modal-show-wrapper")) {
 popup.classList.remove("modal-show");
 wrapper.classList.remove("modal-show-wrapper");
}
}
});
