<!DOCTYPE html>
<html>
 
<head>
    <title>SportZone</title>
    <link rel="stylesheet" href="datos.css">
    <link rel="icon" href="logotienda.png">
</head>
 
<body>
    
<section id="logos">
    <img src="img/Adidas_logo.png" alt=""> <img src="img/Nike_logo.png" alt=""> <img id="puma" src="img/Puma_logo.png" alt="">
    </section>
    <section id="info">
        <?php
 
 include 'DB.php';
  if($_SERVER["REQUEST_METHOD"] == "POST"){
        $gorra =  $_POST['Codigo_gorra'];
	    $color = $_POST['Color'];
        $cantidad =  $_POST['Cantidad'];
	    $marca = $_POST['Marca'];
        $pago = $_POST['Pago'];
        $sql = "INSERT INTO parte_superior (Codigo_gorra, Color, Cantidad, Marca, Pago) VALUES ('$gorra','$color','$cantidad','$marca','$pago')";
         
        if(mysqli_query($conn, $sql)){
            echo "<h3>Compra finalizada correctamente.</h3>";
            echo ("\n Codigo_gorra: $gorra<br> Color: $color<br>  Cantidad: $cantidad<br>  Marca: $marca<br>  Pago: $pago<br>  ");
              
        } else{
            echo "ERROR: Hush! Lo siento $sql. "
                . mysqli_error($conn);
        }
    }
        mysqli_close($conn);
        ?>    
        </body>

</html>