window.addEventListener("load", (e) => {
  const statusDisplay = document.querySelector(".display");
  statusDisplay.textContent = navigator.onLine ? "Connected" : "Offline";
});

window.addEventListener("offline", (e) => {
  const statusDisplay = document.querySelector(".display");
  statusDisplay.textContent = "You need to connect to the Internet";
});

window.addEventListener("online", (e) => {
  const statusDisplay = document.querySelector(".display");
  statusDisplay.textContent = "Connected";
});
