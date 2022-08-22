-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 17 août 2022 à 11:44
-- Version du serveur : 10.4.20-MariaDB
-- Version de PHP : 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `firstbdd`
--

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `UserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `content`, `createdAt`, `UserId`) VALUES
(2, 'Bonjour', '2022-08-17 10:24:47', 13),
(3, 'mange du pain', '2022-08-17 10:24:47', 13),
(4, 'Pizza time', '2022-08-17 10:24:47', 13),
(5, 'salade niçoise ou rien', '2022-08-17 10:24:47', 13),
(6, 'Vive les regex', '2022-08-17 10:24:47', 16),
(7, 'JS logic', '2022-08-17 10:24:47', 16),
(8, 'Coucou', '2022-08-17 10:24:47', 16),
(9, 'Bonsoir', '2022-08-17 10:24:47', 19),
(10, 'Je fais la loi !', '2022-08-17 10:24:47', 19),
(11, 'Ne regarde pas derrière toi.', '2022-08-17 10:24:47', 19),
(12, 'Connaissez vous les trois coquillages?', '2022-08-17 10:24:47', 19),
(13, '42', '2022-08-17 10:24:47', 19),
(14, 'salut', '2022-08-17 10:24:47', 15),
(15, 'mangez 5 fruits et légumes par jour', '2022-08-17 10:24:47', 15);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `fk_userId` (`UserId`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `fk_userId` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
