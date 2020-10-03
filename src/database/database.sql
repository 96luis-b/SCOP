CREATE TABLE user_1 (
    id_user serial NOT NULL PRIMARY KEY,
    user_name varchar(20) NOT NULL,
	password varchar(20) NOT NULL,
	name varchar (20) NOT NULL,
	lastname varchar(20) NOT NULL,
	email varchar(40) NOT NULL
);


CREATE TABLE work_area
(
id_work_area serial NOT NULL PRIMARY KEY,
descrip varchar(40)
);
-- ALTER TABLE work_area ADD COLUMN id_work_area SERIAL PRIMARY KEY
-- ALTER TABLE work_area ALTER COLUMN id_work_area SERIAL PRIMARY KEY

CREATE TABLE workstation
(
id_workstation serial NOT NULL PRIMARY KEY,
descrip varchar(40)
);

CREATE TABLE oper_produc
(
id_oper serial NOT NULL PRIMARY KEY,
name_oper varchar(20),
second_name_oper varchar(20),
lastname varchar(20),
second_surname_oper varchar(20),
-- dep int NOT NULL,
id_work_area int REFERENCES work_area(id_work_area),  -- Foreingn key
id_workstation int REFERENCES workstation(id_workstation) -- Foreingn key
);

CREATE TABLE product
(
id_product serial NOT NULL PRIMARY KEY,
name_produc varchar(40)
);

CREATE TABLE units_count
(
quatity FLOAT NOT NULL,
date DATE NOT NULL,
time TIME NOT NULL,
id_user int REFERENCES user_1(id_user),
id_product int REFERENCES product(id_product),
id_oper int REFERENCES oper_produc(id_oper)
);



-- consultas simples

SELECT * FROM user_1
SELECT * FROM oper_produc
SELECT * FROM product
SELECT * FROM units_count
SELECT * FROM work_area
SELECT * FROM workstation


-- consultas

	--consulta de conteo de unidades con fecha espesifica
 --SELECT id_oper, id_product, sum(quantity)FROM units_count WHERE date = '2020/09/05' GROUP BY id_oper, id_product
SELECT id_oper, id_product, SUM(quantity) FROM units_count WHERE date = '2020/09/08' AND id_oper = 1 
GROUP BY id_oper, id_product

SELECT units_count.id_oper, units_count.id_product, workstation.descrip, name_product ,  SUM(quantity) 
 FROM units_count 
 INNER JOIN product ON product.id_product = units_count.id_product
 INNER JOIN oper_produc ON oper_produc.id_oper = units_count.id_oper
 INNER JOIN workstation ON workstation.id_workstation = oper_produc.id_workstation
 WHERE date = '2020/09/21'
 GROUP BY units_count.id_oper, units_count.id_product, workstation.descrip, name_product
 ORDER BY units_count.id_oper 


SELECT units_count.id_oper, units_count.id_product, workstation.descrip,
 oper_produc.name_oper, oper_produc.second_name_oper, oper_produc.lastname, oper_produc.second_surname_oper, 
 name_product,  SUM(quantity) 
 FROM units_count 
 INNER JOIN product ON product.id_product = units_count.id_product
 INNER JOIN oper_produc ON oper_produc.id_oper = units_count.id_oper
 INNER JOIN workstation ON workstation.id_workstation = oper_produc.id_workstation
 WHERE date = '2020/09/21'
 GROUP BY units_count.id_oper, units_count.id_product, workstation.descrip,
 oper_produc.name_oper, oper_produc.second_name_oper, oper_produc.lastname, oper_produc.second_surname_oper, name_product
 ORDER BY units_count.id_oper 





--insert data

INSERT INTO user_1 (user_name, password, name, lastname, email) VALUES ('luisb', 1234, 'Luis', 'Bocaranda', 'luisbocaranda19@gmail.com');
	-- work_area
