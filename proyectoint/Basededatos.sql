DROP DATABASE IF EXISTS eventos_db;  -- si hay algun error y lo arreglas, cuando corres el archivo entero, borra la base de datos y la vuelve a crear 
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
 created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
 updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
 usuario_id int unsigned,
 foreign key (usuario_id) references users(id) -- esta linea no esta en los modelos
);

CREATE TABLE comentarios  (
 id int unsigned PRIMARY KEY auto_increment,
 comentario varchar (250),
 created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
 updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
 usuario_id int unsigned,
 foreign key (usuario_id) references users(id),
 posteo_id int unsigned,
 foreign key (posteo_id) references posteos(id)

);

CREATE TABLE likes(
id int unsigned PRIMARY KEY auto_increment,
usuario_id int unsigned,
foreign key (usuario_id) references users(id),
posteo_id int unsigned,
foreign key (posteo_id) references posteos(id)
);

INSERT INTO users values 
(default, 'mechi@gmail.com', 'hola123', 'Mercedes', 'Lombardi', '/images/users/mechi.jpeg', '2000-03-23', 21),
(default, 'lara@gmail.com', 'laritafer', 'Lara', 'Fernandez', '/images/users/lara.jpeg', '1999-01-01', 22),
(default, 'azul@gmail.com', 'blue09', 'Azul', 'De Gamboa', '/images/users/azul.jpeg', '1998-09-17', 23),
(default, 'mora@gmail.com', 'rivereslomas', 'Mora', 'Olveira', '/images/users/mora.jpeg', '2003-03-03', 18),
(default, 'raul@gmail.com', 'conciertosmipasion', 'Raul', 'Perez', '/images/users/raul.jpeg', '1998-05-22', 23);

INSERT INTO posteos values
(default, '/images/posts/hernan_cataneo.png', 'Hernan Cattaneo se presentará los días sábado 18 y domingo 19 de septiembre a las 22 hs y jueves 23 y viernes 24 de septiembre a las 21 hs, en el Teatro Gran Rex. No te quedes sin tu entrada.', default,default, 1),
(default, '/images/posts/vuelven-los-olestar.png', 'Imperdible vuelta de Los Olestar: se presentarán el día 9 de Octubre en Groove a las 20hs. Últimas entradas a la venta.', default,default, 3),
(default, '/images/posts/vicentico.jpeg', 'Tras un elogiado lanzamiento, Vicentico estará presentando su último álbum  titulado El pozo brillante el 15 de Octubre en el Teatro Gran Rex. Nos invita a animarnos a sacar afuera la sensibilidad y hacer lo que tenemos ganas.', default,default, 4),
(default, '/images/posts/trueno.png', '¡NUEVA Y ÚLTIMA FECHA! POR ENTRADAS AGOTADAS, TERCERA Y ÚLTIMA FUNCIÓN EN EL TEATRO GRAN REX el 30 DE SEPTIEMBRE. Te lo vas a perder?', default,default, 5),
(default, '/images/posts/divididos.jpeg', 'Enterate de los próximos shows presenciales de Divididos en ticketek.com', default,default, 2),
(default, '/images/posts/maria_becerra.jpeg', 'Se viene el primer concierto en vivo de la artista argentina más escuchada en el mundo. Pronto @mariabecerra en el @teatrogranrivadavia el próximo 22/10, Produce @akemusic y @josemlevy #animaltour @_asalto @los40ar', default,default, 1),
(default, '/images/posts/the_end_pink_floyd.png', 'The end celebra sus 30 años junto a la música de Pink Floyd con un concierto en el Teatro Gran Rex el sábado 30 de octubre a las 21 horas. Entradas a la venta a partir del 26 de agosto de 2021', default,default, 5),
(default, '/images/posts/nafta.jpeg', 'Jueves 16 de diciembre – 20:30 hs. NAFTA, grupo formado en 2016, se presenta en el Teatro Gran Rex.', default,default, 4),
(default, '/images/posts/queen.png', '¡Viví una verdadera Experiencia Queen en vivo! El 1 de octubre los mayores éxitos de Queen en una sola noche, reviviendolos cómo si estuvieras en uno de sus legendarios conciertos. Una noche que jamás olvidarás.', default,default, 3),
(default, '/images/posts/arena-summer.png', 'Llegó el tiempo de ser feliz, este 2022 se vuelve a la playa! Sumamos + espacios: MAIN STAGE by @playablancaramallo, VIP by @thegarden_island, ELECTRONIC STAGE by @ladob_producciones', default,default, 2);

INSERT INTO comentarios values
(default, 'Voy sin falta!!', default,default,2,1),
(default, 'Gracias por avisar, me encanta Hernan Cattaneo.', default,default,3,1),
(default, 'Ya compré entradas, fan n1', default,default,4,1),
(default, 'Pensé que se posponía para 2022, que bueno que falte tan poco!', default,default,5,1),
(default, 'No lo conozco, recomiendan?', default,default,4,2),
(default, 'Una amiga compró entradas pero no puede ir, interesados comunicarse por md.', default,default,5,2),
(default, 'Me hace acordar a mi infancia, que recuerdos!', default,default,2,2),
(default, 'Que lástima, en esa fecha me voy de viaje.', default,default,1,2),
(default, 'Aguante Vicentico!!!', default,default,1,3),
(default, 'Me aburre, a este no voy.', default,default,2,3),
(default, 'Lo escucho todos los días en el auto, no me lo pierdo ni loca.', default,default,3,3),
(default, 'No consigo con quién ir, pero muero de ganas!', default,default,5,3),
(default, 'El otro día lo escuché por primera vez!', default,default,1,4),
(default, 'Amo el rap', default,default,2,4),
(default, 'Es el rappero que más conozco, quizá voy.', default,default,3,4),
(default, 'Hasta cuando van a estar a la venta las entradas?', default,default,4,4),
(default, 'Si alguien consigue más info me comparte plis?', default,default,1,5),
(default, 'Saben porqué su banda se llama así?', default,default,3,5),
(default, 'Mi mama es fan!', default,default,4,5),
(default, 'Me encantaría pero estoy sin un mango después de tanto evento.', default,default,5,5),
(default, 'Como la pegó, ojalá haga un buen debut en el escenario.', default,default,2,6),
(default, 'Hace años que espero con ansias, es una crack.', default,default,3,6),
(default, 'Confirmado, llegó para romperla y quedarse.', default,default,4,6),
(default, 'A mi no me gusta, se cree mil y canta mal', default,default,5,6),
(default, 'Wow, ya son 30 años. Que rápido pasa el tiempo.', default,default,1,7),
(default, 'AMO', default,default,2,7),
(default, 'Que recuerdoss!!!!', default,default,3,7),
(default, 'Saben si va a haber muchas entradas a la venta?', default,default,4,7),
(default, 'Cuanto que hay en el Gran Rex.', default,default,1,8),
(default, 'Es con aforo?', default,default,2,8),
(default, 'Voy a ver, puede ser que compre', default,default,3,8),
(default, 'Conozco la banda, pero nose si voy.', default,default,5,8),
(default, 'Queen x siempre!!!', default,default,1,9),
(default, 'Fredy te adoro.', default,default,2,9),
(default, 'Oh yeah!', default,default,4,9),
(default, 'Como olvidar tal obra de arte', default,default,5,9),
(default, 'Beach 4ever', default,default,1,10),
(default, 'Los festivales son fijos en el verano, amo la vibe.', default,default,3,10),
(default, 'Quien no iría con el line up que se espera.', default,default,4,10),
(default, 'Vamos a ver que sucede este verano en cuanto al covid', default,default,5,10);



