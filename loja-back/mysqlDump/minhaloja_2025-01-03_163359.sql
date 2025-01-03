-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: minhaloja
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `descricao` text NOT NULL,
  `foto` varchar(255) NOT NULL,
  `preco_diario` decimal(10,2) NOT NULL,
  `preco_semanal` decimal(10,2) NOT NULL,
  `preco_quinzenal` decimal(10,2) NOT NULL,
  `preco_mensal` decimal(10,2) NOT NULL,
  `criado_em` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (4,'DJI Mavic 2 Pro\n','O Mavic 2 Pro é o mais avançado drone de câmera da DJI já construído, é indicado para profissionais, fotógrafos aéreos, criadores de conteúdo ou pessoas que tenham experiência ao pilotar drones','1735919374977_Drone-DJI-Mavic-2-Pro.jpg',359.00,399.00,1795.00,5000.00,'2025-01-03 15:49:34'),(5,'DJI Mini 2','Com menos de 249g, o DJI Mini 2 pesa quase o mesmo que uma maça e cabe na palma da mão. Compacto e prático é o seu companheiro de viagem ideal! Possui duração máxima de bateria de 31 minutos, resiste a ventos de até 36km/h e, através do sistema OcuSync 2.0, suporta até 10km de transmissão de vídeo HD.','1735919553149_Mini-2.jpg',359.00,399.00,1795.00,5000.00,'2025-01-03 15:52:33'),(6,'DJI Air 2S\n','Contando com um sensor CMOS de 1”, poderosas funções autônomas e uma estrutura compacta pesando menos de 600 g, o DJI Air 2S é o drone ideal para fotografia aérea em movimento.','1735919666505_1.jpg',399.00,499.00,1995.00,5442.00,'2025-01-03 15:54:26'),(7,'DJI Mavic 2 Pro c/ Smart Controller','O Mavic 2 Pro é o mais avançado drone de câmera da DJI já construído, é indicado para profissionais, fotógrafos aéreos, criadores de conteúdo ou pessoas que tenham experiência ao pilotar drones.','1735919926580_1_(1).jpg',199.00,299.00,1995.00,2442.00,'2025-01-03 15:58:46'),(8,'Drone Mavic PRO','O Mavic Pro da DJI é um drone portátil e poderoso, com estabilizador triaxial e câmera gravando em 4K.','1735920033344_MAVIC5site-scaled.jpg',199.00,299.00,1995.00,2442.00,'2025-01-03 16:00:33'),(9,'DJI Matrice 300 RTK','MATRICE 300 RTK é a mais recente plataforma de drones comerciais da DJI, inspirada em sistemas modernos de aviação. Contando com até 55 minutos de tempo de voo, habilidades avançadas, sistema de detecção e posicionamento em 6 direções e muito mais, o M300 RTK estabeleceu um novo padrão ao reunir inteligência, alto desempenho e confiabilidade sem precedentes.','1735920226660_83755d64d3.png',199.00,299.00,1995.00,2442.00,'2025-01-03 16:03:46'),(10,'Drone DJI FPV','MATRICE 300 RTK é a mais recente plataforma de drones comerciais da DJI, inspirada em sistemas modernos de aviação. Contando com até 55 minutos de tempo de voo, habilidades avançadas, sistema de detecção e posicionamento em 6 direções e muito mais, o M300 RTK estabeleceu um novo padrão ao reunir inteligência, alto desempenho e confiabilidade sem precedentes.','1735920289571_Drone.jpg',599.00,799.00,8995.00,12442.00,'2025-01-03 16:04:49'),(11,'Drone DJI Inspire 1','Com uma construção extremamente resiliente e opção de vôo com dois controladores, a operação do DJI Inspire 1 é relativamente simples. Possui suporte de câmera 4K num cardan estabilizador de três eixos, e uma lente de 15mm inclusa.','1735920426946_1-DRONE-DJI-INSPIRE.png',299.00,299.00,399.00,1442.00,'2025-01-03 16:07:06'),(12,'Drone DJI Inspire 2','Com uma construção extremamente resiliente e opção de vôo com dois controladores, a operação do DJI Inspire 1 é relativamente simples. Possui suporte de câmera 4K num cardan estabilizador de três eixos, e uma lente de 15mm inclusa.','1735920435781_1-DRONE-DJI-INSPIRE.png',299.00,299.00,399.00,1442.00,'2025-01-03 16:07:15'),(13,'Drone DJI Inspire 3','Com uma construção extremamente resiliente e opção de vôo com dois controladores, a operação do DJI Inspire 1 é relativamente simples. Possui suporte de câmera 4K num cardan estabilizador de três eixos, e uma lente de 15mm inclusa.','1735920476133_1-DRONE-DJI-INSPIRE.png',299.00,299.00,399.00,1442.00,'2025-01-03 16:07:56');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `email` varchar(150) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `criado_em` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'João da Silva','joao.silva@email.com','senha123',1,'2025-01-02 19:42:13'),(4,'','','',1,'2025-01-02 19:54:46'),(13,'Well','caca@caca.com','$2b$10$DuKw6Q9sSYq8wSmrKg/rL.C7.dGWwYG1zkqEZfKbZvUCmCpbRYfuW',1,'2025-01-03 18:47:32'),(14,'Teste2','teste22@ddsa.com','$2b$10$wquTb8ES2gTsGv1HBuy7i.nL.f05EiPJWyPHKeOpPhk7UlDQbSlG2',1,'2025-01-03 18:49:08'),(15,'teste3','te@te.com','$2b$10$mt7tRonwf.Ou.tzs6mGQpuVf7E/Rp39dk708kk82TKJjnhX0qX.GC',1,'2025-01-03 18:53:05'),(16,'teste4','test4@gmail.com','$2b$10$5UoLiB3WnYiJqRWP9QMUKukjpxDm6XzMkI0Nz2i5Nu6DAizaSF4hu',1,'2025-01-03 19:17:52');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

--
-- Dumping routines for database 'minhaloja'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-03 16:34:01
