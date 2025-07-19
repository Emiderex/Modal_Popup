document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("generateForm");
  const emailInput = document.getElementById("user_email");
  const modalContainer = document.getElementById("modalContainer");
  const uniqueCode = document.getElementById("unique_code");
  const closeModalBtn = document.getElementById("closeModal");
  const copyBtn = document.getElementById("copy_code");

  // Generate a random code
  function generateRandomCode(length = 6) {
    let code = "";
    const chars = "0123456789";

    for (let i = 0; i < length; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  }


  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const code = generateRandomCode();
    uniqueCode.textContent = code;

    modalContainer.classList.add("show");
  });

 //Closes the Modal
  closeModalBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });

  // Copy code
  copyBtn.addEventListener("click", () => {
    const code = uniqueCode.textContent;
    navigator.clipboard.writeText(code).then(() => {
      alert("Your Code has been copied to clipboard!");
    });
  });

  // Close modal if user clicks outside modal box
  modalContainer.addEventListener("click", (event) => {
    if (event.target === modalContainer) {
      modalContainer.classList.remove("show");
    }
  });
});
