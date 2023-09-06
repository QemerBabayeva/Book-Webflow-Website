const hamburgerIcon = document.querySelector(".hamburgericon");
const hamburgerMenu = document.querySelector(".hamburgermenu");
const xIcon = document.querySelector(".hamburgermenu i");
const navLinks = document.querySelectorAll(".hamburgermenu ul li a");
const up = document.querySelector(".up");
const modalCont = document.querySelector(".modalCont");
const url = new URL(document.location).searchParams; // Kitablarin id- searchparams ile tutduq
let myBookId = url.get("q"); // is the string "Jonathan Smith".
const myModal = document.querySelector(".modalCont");
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
let total = 0;
let count = 0;
let price = 0;

async function getInfo() {
  const res = await fetch(`http://localhost:3000/Booksinfo/${myBookId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const info = await res.json();
  price = info.price;

  modalCont.innerHTML = `
  <div class="modal fade  " id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content newmodalDesign">
      <div class="modal-header headerDesign">
        <h1 class="modal-title fs-5 titledesign" id="exampleModalToggleLabel">Your Cart</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body bodydesign"> 
          <div class="info">
              
              <div class="informInput">
                  <div class="img">
                      <img src="${info.image}" alt="">
                  </div>
              <div class="inform">

                  <div class="title">
                  <h1>${info.title}</h1>
                  <p>${info.price}</p>
                 </div>
                 <div class="remove">
                 <span>Remove </span>
              </div>


                  
              </div>


              </div>
          </div>
          <div class="sub" id="totalPrice">
              <p>Sub-Total</p> <span id='totalPriceValue'> </span> <span>Total</span>
          </div>

      </div>
      <div class="modal-footer footerdesign">
        <button class="btn btn-primary btndesign" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Continue to Checkout</button>
      </div>
    </div>
  </div>
</div>
  
  
  
  `;
  console.log(info)
  up.innerHTML += `
    <div class="left" data-id=${info.id}>
      <a href="./bookstore.html"></a>   
      <img src="${info.image}" alt="">
                </div>
                <div class="right">
                    
                    <h1>"${info.title}"</h1>
                    <h5>$${info.price}.00 USD</h5>
                    <p>"${info.about}"</p>
                <div>
                    <span>"${info.publisher}"</span>
                    <span>"${info.language}"</span>
                    <span>"${info.paperback}"</span>
                    <span>"${info.isbn10}"</span>
                    <span>"${info.dimensions}"</span>
                </div>

                <div class="input">
                    <input class="countInput" type="text" placeholder=" ">
                    <button type="button" class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open Modal</button>      
                </div>

                </div>`;
  const countInput = document.querySelector(".countInput");
  myModal.addEventListener("show.bs.modal", () => {
    total = count * price;
    let totalPrice = document.querySelector("#totalPriceValue");
    totalPrice.innerHTML = `${total}$`;
  });
  countInput.addEventListener("keyup", (e) => {
    count = Number(e.target.value);
  });
}
getInfo();
// <button  data-bs-toggle="modal" data-bs-target="#exampleModal">Add to Cart</button>
