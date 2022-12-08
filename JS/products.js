let products = JSON.parse(localStorage.getItem("products "))
  ? JSON.parse(localStorage.getItem("products "))
  : [
      {
        id: 1,
        style: "Juice Wrld type beats",
        product: "Beat",
        beattype: "melodic",
        price: "$20",
        image: "/Assets/Imgs/Juice wrld type beat img.jpg",
        Audio: "/Assets/Audio/Juicewrld.mp3"
        
      },
      {
        id: 2,
        style:"Lil Uzi Vert type beats",
        product: "Beat",
        beattype: "hyper-pop",
        price: "$20",
        image: "/Assets/Imgs/lil uzi vert type beat.jpg",
        Audio: ""
      },
      {
        id: 3,
        style:"Trippie Redd type beats",
        product: "Beat",
        beattype: "hyper-pop",
        price: "$20",
        image: "/Assets/Imgs/Trippie redd type beat.jpg",
        Audio: ""
      },
      {
        id: 4,
        style:"Dro Kenji type beats",
        product: "Beat",
        beattype: "melodic",
        price: "$20",
        image: "/Assets/Imgs/dro kenji type beat.jpg",
        Audio: ""
      },
      {
        id: 5,
        style:"Iann Dior type beats",
        product: "Beat",
        beattype: "melodic",
        price: "$20",
        image: "/Assets/Imgs/Iann doir type beat.jpg",
        Audio: ""
      },
      {
        id: 6,
        style:"Lil Yatchy type beat ",
        product: "Beat",
        beattype: "melodic",
        price: "$20",
        image: "/Assets/Imgs/lil yatchy type beat.jpg",
        Audio: ""
      },
      {
        id: 7,
        style:"Yeat type beats",
        product: "Beat",
        beattype: " edm/melodic ",
        price: "$20",
        image: "/Assets/Imgs/yeat type beat img.jpg",
        Audio: ""
      },
      {
        id: 8,
        style:"SSG Kobe type beat",
        product: "Beat",
        beattype: "hyperpop",
        price: "$20",
        image: "/Assets/Imgs/SSG Kobe type beat.jpg",
        Audio: ""
      },
      {
        id: 9,
        product: "Kit",
        beattype: "Melody kit",
        price: "$50",
        image: "",
        Audio: ""
      },
      {
        id: 10,
        product: "Kit",
        beattype: "Melody kit",
        price: "$50",
        image: "",
        Audio: ""
      },
      {
        id: 11,
        product: "Kit",
        beattype: "Melody kit",
        price: "$50",
        image: "",
        Audio: ""
      },
      {
        id: 12,
        product: "Kit",
        beattype: "Melody kit",
        price: "$50",
        image: "",
        Audio: ""
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
      <div class="card col-3 text-light bg-black border-light">
      <img src="${products[item].image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${products[item].style}</h5>
        <p class="card-text">${products[item].product}</p>
        <p class="card-text">${products[item].beattype}</p>
        <p class="card-text">${products[item].price}</p>
        <audio src="..${products[item].Audio}" id="myAudio${products[item].id}"></audio>
        <button class="myBtn" onClick="playMyAudio(${products[item].id})">Play Audio</button>
        <button class="myBtn" onClick="stopMyAudio(${products[item].id})">Stop Audio</button>
        <a href="#" class="btn btn-dark d-flex align-items-center justify-content-center">Add to checkout</a>
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
}
function stopMyAudio(id){
  document.getElementById(`myAudio${id}`).pause();
  document.getElementById(`myAudio${id}`).currentTime = 0;

}