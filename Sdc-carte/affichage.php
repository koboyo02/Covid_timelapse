<?php
include_once 'connexion.php';

$date = isset($_POST['recherche']) ? $_POST['recherche'] : NULL;
$departement = isset($_POST['departement']) ? $_POST['departement'] : NULL;
$sql = "SELECT maille_nom, cas_confirmes, deces FROM covid WHERE date = '$date' AND maille_nom = '$departement'";
$stmt = $dbconnexion->query($sql);

try {
    $stmt = $dbconnexion->query($sql);
    if ($stmt === false) {
        die("Erreur");
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
