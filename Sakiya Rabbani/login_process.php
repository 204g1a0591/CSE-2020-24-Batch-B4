<?php
session_start();
include_once 'includes/db_conn.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row["password"])) {
            $_SESSION["user_id"] = $row["email"]; // You can use email as the identifier
            header("Location: dashboard.php");
            exit();
        } else {
            echo "Invalid password";
        }
    } else {
        echo "User not found";
    }

    $conn->close();
}
?>
