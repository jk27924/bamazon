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
        console.table(res);
        // console.log("-------------------------------------------------------- WELCOME TO BAMAZON --------------------------------------------------------\n");
        // console.log("------------------------------------------------------------------------------------------------------------------------------------");

        // for (var i = 0; i < res.length; i++) {
        //     console.log (
        //         "Item ID: " + res[i].item_id + " | Product Name: " + res[i].product_name + " | Department Name: " + res[i].department_name + " | Price: $" + res[i].price + " | Stock Quantity: " + res[i].stock_quantity +
        //         "\n------------------------------------------------------------------------------------------------------------------------------------"
        //     );   
        //     console.log("------------------------------------------------------------------------------------------------------------------------------------");
        // };

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
                message: "Please enter Item ID you would like to purchase => ",
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
            var wantToBuy = res[answer.id-1];
            var currentStock = res[answer.id-1].stock_quantity;
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
                            item_id: wantToBuy.item_id,
                        }
                    ], 
                    function (err, res) {
                        if (err) throw err;
                            console.log (
                                "New Update to the Products Data" + 
                                "\n---------------------------------------------" + 
                                "\nItem ID: " + wantToBuy.item_id + 
                                "\nProduct Name: " + wantToBuy.product_name + 
                                "\nDepartment: " + wantToBuy.department_name + 
                                "\nPrice: $" + wantToBuy.price + 
                                "\nStock Quantity: " + remainQuantity +
                                "\n---------------------------------------------"
                            );

                            var totalCost = (wantToBuy.price * wantedQuantity).toFixed(2);

                            console.log("The Total You Have Been Paid is $" + totalCost);
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

// what is going to happen when the stock goes 0.
// how to bring the stock back.
// what is "UPDATE products SET ? WHERE ?"
// why do we need validation.
    // validate: function(value) {
    //     if (isNaN(value) === false) {
    //         return true;
    //       }
    //       return false;
    //   }
