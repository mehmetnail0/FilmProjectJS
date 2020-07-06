class Storage {
  constructor() {}

  addFilmToStorage = (newFilm) => {
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
  };

  getFilmsFromStorage = () => {
    let films;
    if (localStorage.getItem("films") === null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
  };
  deleteFilmFromStorage = (filmTitle) => {
    let films = this.getFilmsFromStorage();
    films.forEach((film, index) => {
      if (film.title === filmTitle) {
        films.splice(index, 1);
      }
    });
    localStorage.setItem("films", JSON.stringify(films));
  };
  clearAllFilmsFromStorage = () => {
    localStorage.removeItem("films");
  };
}
