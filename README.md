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
https://youtu.be/ymjpHojze4M

## Screenshots of App

<img src="images/01-initial-value-db.png">
<img src="images/02-validation.png">
<img src="images/03-validation.png">
<img src="images/04-order-placed.png">
<img src="images/05-db-update-after-order.png">
<img src="images/06-not-enough-stock.png">




