const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const status = document.getElementById("formStatus");

  contactForm.addEventListener("submit", () => {
    status.textContent = "Sending message...";
    status.className = "";
  });
}
