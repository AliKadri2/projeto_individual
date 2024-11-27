-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database projetoindividual;

use projetoindividual;

 

create table quiz(
idquiz int primary key auto_increment,
pontos varchar(45),
fkusuario int,
foreign key (fkusuario) 
	references usuario(idusuario)
);

CREATE TABLE usuario (
	idusuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);