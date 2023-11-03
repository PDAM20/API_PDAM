-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 03 Nov 2023 pada 16.31
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pdam`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20231024141641-create-tb-kelainan.js'),
('20231025110920-create-tb-pelanggan.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_kelainans`
--

CREATE TABLE `tb_kelainans` (
  `id` int(11) NOT NULL,
  `nama_kelainan` varchar(255) DEFAULT NULL,
  `keterangan` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tb_kelainans`
--

INSERT INTO `tb_kelainans` (`id`, `nama_kelainan`, `keterangan`, `createdAt`, `updatedAt`) VALUES
(1, 'rumah kosong', NULL, '2023-11-03 15:19:49', '2023-11-03 15:19:49');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_pelanggans`
--

CREATE TABLE `tb_pelanggans` (
  `id` int(11) NOT NULL,
  `id_kelainan` int(11) DEFAULT NULL,
  `kode_pelanggan` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `air_sl` int(11) DEFAULT NULL,
  `air_habis` int(11) DEFAULT NULL,
  `rayon` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tb_pelanggans`
--

INSERT INTO `tb_pelanggans` (`id`, `id_kelainan`, `kode_pelanggan`, `nama`, `alamat`, `air_sl`, `air_habis`, `rayon`, `createdAt`, `updatedAt`) VALUES
(1001, 1, 'KP001', 'John Doe', 'Jl. Mawar No. 123', 126, 60, 'A1', '0000-00-00 00:00:00', '2023-11-03 15:20:00'),
(1002, NULL, 'KP002', 'Jane Smith', 'Jl. Melati No. 456', 98, 2023, 'A1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1003, NULL, 'KP003', 'Robert Johnson', 'Jl. Dahlia No. 789', 76, 2023, 'A1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1004, NULL, 'KP004', 'Sarah Williams', 'Jl. Anggrek No. 101', 51, 2023, 'A1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1005, NULL, 'KP005', 'Michael Brown', 'Jl. Tulip No. 246', 113, 33, 'A1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1006, NULL, 'KP006', 'Emily Davis', 'Jl. Sakura No. 369', 80, 2023, 'A1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1007, NULL, 'KP007', 'David Miller', 'Jl. Cempaka No. 753', 67, 2023, 'A1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1008, NULL, 'KP008', 'Olivia Garcia', 'Jl. Lily No. 852', 43, 2023, 'A1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1009, NULL, 'KP009', 'William Martinez', 'Jl. Kamboja No. 654', 95, 2023, 'A1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1010, NULL, 'KP010', 'Sophia Rodriguez', 'Jl. Kaktus No. 987', 62, 2023, 'A2', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1011, NULL, 'KP011', 'James Lee', 'Jl. Bunga No. 321', 110, 31, 'A2', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1012, NULL, 'KP012', 'Mia Wilson', 'Jl. Teratai No. 654', 74, 2023, 'A2', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1013, NULL, 'KP013', 'Benjamin Turner', 'Jl. Mawar No. 852', 88, 2023, 'A2', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1014, NULL, 'KP014', 'Ava Walker', 'Jl. Melati No. 741', 56, 2023, 'A6', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1015, NULL, 'KP015', 'Samuel Hill', 'Jl. Dahlia No. 123', 120, 34, 'A6', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1016, NULL, 'KP016', 'Lily King', 'Jl. Anggrek No. 456', 64, 2023, 'A6', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1017, NULL, 'KP017', 'Christopher Brown', 'Jl. Tulip No. 789', 78, 2023, 'A6', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1018, NULL, 'KP018', 'Grace Davis', 'Jl. Sakura No. 101', 50, 2023, 'A6', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1019, NULL, 'KP019', 'Daniel Scott', 'Jl. Cempaka No. 369', 105, 2023, 'A2', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1020, NULL, 'KP020', 'Chloe White', 'Jl. Lily No. 753', 71, 2023, 'A3', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1021, NULL, 'KP021', 'Matthew Allen', 'Jl. Kamboja No. 852', 90, 2023, 'A3', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1022, NULL, 'KP022', 'Harper Green', 'Jl. Kaktus No. 654', 58, 2023, 'A3', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1023, NULL, 'KP023', 'Jackson Lopez', 'Jl. Bunga No. 987', 116, 33, 'A3', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1024, NULL, 'KP024', 'Penelope Perez', 'Jl. Teratai No. 321', 68, 2023, 'A3', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1025, NULL, 'KP025', 'Ethan Taylor', 'Jl. Mawar No. 654', 104, 2023, 'A3', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1026, NULL, 'KP026', 'Isabella Hall', 'Jl. Melati No. 741', 53, 2023, 'A3', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1027, NULL, 'KP027', 'Andrew Adams', 'Jl. Dahlia No. 123', 89, 2023, 'A3', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1028, NULL, 'KP028', 'Mia Young', 'Jl. Anggrek No. 456', 49, 2023, 'A3', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1029, NULL, 'KP029', 'Samuel Turner', 'Jl. Tulip No. 789', 96, 2023, 'A3', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1030, NULL, 'KP030', 'Emily Stewart', 'Jl. Sakura No. 101', 61, 2023, 'A4', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1031, NULL, 'KP031', 'Noah Foster', 'Jl. Cempaka No. 369', 111, 31, 'A4', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1032, NULL, 'KP032', 'Sofia Price', 'Jl. Lily No. 753', 75, 2023, 'A4', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1033, NULL, 'KP033', 'Daniel Rivera', 'Jl. Kamboja No. 852', 84, 2023, 'A4', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1034, NULL, 'KP034', 'Emma Wright', 'Jl. Kaktus No. 654', 57, 2023, 'A4', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1035, NULL, 'KP035', 'William Bell', 'Jl. Bunga No. 321', 95, 2023, 'A4', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1036, NULL, 'KP036', 'Harper Ross', 'Jl. Teratai No. 654', 48, 2023, 'A4', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1037, NULL, 'KP037', 'James Coleman', 'Jl. Mawar No. 852', 102, 2023, 'A4', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1038, NULL, 'KP038', 'Ava Butler', 'Jl. Melati No. 741', 57, 2023, 'A5', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1039, NULL, 'KP039', 'Benjamin Powell', 'Jl. Dahlia No. 123', 75, 2023, 'A5', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1040, NULL, 'KP040', 'Lily Cook', 'Jl. Anggrek No. 456', 43, 2023, 'A5', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1041, NULL, 'KP041', 'Christopher Hayes', 'Jl. Tulip No. 789', 93, 2023, 'A5', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1042, NULL, 'KP042', 'Grace Murphy', 'Jl. Sakura No. 101', 60, 2023, 'A5', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1043, NULL, 'KP043', 'Samuel Griffin', 'Jl. Cempaka No. 369', 106, 30, 'A5', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1044, NULL, 'KP044', 'Chloe Foster', 'Jl. Lily No. 753', 70, 2023, 'A5', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1045, NULL, 'KP045', 'Matthew Simmons', 'Jl. Kamboja No. 852', 88, 2023, 'A5', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1046, NULL, 'KP046', 'Mia Henderson', 'Jl. Kaktus No. 654', 50, 2023, 'A6', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1047, NULL, 'KP047', 'Daniel Perry', 'Jl. Bunga No. 321', 113, 32, 'A6', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1048, NULL, 'KP048', 'Emily Bennett', 'Jl. Teratai No. 654', 72, 2023, 'A6', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1049, NULL, 'KP049', 'Noah Gray', 'Jl. Mawar No. 852', 78, 2023, 'A6', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1050, NULL, 'KP050', 'Sofia Sanders', 'Jl. Melati No. 741', 54, 2023, 'A6', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1051, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-11-03 15:10:04', '2023-11-03 15:10:04');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `tb_kelainans`
--
ALTER TABLE `tb_kelainans`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_pelanggans`
--
ALTER TABLE `tb_pelanggans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kelainan` (`id_kelainan`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_kelainans`
--
ALTER TABLE `tb_kelainans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `tb_pelanggans`
--
ALTER TABLE `tb_pelanggans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1052;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `tb_pelanggans`
--
ALTER TABLE `tb_pelanggans`
  ADD CONSTRAINT `tb_pelanggans_ibfk_1` FOREIGN KEY (`id_kelainan`) REFERENCES `tb_kelainans` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
