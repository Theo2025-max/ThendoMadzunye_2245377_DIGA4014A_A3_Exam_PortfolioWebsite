const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const status = document.getElementById("formStatus");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      status.textContent = "Please complete all fields.";

      status.className = "form-error";

      return;
    }

    status.textContent =
      "Message submitted successfully. Email integration will be connected later.";

    status.className = "form-success";

    contactForm.reset();
  });
}
