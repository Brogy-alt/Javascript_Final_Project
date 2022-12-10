

function addItems() {
    let products = document.querySelector('#products');
    Object.keys(products).forEach((item) => {
      if (products.length) {
        console.log(`${item}: ${products[item]}`);
        ccheckout.innerHTML += 
        ` 
        <div class="card col-3 text-light bg-black border-dark">
        <img src="${products[item].image}" class="card-img-top img-fluid" alt="...">
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
  
  addItems();


let products = [];
// submit button
let submit = document.querySelector(".checkout-button");
console.log(submit);
// Add event listener
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let firstName = document.querySelector("#firstName").value;
  let surname = document.querySelector("#surname").value;
  let email = document.querySelector("#email").value;

  let submit = document.querySelector('#submit');
  let display = document.querySelector('#display');



// Push an object info an array
    people.push(
        {
        firstName,
        surname,
        email,
        }
    );
    console.log(people);
    // local storage
    localStorage.setItem('data',JSON.stringify(people));
});

// Display
display.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(
       JSON.parse(localStorage.getItem('data'))
    );
})


// let products = JSON.parse(localStorage.getItem("products "))
//   ? JSON.parse(localStorage.getItem("products"))
//   : [
//       {
//         id: 1,
//         style: "Juice Wrld type beat",
//         product: "Beat",
//         beattype: "melodic",
//         price: "$20",
//         image: "/Assets/Imgs/Juice wrld type beat img.jpg",
//         Audio: "/Assets/Audio/Juicewrld.mp3"
        
//       },
//       {
//         id: 2,
//         style:"Lil Uzi Vert type beat",
//         product: "Beat",
//         beattype: "hyper-pop",
//         price: "$15",
//         image: "/Assets/Imgs/lil uzi vert type beat.jpg",
//         Audio: "/Assets/Audio/Lil uzi vert.mp3"
//       },
//       {
//         id: 3,
//         style:"Trippie Redd type beat",
//         product: "Beat",
//         beattype: "hyper-pop",
//         price: "$19",
//         image: "/Assets/Imgs/Trippie redd type beat.jpg",
//         Audio: "/Assets/Audio/Trippie Redd.mp3"
//       },
//       {
//         id: 4,
//         style:"Dro Kenji type beat",
//         product: "Beat",
//         beattype: "melodic",
//         price: "$18",
//         image: "/Assets/Imgs/dro kenji type beat.jpg",
//         Audio: "/Assets/Audio/Dro kenji.mp3"
//       },
//       {
//         id: 5,
//         style:"Iann Dior type beat",
//         product: "Beat",
//         beattype: "melodic",
//         price: "$15",
//         image: "/Assets/Imgs/Iann doir type beat.jpg",
//         Audio: "/Assets/Audio/Iann dior.mp3"
//       },
//       {
//         id: 6,
//         style:"Lil Yatchy type beat ",
//         product: "Beat",
//         beattype: "melodic",
//         price: "$16",
//         image: "/Assets/Imgs/lil yatchy type beat.jpg",
//         Audio: "/Assets/Audio/Lil yatchy.mp3"
//       },
//       {
//         id: 7,
//         style:"Central Cee type beat",
//         product: "Beat",
//         beattype: "Drill",
//         price: "$17",
//         image: "/Assets/Imgs/Central cee.jpg",
//         Audio: "/Assets/Audio/Central Cee.mp3"
//       },
//       {
//         id: 8,
//         style:"SSG Kobe type beat",
//         product: "Beat",
//         beattype: "hyperpop",
//         price: "$17",
//         image: "/Assets/Imgs/SSG Kobe type beat.jpg",
//         Audio: "/Assets/Audio/SSG kobe.mp3"
//       },
//       {
//         id: 9,
//         style:"Spiral",
//         product: "Kit",
//         beattype: "Midi kit",
//         price: "$45",
//         image: "/Assets/Imgs/Melody Kit img.png",
//         Audio: "/Assets/Audio/spiral.mp3"
//       },
//       {
//         id: 10,
//         style:"Clouds",
//         product: "Kit",
//         beattype: "Melody kit",
//         price: "$50",
//         image: "/Assets/Imgs/Melody Kit img2.png",
//         Audio: "/Assets/Audio/clouds.mp3"
//       },
//       {
//         id: 11,
//         style:"Costal",
//         product: "Kit",
//         beattype: "Melody kit",
//         price: "$35",
//         image: "/Assets/Imgs/Melody Kit img5.png",
//         Audio: "/Assets/Audio/costal.mp3"
//       },
//       {
//         id: 12,
//         style:"Invasion",
//         product: "Kit",
//         beattype: "Melody kit",
//         price: "$55",
//         image: "/Assets/Imgs/Melody Kit img4.png",
//         Audio: "/Assets/Audio/invasion.mp3"
//       },
//     ];

//     function displayCheckout() {
//         let tbody = document.querySelector('#tbody-checkout');
//         Object.keys(products).forEach( (item)=> {
//             if(products.length){
//                 console.log((`${item}: ${products[item]}`));
//                 tbody.innerHTML +=
//                 `
//                 <tr>
//                 <td><button>Add</button></td>
//                    <td>${products[item].style}</td>
//                    <td>${products[item].beattype}</td>
//                    <td>${products[item].price}</td>
                     
//                 </tr>
        
//                 `
//             }
//         })
//     }
//     displayCheckout()