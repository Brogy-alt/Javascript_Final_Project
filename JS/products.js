let products = JSON.parse(localStorage.getItem("products "))
  ? JSON.parse(localStorage.getItem("products "))
  : [
      {
        id: 1,
        product: "Beat",
        beattype: "Juice Wrld type beats (melodic)",
        price: "$20",
        image: "/Assets/Imgs/Juice wrld type beat img.jpg",
      },
      {
        id: 2,
        product: "Beat",
        beattype: "Lil Uzi Vert type beat (hyper-pop)",
        price: "$20",
        image: "/Assets/Imgs/lil uzi vert type beat.jpg",
      },
      {
        id: 3,
        product: "Beat",
        beattype: "Trippie Redd type beat (hyper-pop)",
        price: "$20",
        image: "/Assets/Imgs/Trippie redd type beat.jpg",
      },
      {
        id: 4,
        product: "Beat",
        beattype: "Dro Kenji type beat (melodic)",
        price: "$20",
        image: "/Assets/Imgs/dro kenji type beat.jpg",
      },
      {
        id: 5,
        product: "Beat",
        beattype: "Iann Dior (melodic)",
        price: "$20",
        image: "/Assets/Imgs/Iann doir type beat.jpg",
      },
      {
        id: 6,
        product: "Beat",
        beattype: "Lil Yatchy type beat (melodic)",
        price: "$20",
        image: "/Assets/Imgs/lil yatchy type beat.jpg",
      },
      {
        id: 7,
        product: "Beat",
        beattype: "Yeat type (edm/melodic) ",
        price: "$20",
        image: "/Assets/Imgs/yeat type beat img.jpg",
      },
      {
        id: 8,
        product: "Beat",
        beattype: "SSG Kobe type beat (hyperpop)",
        price: "$20",
        image: "/Assets/Imgs/SSG Kobe type beat.jpg",
      },
      {
        id: 9,
        product: "Kit",
        beattype: "Melody kit",
        price: "$50",
        image: "/Assets/Imgs/Trippie redd type beat.jpg",
      },
      {
        id: 10,
        product: "Kit",
        beattype: "Melody kit",
        price: "$50",
        image: "/Assets/Imgs/Trippie redd type beat.jpg",
      },
      {
        id: 11,
        product: "Kit",
        beattype: "Melody kit",
        price: "$50",
        image: "/Assets/Imgs/Trippie redd type beat.jpg",
      },
      {
        id: 12,
        product: "Kit",
        beattype: "Melody kit",
        price: "$50",
        image: "/Assets/Imgs/Trippie redd type beat.jpg",
      },
      
      
    ];

// For admin
function displayCards() {
  let card = document.querySelector('#card-row');
  Object.keys(products).forEach((item) => {
    if (products.length) {
      console.log(`${item}: ${products[item]}`);
      card.innerHTML += 
      ` 
      <div class="card col-3 text-light bg-black">
      <img src="${products[item].image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">${products[item].product}</p>
        <p class="card-text">${products[item].beattype}</p>
        <p class="card-text">${products[item].price}</p>
        <a href="#" class="btn btn-dark">Add to checkout</a>
      </div>
    </div>
        `
    }
  });
}

displayCards();

// localStorage.setItem('products', JSON.stringify(product-cards));
