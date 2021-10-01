<?php
include_once "connexion.php";
/*$servname = "localhost";
$dbname = "sdccamps";
$user = "root";
$pass = "13juin94";*/

try {
    /*$dbconnexion = new PDO("mysql:host={$servname}; dbname={$dbname}", $user, $pass);
    $dbconnexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);*/
    $create_table = "CREATE TABLE covid(
            Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            date VARCHAR(30),
            granularite VARCHAR(30),
            maille_code VARCHAR(70),
            maille_nom VARCHAR(70),
            cas_confirmes INT,
            cas_ehpad INT,
            cas_confirmes_ehpad INT,
            cas_possibles_ehpad INT,
            deces INT,
            deces_ehpad INT,
            reanimation INT,
            hospitalises INT,
            nouvelles_hospitalisations INT,
            nouvelles_reanimations INT,
            gueris INT,
            depistes INT,
            source_nom VARCHAR(70),
            source_url VARCHAR(255),
            source_type VARCHAR(255))";
    $dbconnexion->exec($create_table);
    echo 'Table crée !!';
} catch (PDOException $e) {
    echo 'Erreur : ' . $e->getMessage();
}
