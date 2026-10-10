
const helloButton = document.querySelector("#hello-button");
const message = document.querySelector("#message");

helloButton.addEventListener("click", function() {
  message.textContent = "Hello, future developer!";
});
