document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  if (!form) {
    console.error("contactForm not found.");
    return;
  }

  console.log("Contact form found and script loaded.");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    console.log("Form submitted");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    if (name && email && message) {
      response.classList.remove("d-none", "text-danger");
      response.classList.add("text-success");
      response.textContent = "Message sent!";

      console.log("Success: All fields are filled. Showing success message.");
      form.reset();
    } else {
      response.classList.remove("d-none", "text-success");
      response.classList.add("text-danger");
      response.textContent = "Please fill out all fields.";

      console.warn("Validation failed: One or more fields are empty.");
    }
  });
});
