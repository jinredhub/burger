CREATE DATABASE  `burgers_db`;
USE `burgers_db`;

create table burgers(
	id int(11) auto_increment not null,
    burger_name varchar (255) not null,
    devoured boolean,
    date timestamp,
    primary key (id)
);