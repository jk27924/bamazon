// Required Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");

// MySQL Connection (from MAMP)
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,

    // Username
    user: "root",

    // Credentials
    password: "root",
    database: "bamazon_db"
});

// -------------------------------

connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start () {
    inquirer.prompt([
        {
            name: "selection",
            type: "rawlist",
            message: "Choose one of these",
            choices: [
                "View Products for Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add New Product"
            ]
        },
    ]).then(function (answer) {
        switch (answer.selection) {
            case "View Products for Sale": viewProducts();
                break;
            case "View Low Inventory": viewLowInven();
                break;
            case "Add to Inventory": addInven();
                break;
            case "Add New Product": addProduct();
                break;
        }
    });
};

// -------------------------------

function viewProducts () {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log("------------------------------------------------------ VIEW PRODUCTS FOR SALE ------------------------------------------------------\n");
        console.log("------------------------------------------------------------------------------------------------------------------------------------");

        for (var i = 0; i < res.length; i++) {
            console.log (
                "Item ID: " + res[i].item_id + " | Product Name: " + res[i].product_name + " | Department Name: " + res[i].department_name + " | Price: $" + res[i].price + " | Stock Quantity: " + res[i].stock_quantity +
                "\n------------------------------------------------------------------------------------------------------------------------------------"
            );   
            console.log("------------------------------------------------------------------------------------------------------------------------------------");
        };
        start();
    });
}

// -------------------------------


function viewLowInven () {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log("------------------------------------------------------ VIEW LOW INVENTORY ------------------------------------------------------\n");
        console.log("------------------------------------------------------------------------------------------------------------------------------------");

        for (var i = 0; i < res.length; i++) {
            if (res[i].stock_quantity < 5) {
                console.log (
                    "Item ID: " + res[i].item_id + " | Product Name: " + res[i].product_name + " | Department Name: " + res[i].department_name + " | Price: $" + res[i].price + " | Stock Quantity: " + res[i].stock_quantity +
                    "\n------------------------------------------------------------------------------------------------------------------------------------"
                );   
                console.log("------------------------------------------------------------------------------------------------------------------------------------");
            };
        };
        start();
    }); 
}


// -------------------------------


function addInven () {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log("------------------------------------------------------ ADD TO INVENTORY ------------------------------------------------------\n");
        console.log("------------------------------------------------------------------------------------------------------------------------------------");

        for (var i = 0; i < res.length; i++) {
            console.log (
                "Item ID: " + res[i].item_id + " | Product Name: " + res[i].product_name + " | Department Name: " + res[i].department_name + " | Price: $" + res[i].price + " | Stock Quantity: " + res[i].stock_quantity +
                "\n------------------------------------------------------------------------------------------------------------------------------------");   

            console.log("------------------------------------------------------------------------------------------------------------------------------------");
        };

// -------------------------------

        inquirer.prompt([
            {
                name: "add",
                type: "input",
                message: "Please enter the Item ID that needs more inventory.",
                validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return "Please enter a valid item ID with whole non-zero number.";
                }
            },
            {
                name: "qty",
                type: "input",
                message: "Please enter how many inventory needs to be  added for the chosen item.",
                validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return "Please enter a valid item ID with whole non-zero number.";
                }
            }

// -------------------------------

        ]).then(function(answer) {
            var itemAdd = res[answer.add - 1];
            var quantityAdd = itemAdd.stock_quantity + parseInt(answer.qty);

            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: quantityAdd,
                    },
                    {
                        item_id: answer.add,
                    }
                ],
                function (err, res) {
                    if (err) throw err;

                    console.log (
                        "\n------------------------------------------------------------------------------------------------------------------------------------" +
                        "\n*** UPDATE INVENTORY ***" + 
                        "\n------------------------------------------------------------------------------------------------------------------------------------" + 
                        "\nItem ID: " + itemAdd.item_id + 
                        "\nProduct Name: " + itemAdd.product_name + 
                        "\nDepartment: " + itemAdd.department_name + 
                        "\nUnit Price: $" + itemAdd.price + 
                        "\nNewly Updated Quantity: " + quantityAdd + 
                        "\n------------------------------------------------------------------------------------------------------------------------------------" +
                        "\n<< " + answer.qty + " of inventory has been added to " + itemAdd.product_name + " >>" +
                        "\n------------------------------------------------------------------------------------------------------------------------------------"
                    );

                    start();
                } 
            )
        });
    });
}

// -------------------------------

function addProduct () {
    
}