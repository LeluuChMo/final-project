// Section 1: Slider

document.addEventListener("DOMContentLoaded", function () {
  var currentSlide = 0;
  var slides = document.querySelectorAll(".slider img");
  slides[currentSlide].style.display = "block";
  function showNextSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
  }
  setInterval(showNextSlide, 5000);
});

//Section 8: Forms

const form = document.getElementById("contact");
const statusInformation = document.getElementById("status");
const emailValidation =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const uppercaseValidation = /^[A-Z][a-zA-Z]*$/;
const symbolValidation = /^[a-zA-Z\s]*$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    statusInformation.textContent = "";
    const formValues = form.elements;
    if (
      formValues.firstname.value === "" ||
      !uppercaseValidation.test(formValues.firstname.value.charAt(0))
    ) {
      throw new Error("First Name is empty or first letter must be uppercase");
    }
    if (
      formValues.email.value === "" ||
      !emailValidation.test(formValues.email.value)
    ) {
      throw new Error("Empty or Invalid email address");
    }
    if (formValues.websiteurl.value === "") {
      throw new Error("Website is required");
    }
    if (
      formValues.description.value === "" ||
      formValues.description.value.length < 10
    ) {
      throw new Error(
        "Description is empty or should be more than 10 characters"
      );
    }
    const data = {
      firstName: formValues.firstname.value,
      email: formValues.email.value,
      websiteurl: formValues.websiteurl.value,
      description: formValues.description.value,
    };
    displaySuccessModal(
      "Thank you for getting in touch! We appreciate you contacting us."
    );
    form.reset();
  } catch (error) {
    displayErrorModal(error.message);
  }
});

const errorModal = document.getElementById("errorModal");
const successModal = document.getElementById("successModal");

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("close")) {
    errorModal.style.display = "none";
    successModal.style.display = "none";
  }
});

function displayErrorModal(errorMessage) {
  const errorModalMessage = document.getElementById("errorModalMessage");
  errorModalMessage.textContent = errorMessage;
  errorModal.style.display = "block";
}

function displaySuccessModal(successMessage) {
  const successModalMessage = document.getElementById("successModalMessage");
  successModalMessage.textContent = successMessage;
  successModal.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == errorModal || event.target == successModal) {
    errorModal.style.display = "none";
    successModal.style.display = "none";
  }
};

const url = "https://borjomi.loremipsum.ge/api/send-message";
const xmlh = new XMLHttpRequest();

xmlh.onload = function () {
  if (xmlh.status >= 200) {
    console.log("Message has been sent successfully");
  } else {
    console.error("Failed");
  }
};
xmlh.onerror = function () {
  console.error("Failed");
};

xmlh.open("POST", url);
xmlh.send();
