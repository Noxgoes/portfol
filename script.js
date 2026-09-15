const form = document.querySelector("#contact-form");

if (form) {
  const fields = [
    {
      control: form.elements.name,
      error: document.querySelector("#name-error"),
      message: "Enter your name.",
    },
    {
      control: form.elements.email,
      error: document.querySelector("#email-error"),
      message: "Enter a valid email address.",
    },
    {
      control: form.elements.message,
      error: document.querySelector("#message-error"),
      message: "Enter a short project message.",
    },
    {
      control: form.elements.consent,
      error: document.querySelector("#consent-error"),
      message: "Confirm that Nakkul may contact you about this inquiry.",
    },
  ];

  const status = document.querySelector("#form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstInvalid = null;

    fields.forEach(({ control, error, message }) => {
      const isValid = control.checkValidity();
      control.setAttribute("aria-invalid", String(!isValid));
      error.textContent = isValid ? "" : message;

      if (!isValid && !firstInvalid) {
        firstInvalid = control;
      }
    });

    if (firstInvalid) {
      status.textContent = "Please correct the highlighted fields.";
      firstInvalid.focus();
      return;
    }

    form.reset();
    fields.forEach(({ control }) => {
      control.setAttribute("aria-invalid", "false");
    });
    status.textContent = "Thank you. Your inquiry is ready to send.";
  });

  fields.forEach(({ control, error }) => {
    control.addEventListener("input", () => {
      if (control.checkValidity()) {
        control.setAttribute("aria-invalid", "false");
        error.textContent = "";
      }
    });
  });
}

const themeToggle = document.querySelector("#theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    root.setAttribute("data-theme", newTheme);
  });
}

