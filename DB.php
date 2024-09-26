<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php


    $hostname = "localhost";
    $username = "root";
    $password = "";
    $dbname = "SportZone";


    $conn = mysqli_connect($hostname, $username, $password, $dbname);

    if(!$conn)
    {
        die("Coneccion fallida!" . mysqli_connect_error());
    }
?>
<body>
</html>