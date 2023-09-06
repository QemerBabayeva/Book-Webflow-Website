const hamburgerIcon = document.querySelector(".hamburgericon");
const hamburgerMenu = document.querySelector(".hamburgermenu");
const xIcon = document.querySelector(".hamburgermenu i");
const navLinks = document.querySelectorAll(".hamburgermenu ul li a");
const articles = document.querySelector('.articles')

hamburgerIcon.addEventListener("click", () => {
  hamburgerMenu.classList.add("show");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("show");
  });
});
xIcon.addEventListener("click", () => {
  hamburgerMenu.classList.remove("show");
});

async function getArticles() {
  const res = await fetch("http://localhost:3000/Articles", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const data = await res.json();
  console.log(data);
  data.map((article) => {
    articles.innerHTML += `<div class="box">
                    
    <img src="${article.image}" alt="">
    <div class="info">
    <h1>"${article.title}"</h1>
    <p>"${article.about}"</p>
    <div class="read">
        <button>Read More</button>
        <span>"${article.description}"</span>
    </div>
</div>`;
  });
}
getArticles();
