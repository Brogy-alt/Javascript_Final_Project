let products = JSON.parse(localStorage.getItem("products "))
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        id: 1,
        style: "Juice Wrld type beat",
        product: "Beat",
        beattype: "melodic",
        price: "$20",
        image: "/Assets/Imgs/Juice wrld type beat img.jpg",
        Audio: "/Assets/Audio/Juicewrld.mp3"
        
      },
      {
        id: 2,
        style:"Lil Uzi Vert type beat",
        product: "Beat",
        beattype: "hyper-pop",
        price: "$20",
        image: "/Assets/Imgs/lil uzi vert type beat.jpg",
        Audio: "/Assets/Audio/Lil uzi vert.mp3"
      },
      {
        id: 3,
        style:"Trippie Redd type beat",
        product: "Beat",
        beattype: "hyper-pop",
        price: "$20",
        image: "/Assets/Imgs/Trippie redd type beat.jpg",
        Audio: "/Assets/Audio/Trippie Redd.mp3"
      },
      {
        id: 4,
        style:"Dro Kenji type beat",
        product: "Beat",
        beattype: "melodic",
        price: "$20",
        image: "/Assets/Imgs/dro kenji type beat.jpg",
        Audio: "/Assets/Audio/Dro kenji.mp3"
      },
      {
        id: 5,
        style:"Iann Dior type beat",
        product: "Beat",
        beattype: "melodic",
        price: "$20",
        image: "/Assets/Imgs/Iann doir type beat.jpg",
        Audio: "/Assets/Audio/Iann dior.mp3"
      },
      {
        id: 6,
        style:"Lil Yatchy type beat ",
        product: "Beat",
        beattype: "melodic",
        price: "$20",
        image: "/Assets/Imgs/lil yatchy type beat.jpg",
        Audio: "/Assets/Audio/Lil yatchy.mp3"
      },
      {
        id: 7,
        style:"Central Cee type beat",
        product: "Beat",
        beattype: "Drill",
        price: "$20",
        image: "/Assets/Imgs/Central cee.jpg",
        Audio: "/Assets/Audio/Central Cee.mp3"
      },
      {
        id: 8,
        style:"SSG Kobe type beat",
        product: "Beat",
        beattype: "hyperpop",
        price: "$20",
        image: "/Assets/Imgs/SSG Kobe type beat.jpg",
        Audio: "/Assets/Audio/SSG kobe.mp3"
      },
      {
        id: 9,
        style:"Spiral",
        product: "Kit",
        beattype: "Midi kit",
        price: "$50",
        image: "/Assets/Imgs/Melody Kit img.png",
        Audio: "/Assets/Audio/spiral.mp3"
      },
      {
        id: 10,
        style:"Clouds",
        product: "Kit",
        beattype: "Melody kit",
        price: "$50",
        image: "/Assets/Imgs/Melody Kit img2.png",
        Audio: "/Assets/Audio/clouds.mp3"
      },
      {
        id: 11,
        style:"Costal",
        product: "Kit",
        beattype: "Melody kit",
        price: "$50",
        image: "/Assets/Imgs/Melody Kit img5.png",
        Audio: "/Assets/Audio/costal.mp3"
      },
      {
        id: 12,
        style:"Invasion",
        product: "Kit",
        beattype: "Melody kit",
        price: "$50",
        image: "/Assets/Imgs/Melody Kit img4.png",
        Audio: "/Assets/Audio/invasion.mp3"
      },
    ];

// localStorage.setItem('products', JSON.stringify(products))


// products = JSON.parse(localStorage.getItem('products'))

// let newProducts = []
// products.forEach(product => {
//   if (product.id !== 5) {
//     newProducts.push(product)
//   }
// })
// localStorage.setItem('products', JSON.stringify(newProducts))

// For admin
function displayCards() {
  let card = document.querySelector('#card-row');
  Object.keys(products).forEach((item) => {
    if (products.length) {
      console.log(`${item}: ${products[item]}`);
      card.innerHTML += 
      ` 
      <div class="card col-3 text-light bg-black border-dark">
      <img src="${products[item].image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${products[item].style}</h5>
        <p class="card-text">${products[item].product}</p>
        <p class="card-text">${products[item].beattype}</p>
        <p class="card-text">${products[item].price}</p>
        <audio src="..${products[item].Audio}" id="myAudio${products[item].id}"></audio>
        <button class="myBtn bg-dark text-light" onClick="playMyAudio(${products[item].id})">Play Audio</button>
        <button class="myBtn bg-dark text-light float-md-end" onClick="stopMyAudio(${products[item].id})">Stop Audio</button>
        <a href="/Html/checkout.html" class="checkout-button btn btn-dark d-flex align-items-center justify-content-center">Add to checkout</a>
      </div>
    </div>
        `
    }
  });
}

displayCards();

// localStorage.setItem('products', JSON.stringify(product-cards));
function playMyAudio(id){
  document.getElementById(`myAudio${id}`).play();
  Object.keys(products).forEach((item) => {
    if (products[item].id !== id) {
      stopMyAudio(products[item].id)
    }
  }
  )
  
}
function stopMyAudio(id){
  document.getElementById(`myAudio${id}`).pause();
  document.getElementById(`myAudio${id}`).currentTime = 0;

}

