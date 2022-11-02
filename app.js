
const sandwiches = [
    {
        name: "BLT",
        price: 8.95,
        quantity: 0
    },
    {
        name: "PB&J Supreme",
        price: 12,
        quantity: 0
    },
    {
        name: "PBBD",
        price: 20,
        quantity: 0
    },
    {
        name: "Milk Shoe Special",
        price: 13.30,
        quantity: 0
    }
]

// NOTE this is a dictionary
// const sandos = {
//     BLT: {
//         name: "BLT",
//         price: 8.95,
//         quantity: 0
//     },
//     PBJ: {

//     }
// }

function buyBLT() {

    let sandwich = sandwiches.find(s => s.name == "BLT")
    sandwich.quantity++
    console.log(sandwich);
}

function buyMilkShoeSpecial() {
    let sandwich = sandwiches.find(s => s.name == "Milk Shoe Special")
    sandwich.quantity++
    console.log(sandwich);
}


function buySandwich(sandwichName) {
    // find the sandwich I want to buy
    // after finding the sandiwch...increase the quantity
    let foundSandwich = sandwiches.find(s => s.name == sandwichName)
    foundSandwich.quantity++
    // console.log(sandwich)
    drawCart()
}


function drawCart() {
    // if I have bought something, add it to my cart
    // how can I check to see if I bought something
    // if quanity is > 0 add it to my cart...draw the item in the cart 
    let template = ''
    sandwiches.forEach(s => {
        if (s.quantity > 0) {
            console.log('drawing cart', s);
            template += `
            <div class="d-flex justify-content-between">
               <i class="mdi mdi-close text-danger cursor-pointer" onclick="removeItem('${s.name}')"></i>
                        <p>${s.name}</p>
                        <p>x${s.quantity}</p>
                        <p>${s.price}</p>
                    </div>`
        }
        document.getElementById('cart').innerHTML = template
        drawTotal()
    })
}

function drawTotal() {
    // iterate through all of the sandwiches
    // if I have a sandiwch, add its price and quantity to my total
    let total = 0
    sandwiches.forEach(s => {
        total += s.price * s.quantity
    })
    document.getElementById('total').innerText = total.toFixed(2)
}


function checkout() {
    // when I click on a button.. clear out my cart
    // because quantity > 0 indicates that I have a sandiwch in my cart, I need to reset quantity to 'clear' my cart
    // reset the quanity of all the sandwiches

    // REVIEW make sure to wrap your logic INSIDE of your confirm
    if (window.confirm("Are you sure you want to clear your cart?")) {
        // REVIEW if the user selects yes..... it will run the block of code inside of the window.confirm
        sandwiches.forEach(s => {
            s.quantity = 0
        })
    }
    drawCart()
    // REVIEW I don't need to reinvoke draw total, because drawCart() already calls this fn
    // drawTotal()
}

function removeItem(sandwichName) {
    // when I click on a button, find the sandwich I want to remove
    // after finding the sandwich, decrease the amount I have (quantity)

    // NOTE .filter() method returns an array, .find() returns a single item
    debugger
    let foundSandwich = sandwiches.find(s => s.name == sandwichName)
    console.log(foundSandwich, 'found sando');
    foundSandwich.quantity--
    console.log('decrease', foundSandwich);
    drawCart()

}