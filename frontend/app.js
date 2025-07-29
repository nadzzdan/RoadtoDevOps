const API_URL = "http://<VM-IP>:5000/messages"; // Update with actual IP or domain

function sendMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value;

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  }).then(() => {
    input.value = "";
    loadMessages();
  });
}

function loadMessages() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("messageList");
      list.innerHTML = "";
      data.forEach(msg => {
        const li = document.createElement("li");
        li.textContent = msg.content;
        list.appendChild(li);
      });
    });
}

window.onload = loadMessages;
