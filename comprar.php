<!DOCTYPE html>
<html lang="en">
   <head>
      <title>SportZone</title>
	  <link rel="icon" href="logotienda.png">
   </head>
   <body>
    <style>
        body{
    margin: auto;
    background-image: url(estadiofondo.png);
}
#info{
    color: white;
    box-shadow: 3px 0px 3px 2px black;
    border-radius: 37px;
    text-align: center;
    margin-top: 185px;
    margin-inline: 760px;
    padding: 5px;
}
label{
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
#fin{
    font-size: 20px;
}
#logos{
    box-shadow: 3px 0px 3px 2px black;
    background-color: white;
    display: flex;
    justify-content: space-around;
    padding-top: 4px;
    padding-bottom: 9px;
}
#creditos{
    margin-top: 256px;
    padding-top: 1px;
    padding-bottom: 1px;
}
input:focus {
    -moz-box-shadow:0 0 10px 3px rgb(51, 171, 223);
    -webkit-box-shadow:0 0 10px 3px rgb(51, 171, 223);
    box-shadow:0 0 10px 3px rgb(51, 171, 223);
}
.rojo{
    height: 100px;
    float: left;
}
.boca{
    height: 100px;
    float: right;
}
.nombres{
    text-align: center;
}
img{
    margin-top: 5px;
    height: 100px;
}
    </style>
         <form action="insert.php" method="post"> 
		 <section id="info">          
    <p>
        <label for="codigo_camisa">Codigo camisa:</label>
        <input type="text" name="codigo_camisa" id="codigo_camisa">
        </p>
<p>
		<label for="Equipo_Seleccion">Equipo/Seleccion:</label>
		<input type="text" name="Equipo_Seleccion" id="Equipo_Seleccion">
		</p>
<p>
		<label for="Cantidad">Cantidad:</label>
		<input type="text" name="Cantidad" id="Cantidad">
		</p>
<p>
		<label for="Talle">Talle:</label>
		<input type="text" name="Talle" id="Talle">
		</p>
<p>
		<label for="Pago">Costo a pagar:</label>
		<input type="text" name="Pago" id="Pago">
		</p>
       <input id="fin" type="submit" value="Finalizar">
         </form>
		 </section>
		 <section id="creditos">
      <div class="rojo">
         <img src="img/rojo.png" alt="">
      </div>
      <div class="boca">
         <img src="img/boca1.png" alt="">
      </div>
      <div class="nombres">
      <h1>Pagina realizada por:</h1>
      <h1>Lautaro Martinez & Angel Cardozo</h1>
      </div>
      </section>
   </body>
</html>
