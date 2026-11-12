async function loadMessages() {
  const response = await fetch("http://localhost:3000/messages");

  const data = await response.json();

  document.getElementById("totalMessages").innerText = data.length;

  const container = document.getElementById("messagesContainer");

  data.reverse().forEach((msg) => {
    container.innerHTML += `

          <div class="message-card">

            <h3>
              ${msg.name}
            </h3>

            <p class="email">
              📧 ${msg.email}
            </p>

            <p>
              ${msg.message}
            </p>

          </div>

        `;
  });
}

loadMessages();
