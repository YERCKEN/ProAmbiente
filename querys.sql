create database proambiente;
use proambiente;

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

-- Tabla de Roles (por ejemplo, usuario normal, administrador, experto)
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(50) NOT NULL UNIQUE
);

-- Tabla de Roles de Usuarios
CREATE TABLE usuario_roles (
    usuario_id INT,
    rol_id INT,
    PRIMARY KEY (usuario_id, rol_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (rol_id) REFERENCES roles(id) ON DELETE CASCADE
);

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
