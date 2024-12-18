<?php
// Konfigurasi koneksi database
$servername = "localhost"; // Ganti dengan nama server database Anda
$username = "root";        // Ganti dengan username database Anda
$password = "";            // Ganti dengan password database Anda
$dbname = "joki_services"; // Ganti dengan nama database Anda

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari formulir
$name = $_POST['name'];
$email = $_POST['email'];
$service = $_POST['service'];
$message = $_POST['message'];

// SQL untuk menyimpan data
$sql = "INSERT INTO orders (name, email, service, message) VALUES ('$name', '$email', '$service', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Pesanan Anda berhasil dikirim!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Tutup koneksi
$conn->close();
?>