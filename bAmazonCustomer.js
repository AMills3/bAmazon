var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Miller00!",
    database: "bamazonDb"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    goShopping();
  });

var items = [];
                
function goShopping() {
    connection.query(
        "SELECT * FROM products",
        function (error, response) {
            if (error) {
            console.log("An error has occured.")
                return;
        }
        return items;
            purchase();
    });
}
                
function purchase() {
inquirer.prompt([{
    type: "input",
    name: "itemChoice",
    message: "Please enter ID of the item you would like to purchase."
},
    {
        type: "input",
        name: "quantity",
        message: "How many would you like to purchase?"
    }]).then(function(answer) {

var item = parseInt(answer.itemChoice);
var quantity = answer.quantity;
    connection.query("SELECT * FROM products WHERE id = ${item}", function (error, response) {
        if (error) {
        console.log("An error has occured.");
        return;
    }
    else {
    productData = response[0];
        if (productData.stock > quantity) {
            console.log("Yes, we have ${productData.name} in stock.");

var newTotal = productData.stock - quantity
var price = quantity*productData.price

connection.query("UPDATE products SET stock = ${newTotal} WHERE id = ${item}", function(error, response) {
    if (error) {
    console.log("Quantity update failed.");
    return;
}
    else {
    console.log("Your total is $${price}.")

var newSales = productData.productSales + price
    
connection.query("UPDATE products SET productSales = ${newSales} WHERE id = ${item}", function(error, response) {
    if (error) {
    console.log("Quantity update failed.");
    return;
}
    else {
    purchase();
            }
        });
    }
});
}
    else {
    console.log("We only have ${productData.stock} in stock.")
                }
            }
        })
    })
};
connection.destroy()