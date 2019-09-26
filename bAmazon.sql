CREATE DATABASE bamazonDb;

USE bamazonDb;

CREATE TABLE products (
id INTEGER(11) NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
	department VARCHAR(50) NOT NULL,
	price FLOAT(10, 2) NOT NULL,
	stock INTEGER(10) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO products (name, department, price, stock)
VALUES  
("Magic: The Gathering booster pack", "Games", 7.99, 199),
("Xbox One", "Electronics", 299.99, 25),
("PlayStation 4", "Electronics", 299.99, 25),
("Harry Potter collection", "Books", 199.99, 10),
("Exploding Kittens", "Games", 24.99, 100),
("Calvin and Hobbes collection", "Books", 99.99, 15),
("Adjustable dumbbells", "Equipment", 299.99, 15),
("Adjustable bench", "Equipment", 149.99, 30),
("Power rack", "Equipment", 1449.99, 5);
