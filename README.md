# Bamazon


## Overview
BAMAZON is an Amazon-like storefront based on MySQL. The app will take in orders from customers and deplete stocks from the store's inventory. Also, it is possible to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.


## Technologies Used
- Node.js
- Javascript
- Inquirer
- NPM Package
- MySQL


## Interfaces
- Customer Interface
- Manager Interface
- Supervisor interface


## What Each Interface Does
**1. Customer Interface: node bamazonCustomer.js**

  The customer interface allows the user to view the current inventory of products with,
- Item IDs
- Product Names
- Department Names
- Prices
- Current Stock Levels 

Then, the user is able to purchase one of those listed products by inputting its Item ID and desired quantity. The order gets fulfilled by displaying the product's total price and updated stock level, if there is enough stock. But if there is not enough stock, the order do not get fulfilled, and shows a message to modify the user's order.


**2. Manager Interface: node bamazonManager.js**

  The manager interface allow to list a set of menu options:
- View Products for Sale
  * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.
  
- View Low Inventory
  * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

- Add to Inventory
  * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

- Add New Product
  * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.
  

**3. Supervisor Interface: node bamazonSupervisor.js**

  The supervisor interface allow to simulate basic profit and sales insights for the upper management. The manager interface allow to list a set of menu options:
  
- View Product Sales by Department
  * When a supervisor selects `View Product Sales by Department`, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.
  

    | department_id | department_name | over_head_costs | product_sales | total_profit |
    | ------------- | --------------- | --------------- | ------------- | ------------ |
    | 01            | Electronics     | 10000           | 20000         | 10000        |
    | 02            | Clothing        | 60000           | 100000        | 40000        |


- Create New Department


## Demonstration Video
1) bamazonCustomer.js : https://youtu.be/ymjpHojze4M
2) bamazonManager.js : https://youtu.be/-Lc4MH6gyhM

## Screenshots of App

### Customer 01_Initial Values of Existing Products in Database
<img src="images/customer-01-initial-value-db.png">

### Customer 02_Purchase Prompt & Validation for Item ID
<img src="images/customer-02-validation.png">

### Customer 03_Purchase Prompt & Validation for Item Quantity
<img src="images/customer-03-validation.png">

### Customer 04_Order Summary / Total Price / Updated Quantity
<img src="images/customer-04-order-placed.png">

### Customer 05_Updated Quantity in Database after order is placed
<img src="images/customer-05-db-update-after-order.png">

### Customer 06_Messages when there is not enough stock
<img src="images/customer-06-not-enough-stock.png">

### Manager 01_Initial Values of Existing Products in Database
<img src="images/manager-01-initial-value-db.png">

### Manager 02_View Products for Sale - Prompt
<img src="images/manager-02-view-product-01.png">

### Manager 03_View Products for Sale
<img src="images/manager-03-view-product-02.png">

### Manager 04_View Low Inventory - Prompt
<img src="images/manager-04-view-low-inventory-01.png">

### Manager 05_View Low Inventory (Qty < 5)
<img src="images/manager-05-view-low-inventory-02.png">

### Manager 06_Add to Inventory - Prompt
<img src="images/manager-06-add-to-inventory-01.png">

### Manager 07_Add to Inventory - Validation for Item ID
<img src="images/manager-07-add-to-inventory-02-validation-01.png">

### Manager 08_Add to Inventory - Validation for Item Quantity
<img src="images/manager-08-add-to-inventory-03-validation-02.png">

### Manager 09_Add to Inventory - Updated Inventory
<img src="images/manager-09-add-to-inventory-04.png">

### Manager 10_Add a New Product - Prompt
<img src="images/manager-10-add-new-product-01.png">

### Manager 11_Add a New Product - Updated Products List
<img src="images/manager-11-add-new-product-02.png">

### Manager 12_Add a New Product - Updated Database
<img src="images/manager-12-add-new-product-03.png">

### Manager 13_Log Out - Prompt
<img src="images/manager-13-log-out-01.png">

### Manager 14_Log Out
<img src="images/manager-14-log-out-02.png">
