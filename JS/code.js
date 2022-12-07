// Sample data: example
let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : [
    
    {
        id: 1,
        style: "Juice Wrld type beats",
        product: "Beat",
        beattype: "melodic",
        price: "$20",
        image: "/Assets/Imgs/Juice wrld type beat img.jpg",
      },
      {
        id: 2,
        style:"Lil Uzi Vert type beats",
        product: "Beat",
        beattype: "hyper-pop",
        price: "$20",
        image: "/Assets/Imgs/lil uzi vert type beat.jpg",
      },
      {
        id: 3,
        style:"Trippie Redd type beats",
        product: "Beat",
        beattype: "hyper-pop",
        price: "$20",
        image: "/Assets/Imgs/Trippie redd type beat.jpg",
      },
      {
        id: 4,
        style:"Dro Kenji type beats",
        product: "Beat",
        beattype: "melodic",
        price: "$20",
        image: "/Assets/Imgs/dro kenji type beat.jpg",
      },
      {
        id: 5,
        style:"Iann Dior type beats",
        product: "Beat",
        beattype: "melodic",
        price: "$20",
        image: "/Assets/Imgs/Iann doir type beat.jpg",
      },
      {
        id: 6,
        style:"Lil Yatchy type beat ",
        product: "Beat",
        beattype: "melodic",
        price: "$20",
        image: "/Assets/Imgs/lil yatchy type beat.jpg",
      },
      {
        id: 7,
        style:"Yeat type beats",
        product: "Beat",
        beattype: " edm/melodic ",
        price: "$20",
        image: "/Assets/Imgs/yeat type beat img.jpg",
      },
      {
        id: 8,
        style:"SSG Kobe type beat",
        product: "Beat",
        beattype: "hyperpop",
        price: "$20",
        image: "/Assets/Imgs/SSG Kobe type beat.jpg",
      },
      {
        id: 9,
        product: "Kit",
        beattype: "Melody kit",
        price: "$50",
        image: "",
      },
      {
        id: 10,
        product: "Kit",
        beattype: "Melody kit",
        price: "$50",
        image: "",
      },
      {
        id: 11,
        product: "Kit",
        beattype: "Melody kit",
        price: "$50",
        image: "",
      },
      {
        id: 12,
        product: "Kit",
        beattype: "Melody kit",
        price: "$50",
        image: "",
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
                    <td>${products[item].product}</td>
                    <td>${products[item].beattype}</td>
                    <td>${products[item].price}</td>
                    <td><button>Edit</button> <button>Delete</button></td>

                </tr>
            `
        }
    } )

}

displayProducts()