INSERT INTO work_area (descrip) VALUES ('Sala 5 - Extracción de carne blanca');
INSERT INTO work_area (descrip) VALUES ('Sala 1 - Extracción de carne negra');
INSERT INTO work_area (descrip) VALUES ('Sala 1 - Revisado de carne negra');
INSERT INTO work_area (descrip) VALUES ('Sala 4 - Revisado de carne blanca');
INSERT INTO work_area (descrip) VALUES ('Sala 4 - Revisado de carne jumbo');
INSERT INTO work_area (descrip) VALUES ('Sala de desconche de cangrejo');

	--workstation
INSERT INTO workstation (descrip) VALUES ('Cangrejero');
INSERT INTO workstation (descrip) VALUES ('Colmillero');
INSERT INTO workstation (descrip) VALUES ('Desconchador');
INSERT INTO workstation (descrip) VALUES ('Revisador de carne negra');
INSERT INTO workstation (descrip) VALUES ('Revisador de carne blanca');
INSERT INTO workstation (descrip) VALUES ('Revisador de carne jumbo');

	--product
INSERT INTO product (name_produc) VALUES ('Jumbo');
INSERT INTO product (name_produc) VALUES ('Lump');
INSERT INTO product (name_produc) VALUES ('Special');
INSERT INTO product (name_produc) VALUES ('Claw');
INSERT INTO product (name_produc) VALUES ('Cocktail');
INSERT INTO product (name_produc) VALUES ('S/Lump');
INSERT INTO product (name_produc) VALUES ('S/Claw');
INSERT INTO product (name_produc) VALUES ('Cesta/Jumbo');
INSERT INTO product (name_produc) VALUES ('R/Lump');
INSERT INTO product (name_produc) VALUES ('R/Claw');

	--oper_produc

 INSERT INTO oper_produc 
 (name_oper, second_name_oper, lastname, second_surname_oper, id_work_area, id_workstation) 
 VALUES ('Maria', 'Elena', 'Gonzalez', 'Gonzalez', 4, 5);	-- Revisado de carne Blanca

  INSERT INTO oper_produc 
 (name_oper, second_name_oper, lastname, second_surname_oper, id_work_area, id_workstation) 
 VALUES ('Mileidy', 'Paola', 'Pirela', 'Mendez', 1, 1); 	-- Cangrejo

INSERT INTO oper_produc 
 (name_oper, second_name_oper, lastname, second_surname_oper, id_work_area, id_workstation) 
 VALUES ('Maria', 'Luisa', 'Gonzalez', 'Gonzalez', 2, 2);	-- Colmillo

 INSERT INTO oper_produc 
 (name_oper, second_name_oper, lastname, second_surname_oper, id_work_area, id_workstation) 
 VALUES ('Gabriel', 'Jose', 'Mendoza', 'Fernandez', 3, 4);	-- Revisado de carne negra

  INSERT INTO oper_produc 
 (name_oper, second_name_oper, lastname, second_surname_oper, id_work_area, id_workstation) 
 VALUES ('Santiago', 'Eli', 'Cordero', 'Torres', 7, 3);		-- Desconche

 INSERT INTO oper_produc 
 (name_oper, second_name_oper, lastname, second_surname_oper, id_work_area, id_workstation) 
 VALUES ('Elizabeth', 'Coromoto', 'Lopez', 'Palmar', 5, 6); -- Jumbo


	--units_count

INSERT INTO units_count 
 (quantity, date, time, id_user, id_product, id_oper) 
 VALUES (1, '2020/08/31', '14:44:20', 1, 4, 7);		-- Extración de carne negra 

INSERT INTO units_count 
 (quantity, date, time, id_user, id_product, id_oper) 
 VALUES (1, '2020/09/08', '14:44:20', 1, 1, 1);		-- Extración de carne blanca 





-- delete data

	-- work_area
	DELETE FROM work_area WHERE id_work_area = 6;


-- update data

	-- product
	UPDATE product SET  name_product='RS/Lump' WHERE id_product=6
	UPDATE product SET  name_product='RS/Claw' WHERE id_product=7