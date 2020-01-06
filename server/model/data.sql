USE sql_intro;



-- CREATE TABLE clients (
--     id VARCHAR(50) NOT NULL PRIMARY KEY,
--     name VARCHAR(50),
--     email VARCHAR(50),
--     firstContact VARCHAR(50),
--     emailType VARCHAR(50),
--     sold BOOLEAN,
--     owner VARCHAR(50),
--     country VARCHAR(50)
-- ); 

-- CREATE TABLE town (
--     id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name varchar(30) NOT NULL
-- ); 

-- CREATE TABLE pokemon (
--     id int NOT NULL PRIMARY KEY,
--     name varchar(20) NOT NULL,
--     height INT,
--     weight INT,
--     type INT,
--     FOREIGN KEY(type) REFERENCES pokemon_type(id)
-- ); 



-- CREATE TABLE trainer (
--     id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name varchar(255) NOT NULL,
--     town INT,
--     FOREIGN KEY(town) REFERENCES town(id)
-- ); 



-- CREATE TABLE pokemon_trainer (
--     pokemon_id INT,
--     trainer_id INT,
--     FOREIGN KEY(pokemon_id) REFERENCES pokemon(id),
--     FOREIGN KEY(trainer_id) REFERENCES trainer(id)
-- ); 


-- DELETE  FROM trainer 

-- DROP TABLE clients;
-- DROP TABLE pokemon;
-- DROP TABLE pokemon_type;

-- UPDATE town
-- SET id = 4
-- WHERE id=6;

--
--)
