class UI {
  constructor() {}
  addFilmToUI = (newFilm) => {
    const filmList = document.getElementById("films");
    filmList.innerHTML += `<tr>
   <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
   <td>${newFilm.title}</td>
   <td>${newFilm.director}</td>
   <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
   </tr>`;
  };

  clearInputs = (element1, element2, element3) => {
    element1.value = "";
    element2.value = "";
    element3.value = "";
  };
  showAlert = (type, message) => {
    const cardBody = document.querySelector(".card-body");
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    cardBody.appendChild(alert);
    setTimeout(() => {
      cardBody.removeChild(alert);
    }, 700);
  };
  loadAllFilms = (films) => {
    const filmList = document.getElementById("films");
    films.forEach((film) => {
      filmList.innerHTML += `<tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`;
    });
  };
  deleteFilmFromUI = (element) => {
    element.parentElement.parentElement.remove();
  };
  clearAllFilmsFromUI = () => {
    const filmList = document.getElementById("films");
    filmList.remove();
  };
}
