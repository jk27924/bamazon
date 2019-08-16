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

        var table = new Table ({
            head: ["Product ID", "Product Name", "Department Name", "Price", "Quantity"],
        });

        for (var i = 0; i < res.length; i++) {
            table.push (
                [res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            )
        };

        console.log(table.toString());
        purchasePrompt();
    });
};




