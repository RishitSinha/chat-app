<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();
ob_start();
date_default_timezone_set('Asia/Kolkata');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ass4";
// $dbname = "sf2017_main";
try
{
    $conn = new PDO("mysql:host={$servername};dbname={$dbname}",$username,$password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);   
}
catch(PDOException $e)
{
    echo $e->getMessage();
    die();
}
require_once "User.php";

//Initialize User Class
require_once "Chat.php";
$chat = new Chat($conn);

$user = new User($conn);



?>