document.addEventListener("mousemove", (e) => {
    const digit = document.createElement("div");
    digit.classList.add("digit");
    digit.innerText = Math.random() > 0.5 ? "0" : "1";

    document.body.appendChild(digit);
    digit.style.left = e.clientX + "px";
    digit.style.top = e.clientY + "px";

    setTimeout(() => {
        digit.remove();
    }, 1000);
});


  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_qoz3a3c", "template_a1d1nmg", this)
      .then(() => {
        alert("Message Sent Successfully!");
      }, (error) => {
        alert("Failed to send message: " + JSON.stringify(error));
      });
  });


const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const links = document.querySelectorAll(".nav-links a");
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

