const p1 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("Assignmnet complete")
   },2000)
})

// async function check() {
//     const s = await p1;
//     console.log("checking the assignmnet",s);
// }

// check();

// 'https://dummyjson.com/products'

async function datalao() {
    const response = await fetch('https://dummyjson.com/products/7');
    const data = await response.json();
    console.log(data);
}


async function fetchAllProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    data.products.forEach(product => {
        console.log(`Name: ${product.title}, Description: ${product.description}, Price: ${product.price}`);
    });
}

fetchAllProducts();

datalao()