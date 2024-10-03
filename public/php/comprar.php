<!DOCTYPE html>
<html>
<head>
    <title>Poductos</title>
    <link rel="stylesheet" href="datos.css">
</head>
<body>

<section id="info">
    <?php
    include 'DB.php';

    $json_data = file_get_contents('../productos.json');
    $productos = json_decode($json_data, true);


    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['id_producto'])) {
        $id = $_POST['id_producto'];
        $cantidad = $_POST['Cantidad']; 
    
        foreach ($productos as $producto) {
            if ($producto['id'] == $id) {
                $nombre = $producto['nombre'];
                $precio = $producto['precio'];

                $sql = "INSERT INTO articulosxpedidos (Nombre, Cantidad, Precio, id_articulo) 
                        VALUES ('$nombre', '$cantidad', '$precio', '$id')";
    
                if (mysqli_query($conn, $sql)) {
                    echo "<h3>Producto '$nombre' insertado exitosamente.</h3>";
                } else {
                    echo "ERROR: No se pudo insertar '$nombre'. " . mysqli_error($conn);
                }
                break;
            }
        }
    }
    mysqli_close($conn);
    ?>

</section>

</body>
</html>
