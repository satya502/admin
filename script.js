document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name && email && message) {
      document.getElementById("formStatus").textContent = "Message sent successfully!";
      document.getElementById("formStatus").style.color = "green";
      this.reset();
    } else {
      document.getElementById("formStatus").textContent = "Please fill in all fields.";
      document.getElementById("formStatus").style.color = "red";
    }
  });
  