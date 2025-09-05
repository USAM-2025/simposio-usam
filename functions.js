const universities = [
  {
    id: 1,
    name: "Universidad Nacional",
    country: "Argentina",
    bannerUrl: "medicina.jpg",
  },
  {
    id: 2,
    name: "Harvard Medical School",
    country: "Estados Unidos",
    bannerUrl: "medicina1.jpg",
  },
  {
    id: 3,
    name: "Universidad de Barcelona",
    country: "España",
    bannerUrl: "medicina2.jpg",
  },
  {
    id: 4,
    name: "Universidad de Tokio",
    country: "Japón",
    bannerUrl: "medicina3.jpg",
  },
  {
    id: 5,
    name: "Universidad de Buenos Aires",
    country: "Argentina",
    bannerUrl: "medicina3.jpg",
  },
  {
    id: 6,
    name: "Oxford University",
    country: "Reino Unido",
    bannerUrl: "medicina3.jpg",
  },
  {
    id: 7,
    name: "Universidad de Heidelberg",
    country: "Alemania",
    bannerUrl: "medicina3.jpg",
  },
  {
    id: 8,
    name: "Universidad de Montreal",
    country: "Canadá",
    bannerUrl: "medicina3.jpg",
  },
  {
    id: 9,
    name: "Universidad de Sydney",
    country: "Australia",
    bannerUrl: "medicina3.jpg",
  },
  {
    id: 10,
    name: "Universidad de São Paulo",
    country: "Brasil",
    bannerUrl: "medicina3.jpg",
  },
];

// Generar botones de universidades
const container = document.getElementById("universities-container");

universities.forEach((university) => {
  const button = document.createElement("div");
  button.className = "university-btn";
  button.innerHTML = `
                <div class="university-name">${university.name}</div>
                <div class="university-country">${university.country}</div>
            `;

  button.addEventListener("click", () => {
    openModal(university);
  });

  container.appendChild(button);
});

// Funcionalidad del modal
const modal = document.getElementById("banner-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const closeBtn = document.querySelector(".close-btn");

function openModal(university) {
  modalTitle.textContent = `${university.name} - ${university.country}`;
  modalImage.src = university.bannerUrl;
  modalImage.alt = `Banner de ${university.name}`;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Cerrar modal con la tecla Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
