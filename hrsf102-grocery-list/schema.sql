-- CREATE DB
DROP DATABASE grocery_list;
CREATE DATABASE grocery_list;
-- USE DB
USE grocery_list;
-- CREATE TABLE
CREATE TABLE IF NOT EXISTS groceries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    quantity INT NOT NULL
    -- PRIMARY_KEY(id)
);
-- INSERT SAMPLE ITEM
INSERT INTO groceries VALUES (1, "chips", 5);
