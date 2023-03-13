const addMovieButton = document.getElementById("add-movie-btn");
const searchMovieButton = document.getElementById("search-btn");

const movies = [];

const addMovieRender = (searchText = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";
  const filteredMovie = filter
    ? movies.filter((movie) => movie.movieTitle.includes(searchText))
    : movies;

  filteredMovie.forEach((movie) => {
    const movieLi = document.createElement("li");
    const { getFormattedTitle } = movie;
    movieLi.textContent = getFormattedTitle.call(movie);
    for (const movieData in movie.movieInfromation) {
      movieLi.textContent += ` - ${movieData}`;
    }
    movieList.append(movieLi);
  });
};

const addMovieHandler = () => {
  const movieTitle = document.getElementById("title").value;
  const movieDescription = document.getElementById("extra-name").value;
  const movieValue = document.getElementById("extra-value").value;
  const movieId = Math.random();
  const movie = {
    movieTitle: movieTitle,
    movieId: movieId,
    movieInfromation: {
      [movieDescription]: movieDescription,
      [movieValue]: movieValue,
    },
    getFormattedTitle: function () {
      return this.movieTitle.toUpperCase();
    },
  };
  movies.push(movie);
  addMovieRender();
};

const searchMovieHandler = function () {
  console.log(this);
  const searchText = document.getElementById("filter-title").value;
  addMovieRender(searchText);
};

addMovieButton.addEventListener("click", addMovieHandler);
searchMovieButton.addEventListener("click", searchMovieHandler);

const team = {
  set teamName(teamNameValue) {
    if (teamNameValue.trim() === "") {
      this._teamName = "DEFAULT";
    } else {
      this._teamName = teamNameValue;
    }
  },
  get teamName() {
    return this._teamName;
  },
  people: ["KIM", "MIN"],
};

team.teamName = "BLUE";
console.log(team.teamName);
