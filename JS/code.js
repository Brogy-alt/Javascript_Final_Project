// Sample data: example
let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : [
    
    {
        id:1,
        product:"Beat",
        beattype:"Juice Wrld",
        price:"$20"

    },
    {
        id:2,
        product:"Beat",
        beattype:"Lil Uzi Vert",
        price:"$20"

    },
    {
        id:3,
        product:"Beat",
        beattype:"Trippie Redd",
        price:"$20"

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
                </tr>
            `
        }
    } )

}

displayProducts()

