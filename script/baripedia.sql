-- MySQL dump 10.13  Distrib 5.5.24, for debian-linux-gnu (i686)
--
-- Host: localhost    Database: baripedia
-- ------------------------------------------------------
-- Server version	5.5.24-0ubuntu0.12.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `baripedia`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `baripedia` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `baripedia`;

--
-- Table structure for table `bar_app`
--

DROP TABLE IF EXISTS `bar_app`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bar_app` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `full_name` (`full_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bar_app`
--

LOCK TABLES `bar_app` WRITE;
/*!40000 ALTER TABLE `bar_app` DISABLE KEYS */;
/*!40000 ALTER TABLE `bar_app` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bar_app_photo`
--

DROP TABLE IF EXISTS `bar_app_photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bar_app_photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_app` int(11) NOT NULL,
  `photo` varchar(200) CHARACTER SET utf8 NOT NULL,
  `description` text NOT NULL,
  `date_upload` varchar(10) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bar_app_photo`
--

LOCK TABLES `bar_app_photo` WRITE;
/*!40000 ALTER TABLE `bar_app_photo` DISABLE KEYS */;
/*!40000 ALTER TABLE `bar_app_photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bar_app_plugin`
--

DROP TABLE IF EXISTS `bar_app_plugin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bar_app_plugin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_plugin` int(11) NOT NULL,
  `date_created` varchar(10) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bar_app_plugin`
--

LOCK TABLES `bar_app_plugin` WRITE;
/*!40000 ALTER TABLE `bar_app_plugin` DISABLE KEYS */;
/*!40000 ALTER TABLE `bar_app_plugin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bar_events_users`
--

DROP TABLE IF EXISTS `bar_events_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bar_events_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event` text,
  `date_log` varchar(10) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bar_events_users`
--

LOCK TABLES `bar_events_users` WRITE;
/*!40000 ALTER TABLE `bar_events_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `bar_events_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bar_plugin`
--

DROP TABLE IF EXISTS `bar_plugin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bar_plugin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `key_name` varchar(12) CHARACTER SET utf8 NOT NULL,
  `full_name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `descripcion` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bar_plugin`
--

LOCK TABLES `bar_plugin` WRITE;
/*!40000 ALTER TABLE `bar_plugin` DISABLE KEYS */;
/*!40000 ALTER TABLE `bar_plugin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bar_user`
--

DROP TABLE IF EXISTS `bar_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bar_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) CHARACTER SET utf8 NOT NULL,
  `password` varchar(32) CHARACTER SET utf8 NOT NULL,
  `full_name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `last_login` varchar(10) CHARACTER SET utf8 NOT NULL,
  `photo` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `date_update` varchar(10) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bar_user`
--

LOCK TABLES `bar_user` WRITE;
/*!40000 ALTER TABLE `bar_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `bar_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-06-20 17:12:07
