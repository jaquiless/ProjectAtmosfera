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
-- Table structure for table `sections_has_medias`
--

DROP TABLE IF EXISTS `sections_has_medias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sections_has_medias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Sections_id` int NOT NULL,
  `Medias_Id` int NOT NULL,
  PRIMARY KEY (`id`,`Sections_id`,`Medias_Id`),
  KEY `fk_Sections_has_Medias_Medias1_idx` (`Medias_Id`),
  KEY `fk_Sections_has_Medias_Sections_idx` (`Sections_id`),
  CONSTRAINT `fk_Sections_has_Medias_Medias1` FOREIGN KEY (`Medias_Id`) REFERENCES `medias` (`id`),
  CONSTRAINT `fk_Sections_has_Medias_Sections` FOREIGN KEY (`Sections_id`) REFERENCES `sections` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections_has_medias`
--

LOCK TABLES `sections_has_medias` WRITE;
/*!40000 ALTER TABLE `sections_has_medias` DISABLE KEYS */;
INSERT INTO `sections_has_medias` VALUES (16,4,1),(17,4,2),(18,4,3),(19,4,4),(20,4,5),(11,3,6),(12,3,7),(13,3,8),(14,3,9),(15,3,10),(1,1,11),(2,1,12),(3,1,13),(4,1,14),(5,1,15),(6,2,16),(7,2,17),(8,2,18),(9,2,19),(10,2,20),(21,5,21),(22,5,22),(23,5,23),(24,5,24),(25,5,25),(26,5,26),(27,5,27),(28,5,28),(29,5,29),(30,5,30),(31,5,31),(32,5,32),(33,5,33),(34,5,34),(35,5,35),(36,5,36),(37,5,37),(38,5,38),(39,5,39);
/*!40000 ALTER TABLE `sections_has_medias` ENABLE KEYS */;
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
