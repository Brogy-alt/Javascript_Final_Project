let products = JSON.parse(localStorage.getItem("products "))
  ? JSON.parse(localStorage.getItem("products "))
  : [
      {
        id: 1,
        product: "Beat",
        beattype: "Juice Wrld type beats",
        price: 30,
        image: "/Assets/Imgs/Juice wrld type beat img.jpg",
      },
      {
        id: 2,
        product: "Beat",
        beattype: "Lil Uzi Vert type beat",
        price: 30,
        image: "/Assets/Imgs/lil uzi vert type beat.jpg",
      },
      {
        id: 3,
        product: "Beat",
        beattype: "Trippie Redd type beat",
        price: 30,
        image: "/Assets/Imgs/Trippie redd type beat.jpg",
      },
    ];

// For admin
function displayCards() {
  let card = document.querySelector("#product-cards");
  Object.keys(products).forEach((item) => {
    if (products.length) {
      console.log(`${item}: ${products[item]}`);
      card.innerHTML += `
            <div class="container h-25">
                <div class="row">
                    <div class="col">
            <div class="card-group">
            <div class="card ">
                <img src="${products[item].image}" class="card-img-top"  
                    alt="img" />
                <div class="card-body">
                    <h5 class="card-title">${products[item].beattype}</h5>
                    <p class="card-text">${products[item].product}
                    </p>
                    <p class="card-btn">
                            <button id="submit">Add to checkout</button>
                            <button id="display">Display</button>

                            
                    </p>
                </div>
            </div>
            `;
    }
  });
}

displayCards();
