const form = document.querySelector('.waitlist');

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Stops the redirect/new tab

  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.classList.add('success');
      form.reset();
    } else {
      alert("Oops! There was a problem submitting your form.");
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Oops! There was a problem submitting your form.");
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  }
});
