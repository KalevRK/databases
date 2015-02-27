CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE messages (
  ID int NOT NULL AUTO_INCREMENT,
  Username varchar(30),
  Message varchar(150),
  Room varchar(30),
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  ID int NOT NULL AUTO_INCREMENT,
  Username varchar(30),
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

