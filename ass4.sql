-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 07, 2017 at 02:43 PM
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
  `sendermail` varchar(255) NOT NULL,
  `recievermail` varchar(255) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`id`, `sendermail`, `recievermail`, `message`) VALUES
(1, 'paras chaudhary', 'Paras Chaudhary', 'sgsbvx'),
(2, '', 'Paras Chaudhary', 'm, lm'),
(3, '$_SESSION[name]', 'Paras Chaudhary', 'nkmlkmlkm'),
(4, '$_SESSION[name]', 'Paras Chaudhary', 'mm.,m'),
(5, '$_SESSION[name]', 'Paras Chaudhary', 'sgbsx s'),
(6, '$_SESSION[name]', 'kjbkjnjknkjnkjn', 'sgdbswnrbras'),
(7, '$_SESSION[name]', 'Maknijnjknin', 'knknknk'),
(8, 'pp', 'Maknijnjknin', ''),
(9, 'pp', 'Maknijnjknin', 'nm mk knkjm'),
(10, 'pp', 'Maknijnjknin', 'svwsvd'),
(11, 'pp', 'Maknijnjknin', 'efasd'),
(12, 'pp', 'Maknijnjknin', 'lmlkmk'),
(13, 'pp', 'Paras Chaudhary', 'dbdfbd'),
(14, 'pp', 'kjbkjnjknkjnkjn', 'uhu');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `online` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `email`, `name`, `pass`, `image`, `online`) VALUES
(8, 'parasb10chd@gmail.com', 'pp', '123', 'https://lh6.googleusercontent.com/-TOX1MU9HrO4/AAAAAAAAAAI/AAAAAAAAAzw/ljd1CdKPP8I/s96-c/photo.jpg', 1),
(11, 'paras7735@gmail.com', 'Paras Chaudhary', '', 'https://lh6.googleusercontent.com/-r_GiFHk6K1s/AAAAAAAAAAI/AAAAAAAAAAA/AI6yGXw5YpjKMPZWUErte1t0ppfkC4ML8g/s96-c/photo.jpg', 1),
(33, 'bkjkjbkj', 'kjbkjnjknkjnkjn', '', 'kjnjknnj', 1);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
