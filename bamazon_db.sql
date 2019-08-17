DROP DATABASE IF EXISTS bamazon_db;

CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES 
("Manchester United Soccer Jersey", "Sports & Outdoors", 99.99, 30),
("Tottenham Hotspur Banner", "Sports & Outdoors", 39.99, 15),
("Nike Hyper Venom Soccer Cleats", "Sports & Outdoors", 149.99, 50),
("Babolat Tennis Racquet", "Sports & Outdoors", 189.99, 10),
("Iron Man Infinity Gauntlet", "Toys", 199.99, 20),
("Thor Mjolnir", "Toys", 199.99, 20),
("Captain America Shield", "Toys", 199.99, 20),
("Samsung 70 Inch QLED TV", "Electronics", 1499.99, 10),
("Dyson Humidifier", "Electronics", 249.99, 20),
("Cannon G7X Mark II Digital Camera", "Electronics", 799.99, 15)