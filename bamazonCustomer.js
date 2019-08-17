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
                "Item ID: " + res[i].item_id + " | Product name: " + res[i].product_name + " | Department name: " + res[i].department_name + " | Price: " + res[i].price + " | StockQuantity: " + res[i].stock_quantity
            )   
        };

        purchasePrompt();
    });
};

function purchasePrompt () {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
  
        inquirer.prompt([
            {
                name: "id",
                type: "input",
                message: "Please enter Item ID you like to purchase => ",
                validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return false;
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "Please enter quantity of selected item you would like to purchase => ",
                validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return false;
                }
            }
        ]).then(function(answer){
            var wantToBuy = res.id;
            var currentStock = res.id.quantity;
            var wantedQuantity = answer.quantity;
            var remainQuantity = currentStock - wantedQuantity;

            if (currentStock >= wantedQuantity) {
                connection.query (
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: remainQuantity,
                        },
                        {
                            item_id: wantToBuy,
                        }
                    ], 
                    function (err, res) {
                        if (err) throw err;
                            console.log (
                                "New Update to the Products Data" + 
                                "\n---------------------------------------------" + 
                                "\nID: " + wantToBuy.item_id + 
                                "\nProduct Name: " + wantToBuy.product_name + 
                                "\nDepartment: " + wantToBuy.department_name + 
                                "\nPrice: " + wantToBuy.price + 
                                "\nStockQuantity: " + stock_quantity +
                                "\n---------------------------------------------"
                            );

                            var totalCost = wantToBuy.price * wantedQuantity;

                            console.log("The Total You Have Been Paid is :  $" + totalCost);
                    }
                ); 

            } else {
                console.log("We are sorry. We don't have enough stock\n");
                console.log("No changes have been made");
            }
            
            connection.end();

        });
    });
  }