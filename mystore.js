const hamburgerIcon = document.querySelector(".hamburgericon");
const hamburgerMenu = document.querySelector(".hamburgermenu");
const xIcon = document.querySelector(".hamburgermenu i");
const books = document.querySelector(".books");
const navLinks = document.querySelectorAll(".hamburgermenu ul li a");

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

async function getBooks() {
  const res = await fetch("http://localhost:3000/myStoreBook", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();

  data.map((book) => {
    books.innerHTML += `<div class="firstBook">
    <div class="offset">
        <img src="${book.image}" alt="">
    </div>
    <div class="information">

        <div class="info">
        <h5> ${book.title}</h5>
        <p>${book.about}</p>

        <div class="printed">
            <i class="fa-solid fa-circle"></i>
             <p>${book.description}</p>
        </div>

    <button><a href='/bookstore.html?q=${book.id}'>Order Today</a></button>
    </div>

    </div>
</div>`;
  });
}
getBooks();
