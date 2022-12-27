-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: projectbbdd
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `medias`
--

DROP TABLE IF EXISTS `medias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `urls` varchar(255) DEFAULT NULL,
  `Types_id` int NOT NULL,
  PRIMARY KEY (`id`,`Types_id`),
  KEY `fk_Medias_Types1_idx` (`Types_id`),
  CONSTRAINT `fk_Medias_Types1` FOREIGN KEY (`Types_id`) REFERENCES `types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medias`
--

LOCK TABLES `medias` WRITE;
/*!40000 ALTER TABLE `medias` DISABLE KEYS */;
INSERT INTO `medias` VALUES (1,'Viento','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Aire\\Viento\\Viento.mp3\"',1),(2,'Ventisca','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Aire\\Ventisca\\Ventisca.mp3\"',1),(3,'Blizzard','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Aire\\Blizzard\\Blizzard.mp3\"',1),(4,'Aire acondicionado','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Aire\\Aire acondicionado\\AireAcondicionado.mp3\"',1),(5,'Ventilador','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Aire\\Ventilador\\Ventilador.mp3\"',1),(6,'Lluvia','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Agua\\Lluvia\\Lluvia.mp3\"',1),(7,'Rio','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Agua\\Rio\\Rio.mp3\"',1),(8,'Olas','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Agua\\Olas\\Olas.mp3\"',1),(9,'Oceano','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Agua\\Oceano\\Oceano.mp3\"',1),(10,'Goteo','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Agua\\Goteo\\Goteo.mp3\"',1),(11,'Hoguera','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Calido\\Hoguera\\Hoguera.mp3\"',1),(12,'Chimenea','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Calido\\Chimenea\\Chimenea.mp3\"',1),(13,'Secador','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Calido\\Secador\\Secador.mp3\"',1),(14,'Microondas','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Calido\\Microondas\\Microondas.mp3\"',1),(15,'Calefactor','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Calido\\Calefactor\\Calefactor.mp3\"',1),(16,'Bosque','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Salvaje\\Bosque\\Bosque.mp3\"',1),(17,'Jungla','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Salvaje\\Jungla\\Jungla.mp3\"',1),(18,'Sabana','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Salvaje\\Sabana\\Sabana.mp3\"',1),(19,'Fondo marino','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Salvaje\\Fondo Marino\\FondoMarino.mp3\"',1),(20,'Bosque nocturno','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Salvaje\\Bosque Nocturno\\BosqueNocturno.mp3\"',1),(21,'Intrucción 1','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Introduccion\\Introduction 1.txt\"',2),(22,'Intrucción 2','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Introduccion\\Introduction 2.txt\"',2),(23,'Ejercicio 1','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Ejercicios\\Ejercicio 1.txt\"',2),(24,'Ejercicio 2','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Ejercicios\\Ejercicio 2.txt\"',2),(25,'Ejercicio 3','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Ejercicios\\Ejercicio 3.txt\"',2),(26,'Ejercicio 4','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Ejercicios\\Ejercicio 4.txt\"',2),(27,'Alimentación 1','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Alimentaciónes\\Alimentación 1.txt\"',2),(28,'Alimentación 2','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Alimentaciónes\\Alimentación 2.txt\"',2),(29,'Alimentación 3','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Alimentaciónes\\Alimentación 3.txt\"',2),(30,'Alimentación 4','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Alimentaciónes\\Alimentación 4.txt\"',2),(31,'Tecnologia 1','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Tecnologias\\Tecnologia 1.txt\"',2),(32,'Tecnologia 2','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Tecnologias\\Tecnologia 2.txt\"',2),(33,'Tecnologia 3','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Tecnologias\\Tecnologia 3.txt\"',2),(34,'Yoga 1','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Yoga\\Yoga 1.txt\"',2),(35,'Yoga 2','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Yoga\\Yoga 2.txt\"',2),(36,'Yoga 3','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Yoga\\Yoga 3.txt\"',2),(37,'Yoga 4','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Yoga\\Yoga 4.txt\"',2),(38,'Mindfulness 1','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Mindfulness\\Mindfulness 1.txt\"',2),(39,'Mindfulness 2','\"C:\\Users\\JMMel\\OneDrive\\Bureau\\Proyecto-Final-Esplai\\Secciones\\Ayuda\\Mindfulness\\Mindfulness 2.txt\"',2);
/*!40000 ALTER TABLE `medias` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-02 16:14:53
