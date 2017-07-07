-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2017 at 05:18 PM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ass4`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id` int(11) NOT NULL,
  `sender` varchar(255) NOT NULL,
  `reciever` varchar(255) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`id`, `sender`, `reciever`, `message`) VALUES
(16, 'pp', 'kjbkjnjknkjnkjn', 'nkjno'),
(17, 'kjbkjnjknkjnkjn', 'pp', 'bbjhbkjnkjbnkjn'),
(18, 'pp', 'kjbkjnjknkjnkjn', 'lkmlkmkl'),
(19, 'Paras Chaudhary', 'pp', 'nnnkjnkjnjknparas'),
(20, 'pp', 'Paras Chaudhary', 'ppppppp'),
(21, 'jnkjn', 'hghhh', 'ninin'),
(22, 'pp', 'hghhh', 'kjkjnj'),
(23, 'pp', 'hghhh', 'hvhgv'),
(24, 'pp', 'hghhh', ''),
(25, 'hghhh', 'pp', 'dbfgd'),
(26, 'pp', 'kjbkjnjknkjnkjn', 'jnknjk'),
(27, 'pp', 'kjbkjnjknkjnkjn', 'hbhbh'),
(28, 'pp', 'Paras Chaudhary', 'jijimk'),
(29, 'pp', 'Paras Chaudhary', 'jnjn'),
(30, 'pp', 'Paras Chaudhary', 'kjnj'),
(31, 'pp', 'Paras Chaudhary', 'llll'),
(32, 'pp', 'Paras Chaudhary', 'pp'),
(33, 'pp', 'Paras Chaudhary', 'iji'),
(34, 'pp', 'Paras Chaudhary', 'kk'),
(35, 'pp', 'kjbkjnjknkjnkjn', 'pkpkp');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `email`, `name`, `pass`) VALUES
(8, 'parasb10chd@gmail.com', 'pp', '123'),
(11, 'paras7735@gmail.com', 'Paras Chaudhary', ''),
(33, 'bkjkjbkj', 'kjbkjnjknkjnkjn', ''),
(34, 'dd@bfb.yy', 'hghhh', 'rgrg'),
(35, 'bbhjnbjhb@gmail.com', 'jnkjn', 'nkjn');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
