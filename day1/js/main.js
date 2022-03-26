const links = document.querySelector(".navbar-links-smallscreen");

function showMenu() {
    if (links.style.display === "none") {
        links.style.display = "block";
      } else {
        links.style.display = "none";
      }
}