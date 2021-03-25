const name = document.querySelector("#name");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const error = document.querySelector("#error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Name is required");
  }
  if (password.value.length <= 8) {
    messages.push("Password must be 8 characters or longer");
  }
  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", ");
  }
});
