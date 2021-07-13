var showModal = document.querySelectorAll(".show_modal");
const modal = document.querySelectorAll(".modals");
const closeModal = document.querySelectorAll(".close_modal");

// showModal.addEventListener("click", function () {
//   modal.classList.remove("hidden");
// });
// showModal.onclick = function () {
//   modal.classList.remove("hidden");
// };

// closeModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
// });

for (let i = 0; i < showModal.length; i++) {
  showModal[i].onclick = function () {
    modal[i].classList.remove("hidden");
  };
}

for (let i = 0; i < closeModal.length; i++) {
  closeModal[i].onclick = function () {
    modal[i].classList.add("hidden");
  };
  window.onclick = function (event) {
    if (event.target == modal[i]) {
      modal[i].classList.add("hidden");
    }
  };
}
