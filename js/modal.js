console.log("Modal JS Loaded");
const modal = document.getElementById("projectModal");

const modalTitle = document.getElementById("modalTitle");
const modalTech = document.getElementById("modalTech");
const modalDescription = document.getElementById("modalDescription");

const closeModalButton = document.getElementById("closeModal");

const modalProjectCards = document.querySelectorAll(".project-card");

modalProjectCards.forEach((card) => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalTech.textContent = card.dataset.tech;
    modalDescription.textContent = card.dataset.description;

    modal.classList.add("show-modal");

    document.body.style.overflow = "hidden";
  });
});

closeModalButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove("show-modal");

  document.body.style.overflow = "";
}
