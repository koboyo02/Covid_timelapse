<?php
$servname = "localhost";
$dbname = "sdccamps";
$user = "root";
$pass = "13juin94";
$dbconnexion = new PDO("mysql:host={$servname}; dbname={$dbname}", $user, $pass);
$dbconnexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
