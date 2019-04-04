-- DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  username TEXT,
  PRIMARY KEY (id)
);


-- CREATE TABLE rooms (
--   /* Describe your table here.*/
--   id INT NOT NULL AUTO_INCREMENT,
--   roomname TEXT,
--   PRIMARY KEY (id)
-- );

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(200) NOT NULL,
  roomname VARCHAR(20),
  PRIMARY KEY (id),
  FOREIGN KEY (id) REFERENCES users(id)
  
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

