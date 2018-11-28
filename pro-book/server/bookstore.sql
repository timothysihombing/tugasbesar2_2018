-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 24, 2018 at 04:31 PM
-- Server version: 5.7.23-0ubuntu0.18.04.1
-- PHP Version: 7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `book_id` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `author` varchar(30) NOT NULL,
  `image` varchar(100) NOT NULL,
  `synopsis` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`book_id`, `title`, `author`, `image`, `synopsis`) VALUES
(1, 'nota hidup', 'siapa', 'https://vignette.wikia.nocookie.net/naruto/images/c/cb/%C3%8Dcone_Death_Note.png/revision/latest?cb=', 'dbfvdfbv bvadv uav;bkv dan blkjdsjvvkvoro'),
(2, 'buku apa', 'si eta', 'http://3.bp.blogspot.com/-hZhqHcfBKSg/TpxKA-8ffKI/AAAAAAAACY4/4pfiHDHr-58/s1600/a.jpg', 'bkjvndfv  nvbjdfv a ajvadmdmvmdmvmmvdmvdmmdvdvvdvndndv');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `rating` int(10) NOT NULL,
  `comment` text NOT NULL,
  `jumlah` int(20) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `book_id`, `rating`, `comment`, `jumlah`, `time`) VALUES
(1, 1, 1, 4, 'sdavbdv ajvadv djvamvnfvf sdasdvk', 2, '2018-10-22 08:44:44'),
(2, 2, 2, -1, '', 3, '2018-10-22 08:48:29');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(150) NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(15) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `name`, `email`, `password`, `address`, `phone`, `image`) VALUES
(1, 'abi1', 'ilham wahabi', 'abi@gmail.com', '$2y$10$Ms9HJSRNY2Facguw.zIdU.wGT5HoHEg1bsCVbOmzqpxpeD902z1B6', 'di suajjfdbvldfjvcbnc jvnkf, jv', '082361876116', '../images/querybaru.png'),
(2, 'hamdi1', 'hamdi', 'hamdi@gmail.com', '$2y$10$Ms9HJSRNY2Facguw.zIdU.wGT5HoHEg1bsCVbOmzqpxpeD902z1B6', 'idbhaljb nma  coinvj jddsnnd', '082361876117', '../images/querybaru.png'),
(3, 'upi1', 'upi', 'upi@gmail.com', '$2y$10$Ms9HJSRNY2Facguw.zIdU.wGT5HoHEg1bsCVbOmzqpxpeD902z1B6', 'dhjsa hbnndd nd  ejfecnnce  c en cen cen c', '082361876118', '../images/querybaru.png'),
(4, 'hamdi2', 'Hamdi A Z', 'hamdi@hamdi.com', '$2y$10$Ms9HJSRNY2Facguw.zIdU.wGT5HoHEg1bsCVbOmzqpxpeD902z1B6', 'Jl. Cisitu Baru Dalam no. 73 A', '082361876115', '../images/querybaru.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `book_id` (`book_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
