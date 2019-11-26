-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 26, 2019 at 02:54 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `expenses`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `value` text,
  `currency` varchar(45) DEFAULT NULL,
  `date` text,
  `merchant` text,
  `receipts` varchar(45) DEFAULT NULL,
  `comment` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `first` varchar(45) DEFAULT NULL,
  `last` varchar(45) DEFAULT NULL,
  `email` text,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `value`, `currency`, `date`, `merchant`, `receipts`, `comment`, `category`, `first`, `last`, `email`, `name`) VALUES
(38, 'sadsad', 'asds', '222', '', '', '', '', '', '', '', NULL),
(40, 'asdsdsad', '', 'sss', '', '', '', '', '', '', '', 'image.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
