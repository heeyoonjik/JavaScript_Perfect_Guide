const addModal = document.getElementById("add-modal");

const addMovieButton = document.querySelector("header button");

const backDrop = document.getElementById("backdrop");

const modalCancleButton = document.querySelector(".btn.btn--passive");

const modalAddButton = modalCancleButton.nextElementSibling;

const userInputs = addModal.querySelectorAll("input");

const banner = document.getElementById("entry-text");

const movieElement = document.querySelector("movie-element");

const confirmToDeleteModal = document.getElementById("delete-modal");

const movies = [];

const backDropToggle = () => {
  backDrop.classList.toggle("visible");
};

const updateBanner = () => {
  if (movies.length === 0) {
    banner.style.display = "block";
  } else {
    banner.style.display = "none";
  }
};

const renderNewMovie = (imageUrl, title, rating, id) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class = "movie-element__image">
      <img src ="${imageUrl}" alt=${title}>
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  const listRoot = document.getElementById("movie-list");
  newMovieElement.addEventListener("click", deleteModal.bind(null, id));
  listRoot.append(newMovieElement);
  console.log(listRoot);
};

const deleteModal = (id) => {
  const cancleButton = confirmToDeleteModal.querySelector("button");
  let approveButton = cancleButton.nextElementSibling;
  cancleButton.removeEventListener("click", closeConfirmModal);
  approveButton.replaceWith(approveButton.cloneNode(true));
  approveButton = cancleButton.nextElementSibling;
  approveButton.addEventListener(
    "click",
    approveMovieDeleteHandler.bind(null, id)
  );
  r;
  openConfirmModal();
};

const closeConfirmModal = () => {
  confirmToDeleteModal.classList.remove("visible");
  backDropToggle();
};

const openConfirmModal = () => {
  confirmToDeleteModal.classList.add("visible");
  backDropToggle();
};

const approveMovieDeleteHandler = (id) => {
  movieIndex = 0;
  for (movie of movies) {
    if (movie.id === id) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  closeConfirmModal();
  updateBanner();
};

const openModal = () => {
  addModal.classList.add("visible");
  backDropToggle();
};

const closeModal = () => {
  addModal.classList.remove("visible");
  deleteInputValue();
  backDropToggle();
};

const deleteInputValue = () => {
  for (userInput of userInputs) {
    userInput.value = "";
  }
};

const backDropHanlder = () => {
  console.log("tlqkf");
  closeConfirmModal();
  closeModal();
  backDropToggle();
};

const modalCancleButtonHandler = () => {
  openModal();
};

const modalAddButtonHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    ratingValue < 1
  ) {
    alert("올바르게 입력하시오");
  } else {
    const movie = {
      id: Math.random().toString(),
      title: titleValue,
      imageUrl: imageUrlValue,
      rating: ratingValue,
    };
    movies.push(movie);
    updateBanner();
    closeModal();
    renderNewMovie(imageUrlValue, titleValue, ratingValue, movie.id);
    console.log(movies);
  }
};

addMovieButton.addEventListener("click", openModal);
backDrop.addEventListener("click", backDropHanlder);
modalCancleButton.addEventListener("click", modalCancleButtonHandler);
modalAddButton.addEventListener("click", modalAddButtonHandler);
