-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: proambiente
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articulo_categorias`
--

DROP TABLE IF EXISTS `articulo_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulo_categorias` (
  `articulo_id` int NOT NULL,
  `categoria_id` int NOT NULL,
  PRIMARY KEY (`articulo_id`,`categoria_id`),
  KEY `categoria_id` (`categoria_id`),
  CONSTRAINT `articulo_categorias_ibfk_1` FOREIGN KEY (`articulo_id`) REFERENCES `articulos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `articulo_categorias_ibfk_2` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulo_categorias`
--

LOCK TABLES `articulo_categorias` WRITE;
/*!40000 ALTER TABLE `articulo_categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `articulo_categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articulos`
--

DROP TABLE IF EXISTS `articulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `contenido` text,
  `autor_id` int DEFAULT NULL,
  `fecha_publicacion` datetime DEFAULT CURRENT_TIMESTAMP,
  `verificado` tinyint(1) DEFAULT '0',
  `fecha_verificacion` datetime DEFAULT NULL,
  `verificado_por` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `autor_id` (`autor_id`),
  KEY `verificado_por` (`verificado_por`),
  CONSTRAINT `articulos_ibfk_1` FOREIGN KEY (`autor_id`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL,
  CONSTRAINT `articulos_ibfk_2` FOREIGN KEY (`verificado_por`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulos`
--

