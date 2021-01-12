mainPage = document.querySelector("#mainPage");
portfolioPage = document.querySelector("#portfolioPage");
portfoioBtn = document.querySelector("#portfolioBtn");

portfoioBtn.addEventListener("click", () => {
  switch (portfoioBtn.classList.contains("d-none")) {
    case true:
      break;
    default:
      mainPage.setAttribute("class", "d-none");
      portfolioPage.classList.remove("d-none");
      break;
  }
});
