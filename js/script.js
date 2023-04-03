$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// --------custom-js------

// -------- modals -----------------

//reset pass

const openModalBtn = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

//create new pass model

const continueModal = document.getElementById("continue-modal");
const createPassModal = document.getElementById("create_pass_modal");
const continueClose = document.querySelector(".continue-Close");

continueModal.addEventListener("click", () => {
  createPassModal.style.display = "block";
  modal.style.display = "none";
});

continueClose.addEventListener("click", () => {
  createPassModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == createPassModal) {
    createPassModal.style.display = "none";
    modal.style.display = "none";
  }
});

//success model

const successModalBtn = document.getElementById("success_modal_btn");
const successModal = document.getElementById("success_modal");
const successClose = document.querySelector(".success-close");

successModalBtn.addEventListener("click", () => {
  successModal.style.display = "block";
  modal.style.display = "none";
  createPassModal.style.display = "none";
});

successClose.addEventListener("click", () => {
  successModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == createPassModal) {
    createPassModal.style.display = "none";
    modal.style.display = "none";
  }
});

// ------ forms ----

//verification-form

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("verification-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission behavior
  });
});

//create-pass-form

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("create-pass-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission behavior
  });
});
