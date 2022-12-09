// Sample data: example
let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : [
    
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
    price: "$15",
    image: "/Assets/Imgs/lil uzi vert type beat.jpg",
    Audio: "/Assets/Audio/Lil uzi vert.mp3"
  },
  {
    id: 3,
    style:"Trippie Redd type beat",
    product: "Beat",
    beattype: "hyper-pop",
    price: "$19",
    image: "/Assets/Imgs/Trippie redd type beat.jpg",
    Audio: "/Assets/Audio/Trippie Redd.mp3"
  },
  {
    id: 4,
    style:"Dro Kenji type beat",
    product: "Beat",
    beattype: "melodic",
    price: "$18",
    image: "/Assets/Imgs/dro kenji type beat.jpg",
    Audio: "/Assets/Audio/Dro kenji.mp3"
  },
  {
    id: 5,
    style:"Iann Dior type beat",
    product: "Beat",
    beattype: "melodic",
    price: "$15",
    image: "/Assets/Imgs/Iann doir type beat.jpg",
    Audio: "/Assets/Audio/Iann dior.mp3"
  },
  {
    id: 6,
    style:"Lil Yatchy type beat ",
    product: "Beat",
    beattype: "melodic",
    price: "$16",
    image: "/Assets/Imgs/lil yatchy type beat.jpg",
    Audio: "/Assets/Audio/Lil yatchy.mp3"
  },
  {
    id: 7,
    style:"Central Cee type beat",
    product: "Beat",
    beattype: "Drill",
    price: "$17",
    image: "/Assets/Imgs/Central cee.jpg",
    Audio: "/Assets/Audio/Central Cee.mp3"
  },
  {
    id: 8,
    style:"SSG Kobe type beat",
    product: "Beat",
    beattype: "hyperpop",
    price: "$17",
    image: "/Assets/Imgs/SSG Kobe type beat.jpg",
    Audio: "/Assets/Audio/SSG kobe.mp3"
  },
  {
    id: 9,
    style:"Spiral",
    product: "Kit",
    beattype: "Midi kit",
    price: "$45",
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
    price: "$35",
    image: "/Assets/Imgs/Melody Kit img5.png",
    Audio: "/Assets/Audio/costal.mp3"
  },
  {
    id: 12,
    style:"Invasion",
    product: "Kit",
    beattype: "Melody kit",
    price: "$55",
    image: "/Assets/Imgs/Melody Kit img4.png",
    Audio: "/Assets/Audio/invasion.mp3"
  },
      
];

// For admin
function displayProducts(){
let tbody = document.querySelector('tbody');
    Object.keys(products).forEach( (item)=>{
        if(products.length){
            console.log(`${item}: ${products[item]}`);
            tbody.innerHTML +=
            `
                <tr>
                    <td>${products[item].id}</td>
                    <td>${products[item].style}</td>
                    <td>${products[item].product}</td>
                    <td>${products[item].beattype}</td>
                    <td>${products[item].price}</td>
                    <td><button>Edit</button> <button class="onClick">Delete</button></td>

                </tr>
            `
        }
    } )

}

displayProducts();

// sorting

// let displayProducts = [];
// products.sort((a, b) => a - b);
// console.log(products);


