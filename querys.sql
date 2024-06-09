CREATE DATABASE proambiente;
USE proambiente;

-- Crear la tabla desarrolladores
CREATE TABLE desarrolladores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    nick VARCHAR(50) NOT NULL
);

-- Insertar los datos en la tabla desarrolladores
INSERT INTO desarrolladores (nombre, apellido, nick) VALUES
('Edwar', 'Gonzalez', 'YERCKEN'),
('Jeisson', 'Paredes', 'JP0770'),
('Dilan', 'Sobenis', 'DilanDev');

-- Tabla de Usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    nombre_completo VARCHAR(100),
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    es_experto BOOLEAN DEFAULT FALSE
);

-- Insertar los usuarios
INSERT INTO usuarios (nombre_usuario, contrasena, correo, nombre_completo)
VALUES 
('yercken', '1234', 'yercken@correo.com', 'Edwar I Gonzalez C'),
('dilanDev', '1234', 'dilan@correo.com', 'Dilan Sobenis'),
('JP0770', '1234', 'jeisson@correo.com', 'Jeisson A. Paredes');

-- Tabla de Roles (por ejemplo, usuario normal, administrador, experto)
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(50) NOT NULL UNIQUE
);

-- Insertar roles
INSERT INTO roles (nombre_rol) VALUES ('usuario');

-- Tabla de Roles de Usuarios
CREATE TABLE usuario_roles (
    usuario_id INT,
    rol_id INT,
    PRIMARY KEY (usuario_id, rol_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (rol_id) REFERENCES roles(id) ON DELETE CASCADE
);

-- Asignar rol de usuario a todos los usuarios
INSERT INTO usuario_roles (usuario_id, rol_id)
SELECT id, (SELECT id FROM roles WHERE nombre_rol = 'usuario')
FROM usuarios;

-- Tabla de Foros
CREATE TABLE foros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    usuario_id INT,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
);

-- Tabla de Comentarios en Foros
CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    foro_id INT,
    usuario_id INT,
    contenido TEXT NOT NULL,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (foro_id) REFERENCES foros(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
);

-- Insertar foros sobre medio ambiente
INSERT INTO foros (titulo, descripcion, usuario_id) 
VALUES 
('Reciclaje en el hogar', 'Discusión sobre cómo implementar prácticas de reciclaje en casa.', 1),
('Conservación de especies en peligro', 'Charla sobre estrategias para proteger y conservar especies en riesgo de extinción.', 2),
('Impacto de la deforestación', 'Debate sobre los efectos de la deforestación en el medio ambiente.', 3);

-- Insertar comentarios en los foros
INSERT INTO comentarios (foro_id, usuario_id, contenido)
VALUES 
(1, 1, 'Es importante separar adecuadamente los materiales reciclables para facilitar su reciclaje.'),
(2, 2, 'Se deberían implementar más medidas para proteger las especies en peligro, como la creación de reservas naturales.'),
(3, 3, 'La deforestación tiene un impacto devastador en la biodiversidad y el clima global.');

-- Tabla de Reportes
CREATE TABLE reportes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    usuario_id INT,
    fecha_reporte DATETIME DEFAULT CURRENT_TIMESTAMP,
    verificado BOOLEAN DEFAULT FALSE,
    fecha_verificacion DATETIME,
    verificado_por INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL,
    FOREIGN KEY (verificado_por) REFERENCES usuarios(id) ON DELETE SET NULL
);
-- Insertar reportes
INSERT INTO reportes (titulo, descripcion, usuario_id, verificado, fecha_verificacion, verificado_por) VALUES
('Contaminación del río', 'Se ha observado una alta concentración de residuos industriales en el río.', 1, FALSE, NULL, NULL),
('Destrucción del hábitat', 'Se está construyendo un nuevo complejo residencial en una zona de reserva natural.', 2, TRUE, '2024-05-10 10:30:00', 3),
('Caza furtiva', 'Avistamiento de cazadores furtivos en la reserva nacional.', 3, TRUE, '2024-05-12 15:45:00', 2);

-- Tabla de Artículos
CREATE TABLE articulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    contenido TEXT,
    autor_id INT,
    fecha_publicacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    verificado BOOLEAN DEFAULT FALSE,
    fecha_verificacion DATETIME,
    verificado_por INT,
    FOREIGN KEY (autor_id) REFERENCES usuarios(id) ON DELETE SET NULL,
    FOREIGN KEY (verificado_por) REFERENCES usuarios(id) ON DELETE SET NULL
);

-- Tabla de Categorías de Artículos
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_categoria VARCHAR(50) NOT NULL UNIQUE
);

-- Relación Artículos-Categorías
CREATE TABLE articulo_categorias (
    articulo_id INT,
    categoria_id INT,
    PRIMARY KEY (articulo_id, categoria_id),
    FOREIGN KEY (articulo_id) REFERENCES articulos(id) ON DELETE CASCADE,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE CASCADE
);

-- Tabla de Solicitudes de Expertos
CREATE TABLE solicitudes_expertos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    fecha_solicitud DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado_solicitud VARCHAR(50) DEFAULT 'pendiente', -- pendiente, aprobado, rechazado
    evaluado_por INT,
    fecha_evaluacion DATETIME,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL,
    FOREIGN KEY (evaluado_por) REFERENCES usuarios(id) ON DELETE SET NULL
);
select f.id, f.titulo, f.descripcion, f.fecha_creacion, u.nombre_completo AS usuarios from foros f JOIN usuarios u ON f.usuario_id = u.id;
select f.id, f.titulo, f.descripcion, f.fecha_creacion, u.nombre_completo AS usuarios from foros f JOIN usuarios u ON f.usuario_id = u.id ORDER BY fecha_creacion DESC
-- Insertar reportes
INSERT INTO reportes (titulo, descripcion, usuario_id, verificado, fecha_verificacion, verificado_por) VALUES
('Contaminación del río', 'Se ha observado una alta concentración de residuos industriales en el río.', 1, FALSE, NULL, NULL),
('Destrucción del hábitat', 'Se está construyendo un nuevo complejo residencial en una zona de reserva natural.', 2, TRUE, '2024-05-10 10:30:00', 3),
('Caza furtiva', 'Avistamiento de cazadores furtivos en la reserva nacional.', 3, TRUE, '2024-05-12 15:45:00', 2);
