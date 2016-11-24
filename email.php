<?php

header('Content-Type: text/html;charset=UTF-8');
$identite = $_POST['idendite'];
$email = $_POST['email'];
$objet = $_POST['objet'];
$message = $_POST['message'];
/*$expediteur = "From: $identite"."\r\n" .
              'Reply-To: lise.p.poirier@gmail.com'."\r\n" .
              'X-Mailer: PHP/' .  phpversion();
mail ($identite, $email, $objet, $message, $expediteur);*/
$expediteur = "From: $email"."\r\n" .
              'X-Mailer: PHP/' .  phpversion();

mail("lise.p.poirier@gmail.com", $objet, $identite."\r\n".$message, $expediteur);
header('Location: http://localhost/lise-poirier.github.io/');
    
?>