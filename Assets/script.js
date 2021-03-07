mainPage = document.querySelector("#mainPage");
portfolioPage = document.querySelector("#portfolioPage");
btn = document.querySelector("button");

portfolioBtn.addEventListener("click", () => {
  switch (portfolioBtn.classList.contains("d-none")) {
    case true:
      break;
    default:
      mainPage.setAttribute("class", "d-none");
      portfolioPage.classList.remove("d-none");
      break;
  }
});
