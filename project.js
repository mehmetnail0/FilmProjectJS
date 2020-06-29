const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelector(".card-body").nextElementSibling;
const clear = document.querySelector("#clear-films");

// Tum Eventleri Yukleme
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function () {
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
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
    UI.displayMessages("Tum Alanlari Doldurunuz....", "danger");
  } else {
    // Yeni Film
    const newFilm = new Film(title, directory, url);
    UI.addFilmToUI(newFilm);
    Storage.addFilmToStorage(newFilm);
    UI.displayMessages("Filminiz Basariyla Eklendi", "success");
  }
  UI.clearInputs(titleElement, urlElement, directorElement);
  e.preventDefault();
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    UI.displayMessages("Silme islemi basarili....", "success");
  }
}

function clearAllFilms() {
  if (confirm("Emin Misiniz ?")) UI.clearAllFilmsFromUI();
  Storage.clearAllFilmsFromStorage();
}
