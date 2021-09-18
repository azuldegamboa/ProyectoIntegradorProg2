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

INSERT INTO users values 
(default, 'mechi@gmail.com', 'hola123', 'Mercedes', 'Lombardi', '/images/users/mechi.jpeg', '2000-03-23', 21),
(default, 'lara@gmail.com', 'laritafer', 'Lara', 'Fernandez', '/images/users/lara.jpeg', '1999-01-01', 22),
(default, 'azul@gmail.com', 'blue09', 'Azul', 'De Gamboa', '/images/users/azul.jpeg', '1998-09-17', 23),
(default, 'mora@gmail.com', 'rivereslomas', 'Mora', 'Olveira', '/images/users/mora.jpeg', '2003-03-03', 18),
(default, 'raul@gmail.com', 'conciertosmipasion', 'Raul', 'Perez', '/images/users/raul.jpeg', '1998-05-22', 23);

INSERT INTO posteos values
(default, '/images/posts/hernan_cataneo.png', 'Hernan Cattaneo se presentará los días sábado 18 y domingo 19 de septiembre a las 22 hs y jueves 23 y viernes 24 de septiembre a las 21 hs, en el Teatro Gran Rex. No te quedes sin tu entrada.', '2021-07-29', 1),
(default, '/images/posts/vuelven-los-olestar.png', 'Imperdible vuelta de Los Olestar: se presentarán el día 9 de Octubre en Groove a las 20hs. Últimas entradas a la venta.', '2021-08-12', 3),
(default, '/images/posts/vicentico.jpeg', 'Tras un elogiado lanzamiento, Vicentico estará presentando su último álbum  titulado El pozo brillante el 15 de Octubre en el Teatro Gran Rex. Nos invita a animarnos a sacar afuera la sensibilidad y hacer lo que tenemos ganas.', '2021-06-12', 4),
(default, '/images/posts/trueno.png', '¡NUEVA Y ÚLTIMA FECHA! POR ENTRADAS AGOTADAS, TERCERA Y ÚLTIMA FUNCIÓN EN EL TEATRO GRAN REX el 30 DE SEPTIEMBRE. Te lo vas a perder?', '2021-07-02', 5),
(default, '/images/posts/divididos.jpeg', 'Enterate de los próximos shows presenciales de Divididos en ticketek.com', '2021-05-09', 2),
(default, '/images/posts/maria_becerra.jpeg', 'Se viene el primer concierto en vivo de la artista argentina más escuchada en el mundo. Pronto @mariabecerra en el @teatrogranrivadavia el próximo 22/10, Produce @akemusic y @josemlevy #animaltour @_asalto @los40ar', '2021-04-22', 1),
(default, '/images/posts/the_end_pink_floyd.png', 'The end celebra sus 30 años junto a la música de Pink Floyd con un concierto en el Teatro Gran Rex el sábado 30 de octubre a las 21 horas. Entradas a la venta a partir del 26 de agosto de 2021', '2021-07-02', 5),
(default, '/images/posts/nafta.jpeg', 'Jueves 16 de diciembre – 20:30 hs. NAFTA, grupo formado en 2016, se presenta en el Teatro Gran Rex.', '2021-08-17', 4),
(default, '/images/posts/queen.png', '¡Viví una verdadera Experiencia Queen en vivo! El 1 de octubre los mayores éxitos de Queen en una sola noche, reviviendolos cómo si estuvieras en uno de sus legendarios conciertos. Una noche que jamás olvidarás.', '2021-07-09', 3),
(default, '/images/posts/arena-summer.png', 'Llegó el tiempo de ser feliz, este 2022 se vuelve a la playa! Sumamos + espacios: MAIN STAGE by @playablancaramallo, VIP by @thegarden_island, ELECTRONIC STAGE by @ladob_producciones', '2021-09-21', 2);

INSERT INTO comentarios values
(default, 'Voy sin falta!!', 2021-07-29,2,102),
(default, 'Gracias por avisar, me encanta Hernan Cattaneo.', 2021-07-29,3,102),
(default, 'Ya compré entradas, fan n1', 2021-07-29,4,102),
(default, 'Pensé que se posponía para 2022, que bueno que falte tan poco!', 2021-07-29,5,102),
(default, 'No lo conozco, recomiendan?', 2021-08-12,4,103),
(default, 'Una amiga compró entradas pero no puede ir, interesados comunicarse por md.', 2021-08-12,5,103),
(default, 'Me hace acordar a mi infancia, que recuerdos!', 2021-08-12,2,103),
(default, 'Que lástima, en esa fecha me voy de viaje.', 2021-08-12,1,103),
(default, 'Aguante Vicentico!!!', 2021-06-12,1,104),
(default, 'Me aburre, a este no voy.', 2021-06-12,2,104),
(default, 'Lo escucho todos los días en el auto, no me lo pierdo ni loca.', 2021-06-12,3,104),
(default, 'No consigo con quién ir, pero muero de ganas!', 2021-06-12,5,104),
(default, 'El otro día lo escuché por primera vez!', 2021-07-02,1,105),
(default, 'Amo el rap', 2021-07-02,2,105),
(default, 'Es el rappero que más conozco, quizá voy.', 2021-07-02,3,105),
(default, 'Hasta cuando van a estar a la venta las entradas?', 2021-07-02,4,105),
(default, 'Si alguien consigue más info me comparte plis?', 2021-05-09,1,106),
(default, 'Saben porqué su banda se llama así?', 2021-05-09,3,106),
(default, 'Mi mama es fan!', 2021-05-09,4,106),
(default, 'Me encantaría pero estoy sin un mango después de tanto evento.', 2021-05-09,5,106),
(default, 'Como la pegó, ojalá haga un buen debut en el escenario.', 2021-04-22,2,107),
(default, 'Hace años que espero con ansias, es una crack.', 2021-04-22,3,107),
(default, 'Confirmado, llegó para romperla y quedarse.', 2021-04-22,4,107),
(default, 'A mi no me gusta, se cree mil y canta mal', 2021-04-22,5,107),
(default, 'Wow, ya son 30 años. Que rápido pasa el tiempo.', 2021-07-02,1,108),
(default, 'AMO', 2021-07-02,2,108),
(default, 'Que recuerdoss!!!!', 2021-07-02,3,108),
(default, 'Saben si va a haber muchas entradas a la venta?', 2021-07-02,4,108),
(default, 'Cuanto que hay en el Gran Rex.', 2021-08-17,1,109),
(default, 'Es con aforo?', 2021-08-17,2,109),
(default, 'Voy a ver, puede ser que compre', 2021-08-17,3,109),
(default, 'Conozco la banda, pero nose si voy.', 2021-08-17,5,109),
(default, 'Queen x siempre!!!', 2021-07-09,1,110),
(default, 'Fredy te adoro.', 2021-07-09,2,110),
(default, 'Oh yeah!', 2021-07-09,4,110),
(default, 'Como olvidar tal obra de arte', 2021-07-09,5,110),
(default, 'Beach 4ever', 2021-09-21,1,111),
(default, 'Los festivales son fijos en el verano, amo la vibe.', 2021-09-21,3,111),
(default, 'Quien no iría con el line up que se espera.', 2021-09-21,4,111),
(default, 'Vamos a ver que sucede este verano en cuanto al covid', 2021-09-21,5,111);



