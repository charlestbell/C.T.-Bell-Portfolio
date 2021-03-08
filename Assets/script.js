mainPage = document.querySelector("#mainPage");
portfolioPage = document.querySelector("#portfolioPage");
resumePage = document.querySelector("#resumePage");
navigation = document.querySelector("#navigation");

navigation.addEventListener("click", (event) => {
  switch (event.target.id) {
    case "resumeBtn":
      console.log("resume button");
      mainPage.setAttribute("class", "d-none");
      portfolioPage.setAttribute("class", "d-none");
      resumePage.classList.remove("d-none");
      break;
    case "portfolioBtn":
      console.log("portfolio button");
      mainPage.setAttribute("class", "d-none");
      resumePage.setAttribute("class", "d-none");
      portfolioPage.classList.remove("d-none");
      break;
    default:
      break;
  }
});
