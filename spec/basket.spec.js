const assertEquals =  require("../src/assertEquals.js");
const Basket = require("../src/basket.js");


let basket, input, output, total

//Test 1
console.log("Test to see if 1 item is added")
//setup 1 item
basket = new Basket ()
//execute 1 item
total = basket.add(["Banana Bagel"])
output = ["Banana Bagel"]
//verify 1 item
console.log("Can add one item")
console.log(assertEquals(total.length, 1))
console.log(assertEquals(total,  output))

//Test 2
console.log("Test to see if 2 items are added")
//setup 2 items
basket = new Basket ()
//execute 2 items
total1 = basket.add(["Banana Bagel"])
total2 = basket.add(["Blueberry Bagel"])
output = ["Banana Bagel", "Blueberry Bagel"]
//verify 2 items
console.log("Can add two items")
console.log(assertEquals(total2.length, 2))
console.log(assertEquals(total1, output))
console.log(assertEquals(total2, output))

//Test 3
console.log("Test to see if item is removed")
//setup remove item
basket = new Basket ()
basket.add(["Banana Bagel"])
//execute remove item
total = basket.remove(["Banana Bagel"])
output = []
//verify remove item
console.log("remove item")
console.log(assertEquals(total.length, 0))
console.log(assertEquals(total, output))

//Test 4
console.log("Test to see if basket is full")
//setup basket capacity
basket = new Basket(2)
input = ["Bagel A", "Bagel B", "Bagel C"]
output= ["Bagel A", "Bagel B"]
//execute basket capacity
total = basket.add(input)
console.log(total)
//verify basket capacity
console.log("basket full")
console.log(assertEquals(total, output))

//Test 5
console.log("Test to see if basket capacity has increased")
//setup increased capacity
basket = new Basket(10)
input = 5
output = 15
//execute increased capacity
total = basket.capacity
//console.log(total)
//verify increased capacity
console.log("Basket capacity has increased")
console.log(assertEquals(basket.increaseCapacity(input), output))


//Test 6
console.log("Test to see if item has already been added to basket")
//setup already added Bagel
basket = new Basket(3)
input = basket.add(["Bagel A", "Bagel B", "Bagel C"])
output = "Bagel A is already in the basket"
//execute already added Bagel
total = basket.add(["Bagel A"])
//verify already added Bagel
// console.log("Item already added")
console.log("Item is already in the basket")
console.log(assertEquals(total, output))


//Test 7
console.log("Test to see if an item can be removed if it's not in the basket")
//setup already added Bagel
basket = new Basket(3)
input = basket.add(["Bagel A", "Bagel B", "Bagel C"])
output = "Bagel D cannot be removed, it is not in the basket"
//execute already added Bagel
total = basket.remove(["Bagel D"])
//verify already added Bagel
// console.log("Item already added")
console.log("Item cannot be removed, it is not in the basket")
console.log(assertEquals(total, output))