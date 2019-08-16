var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayItems();
});

function displayItems() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);

        for (var i = 0; i < res.length; i++) {
            console.log (
                "ID: " + res[i].id + "Product name: " + res[i].product_name + "Department name: " + res[i].department_name + "Price: " + res[i].price + "StockQuantity: " + res[i].stock_quantity
            )   
        };

        purchasePrompt();
    });
};

