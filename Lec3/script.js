//Web dev
//home work

let cart = ["shoes","shorts","pants","caps","jeans","belt"]
let prices = [1000,2000,30000,200,366,150]

function order_detail(cart) {
    //no.of products, total amount, 
    let nop = cart.length;
    console.log("Total number of products are : " + nop);
    
}

function order_summary() {
    //total price and toatal product
    //generate id
    let orderId = Math.floor(Math.random() * 1000000);
    console.log("Order ID: " + orderId);
    let tp = 0;
  

    for (let i = 0; i < prices.length; i++) {
        tp += prices[i];
    }
    console.log("Total price of products are:" + tp);
    console.log(cart.length); 
      


}

function payment(cart) {
    //order_id , product detail, price.. payment is successful
    for (let i = 1; i < cart.length; i++) {
       console.log(" product_name: " + cart[i] + "  product price:" + prices[i]);
    }
}

function successful_order(cart) {
    //it will give all the deatails about payment product name and everything
    
}

payment(cart);