LOCK TABLES `articulos` WRITE;
/*!40000 ALTER TABLE `articulos` DISABLE KEYS */;
/*!40000 ALTER TABLE `articulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_categoria` (`nombre_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `foro_id` int DEFAULT NULL,
  `usuario_id` int DEFAULT NULL,
  `contenido` text NOT NULL,
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `foro_id` (`foro_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`foro_id`) REFERENCES `foros` (`id`) ON DELETE CASCADE,
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (4,7,4,'Es importante separar adecuadamente los materiales reciclables para facilitar su reciclaje.','2024-06-03 03:14:47'),(5,8,5,'Se deberían implementar más medidas para proteger las especies en peligro, como la creación de reservas naturales.','2024-06-03 03:14:47'),(6,9,6,'La deforestación tiene un impacto devastador en la biodiversidad y el clima global.','2024-06-03 03:14:47');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `desarrolladores`
--

DROP TABLE IF EXISTS `desarrolladores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `desarrolladores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `nick` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `desarrolladores`
--

LOCK TABLES `desarrolladores` WRITE;
/*!40000 ALTER TABLE `desarrolladores` DISABLE KEYS */;
INSERT INTO `desarrolladores` VALUES (1,'Edwar','Gonzalez','YERCKEN'),(2,'Jeisson','Paredes','JP0770'),(3,'Dilan','Sobenis','DilanDev');
/*!40000 ALTER TABLE `desarrolladores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foros`
--

DROP TABLE IF EXISTS `foros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `descripcion` text,
  `usuario_id` int DEFAULT NULL,
  `fecha_creacion` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `foros_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foros`
--

LOCK TABLES `foros` WRITE;
/*!40000 ALTER TABLE `foros` DISABLE KEYS */;
INSERT INTO `foros` VALUES (7,'Reciclaje en el hogar','Discusión sobre cómo implementar prácticas de reciclaje en casa.',4,'2024-06-03 03:14:10'),(8,'Conservación de especies en peligro','Charla sobre estrategias para proteger y conservar especies en riesgo de extinción.',5,'2024-06-03 03:14:10'),(9,'Impacto de la deforestación','Debate sobre los efectos de la deforestación en el medio ambiente.',6,'2024-06-03 03:14:10'),(19,'PRUEBA CON JEISSON','Una pruebita de jeisson',4,'2024-06-04 13:59:30');
/*!40000 ALTER TABLE `foros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reportes`
--

DROP TABLE IF EXISTS `reportes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reportes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `descripcion` text,
  `usuario_id` int DEFAULT NULL,
  `fecha_reporte` datetime DEFAULT CURRENT_TIMESTAMP,
  `verificado` tinyint(1) DEFAULT '0',
  `fecha_verificacion` datetime DEFAULT NULL,
  `verificado_por` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `verificado_por` (`verificado_por`),
  CONSTRAINT `reportes_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL,
  CONSTRAINT `reportes_ibfk_2` FOREIGN KEY (`verificado_por`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reportes`
--

LOCK TABLES `reportes` WRITE;
/*!40000 ALTER TABLE `reportes` DISABLE KEYS */;
/*!40000 ALTER TABLE `reportes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_rol` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_rol` (`nombre_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'usuario');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solicitudes_expertos`
--

DROP TABLE IF EXISTS `solicitudes_expertos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitudes_expertos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int DEFAULT NULL,
  `fecha_solicitud` datetime DEFAULT CURRENT_TIMESTAMP,
  `estado_solicitud` varchar(50) DEFAULT 'pendiente',
  `evaluado_por` int DEFAULT NULL,
  `fecha_evaluacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `evaluado_por` (`evaluado_por`),
  CONSTRAINT `solicitudes_expertos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL,
  CONSTRAINT `solicitudes_expertos_ibfk_2` FOREIGN KEY (`evaluado_por`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitudes_expertos`
--

LOCK TABLES `solicitudes_expertos` WRITE;
/*!40000 ALTER TABLE `solicitudes_expertos` DISABLE KEYS */;
/*!40000 ALTER TABLE `solicitudes_expertos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_roles`
--

DROP TABLE IF EXISTS `usuario_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_roles` (
  `usuario_id` int NOT NULL,
  `rol_id` int NOT NULL,
  PRIMARY KEY (`usuario_id`,`rol_id`),
  KEY `rol_id` (`rol_id`),
  CONSTRAINT `usuario_roles_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE,
  CONSTRAINT `usuario_roles_ibfk_2` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_roles`
--

LOCK TABLES `usuario_roles` WRITE;
/*!40000 ALTER TABLE `usuario_roles` DISABLE KEYS */;
INSERT INTO `usuario_roles` VALUES (4,1),(5,1),(6,1);
/*!40000 ALTER TABLE `usuario_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(50) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `nombre_completo` varchar(100) DEFAULT NULL,
  `fecha_registro` datetime DEFAULT CURRENT_TIMESTAMP,
  `es_experto` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_usuario` (`nombre_usuario`),
  UNIQUE KEY `correo` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (4,'yercken','1234','yercken@correo.com','Edwar I Gonzalez C','2024-06-03 03:05:36',0),(5,'dilanDev','1234','dilan@correo.com','Dilan Sobenis','2024-06-03 03:05:36',0),(6,'JP0770','1234','jeisson@correo.com','Jeisson A. Paredes','2024-06-03 03:05:36',0),(8,'pury','123','pury@correo.com','Eimy Yazary Gonzalez Coronel','2024-06-04 23:30:46',0),(10,'pury2','123','pury2@correo.com','Eimy Yazary Gonzalez Coronel','2024-06-04 23:33:14',0),(11,'pury3','123','pury3@correo.com','Eimy Yazary Gonzalez Coronel','2024-06-04 23:39:52',0),(12,'pury4','$2a$10$0/9EGS5n5gyciw5RLc2f9OzmtseX4eiovz02NHkcktQSUBdeA7W5e','pury4@correo.com','Eimy Yazary Gonzalez Coronel','2024-06-04 23:58:50',0),(13,'pury5','$2a$10$BnUC2NUtdh7YOCAq8uWuCOLaf6C1LStINGiDBDmrv.0szVzRf.8vy','pury5@correo.com','Eimy Yazary Gonzalez Coronel','2024-06-05 00:00:50',0),(14,'kaki','$2a$10$zOVmoYYZgvYxsq92gc20DOk7FhzcOkIF89sYAYHJrKV0QUkLyL.Xi','kaki@correo.com','Okazaki Rios','2024-06-05 01:51:47',0),(15,'kaki2','$2a$10$YF9hgrkbHWydDJfopO9vbu1FIBvYehU/H.c3dwAv3/ysUFg5oMM3O','kaki2@correo.com','Okazaki Rios','2024-06-05 01:54:29',0),(16,'horny','$2a$10$JLTFN4lJAqnpbJdfDbOJe.9uKyg3XtVFzcoJzjSYBKb2OHiB3qqbW','horny@correo.com','Jason Grajales el más guapo','2024-06-05 02:30:07',0),(17,'Edwar','$2a$10$2u2AUjTb8jmx28XL.i2yX.zUllFDEx.CYtRAlaV/KCVIvkp40DRpq','edwar@correo.com','Edwar Isaac Gonzalez Coronel','2024-06-05 23:01:48',0),(18,'juan','$2a$10$612aOcKuDl0m.7YR4f76g./mtzsAUaleVc9kZlbfgPwjHAbKu3gQa','juan@correo.com','juan el papi','2024-06-06 03:46:23',0),(19,'Miriam','$2a$10$ThIYQzH0ySW36pVykuq0nOXIcCpTxwNboB7mL7.w.HXaCt39QY3k2','miriam@correo.com','Miriam E. Sepa como se llama','2024-06-06 04:07:59',0),(20,'Dilan','$2a$10$TXXTQJLGM7eIzHjp2NIbM.uIHpImkv9ktqnZqWIrfJcot41J9wNlC','dilan.sobenis@correo.com','Dilan Sobenis','2024-06-06 13:56:44',0),(21,'marcos','$2a$10$yuZ8PQuN3PEhzS9bktdn.O2NY5wy3pdqZcE14/RLkI3Pz3spjIp/G','marcos@gmail.com','marcos j','2024-06-06 21:46:16',0),(22,'marco2','$2a$10$VVDi0GV2diYG3F9sGb4O1eKwktqpSsN9Fwti46OQc8Hg46LymKUsm','marcos2@gmail.com','marco j','2024-06-06 21:48:35',0),(23,'jeisson1','$2a$10$GiPsr9N126EXAriOTZ2Vr.FwNd4vEWLesQHogtjMnWlLvRktaJ/bi','jeissasdas@sadasd.com','jeisspararedes','2024-06-06 22:02:52',0),(24,'yercke1','$2a$10$BlfainSZMA1GxP/fhJJG7udCcQYrUFeGa/wU0pR2z9XflUK2Ecd5S','correo@gmail.com','edwar issac gonzalez coronel','2024-06-06 23:17:43',0),(25,'yercken2','$2a$10$azYiUeh3MjKh4WjIt3n7teN1b/52H7Zejl0QKi/1YrIccJnJY2t8i','yercken1@correo.com','Dilan Sobenis','2024-06-06 23:24:48',0),(26,'yerck','$2a$10$2/NdEcz/6vUU34tgUJqZo.byMvOSylJ1VGiPo8Qli5RV4FImJbhm.','correo@ejemplo.com','ededa','2024-06-06 23:43:12',0),(27,'jeissonBB','$2a$10$xwzuefttE3uM/PKTwLm.guhwqds7zAi0RZJnfdn1JOTACF1l75Ezq','jeissonBB@correo.com','asasas','2024-06-07 00:10:48',0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-06 21:05:52
