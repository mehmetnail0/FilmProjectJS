const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelector(".card-body").nextElementSibling;
const clear = document.querySelector("#clear-films");

// UI Objesini Baslatma
const ui = new UI();

// Storage Objesi Uret
const storage = new Storage();

// Tum Eventleri Yukleme
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function () {
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
  });
  cardBody.addEventListener("click", deleteFilm);
  clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
  const title = titleElement.value;
  const directory = directorElement.value;
  const url = urlElement.value;

  if (title === "" || directory === "" || url === "") {
    // Hata
    ui.displayMessages("Tum Alanlari Doldurunuz....", "danger");
  } else {
    // Yeni Film
    const newFilm = new Film(title, directory, url);
    newFilm = newFilm.split("");
    ui.addFilmToUI(newFilm);
    storage.addFilmToStorage(newFilm);
    ui.displayMessages("Filminiz Basariyla Eklendi", "success");
  }
  ui.clearInputs(titleElement, urlElement, directorElement);
  e.preventDefault();
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    ui.deleteFilmFromUI(e.target);
    storage.deleteFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    ui.displayMessages("Silme islemi basarili....", "success");
  }
}

function clearAllFilms() {
  if (confirm("Emin Misiniz ?")) ui.clearAllFilmsFromUI();
  storage.clearAllFilmsFromStorage();
}
