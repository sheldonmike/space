<?php

var_dump($_POST);
$name = $_POST["firstname"];
$lastname = $_POST["lastname"];
$email = $_POST["email"];
$spacebox = $_POST["spacebox"];
echo "First Name: " . $firstname . "\n";
echo "Last Name: " . $lastname . "\n";
echo "Email Address: " . $email . "\n";
echo "Why do you love space?" . $spacebox;

?>