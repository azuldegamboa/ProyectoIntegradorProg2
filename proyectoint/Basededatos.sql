CREATE DATABASE eventos_db;
USE  eventos_db;

CREATE TABLE users  (
 id int unsigned PRIMARY KEY auto_increment,
 email varchar (150),
 password varchar (150),
 nombre varchar(150),
 apellido varchar (150),
 imagen varchar (150),
 fecha_de_nacimiento date,
 edad int 
);

CREATE TABLE posteos  (
 id int unsigned PRIMARY KEY auto_increment,
 imagen varchar (150),
 descripcion varchar (250),
 fecha_de_creacion date,
 usuario_id int unsigned,
 foreign key (usuario_id) references users(id)
);

CREATE TABLE comentarios  (
 id int unsigned PRIMARY KEY auto_increment,
 comentario varchar (250),
 fecha_de_creacion date,
 usuario_id int unsigned,
 foreign key (usuario_id) references users(id),
 posteo_id int unsigned,
 foreign key (posteo_id) references posteos(id)

);

