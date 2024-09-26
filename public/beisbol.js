fetch('./productos.json')
    .then(response => response.json())
    .then(data => {
        const productosBeisbol = data.filter(producto => producto.categoria === "Beisbol");

        const contenedor = document.getElementById('productos-container');

        productosBeisbol.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.className = 'col-lg-4 col-md-4 col-sm-4 mb-4';
            productoDiv.innerHTML = `
                 <div class="card text-center" style="width: 19em;">
                   <img src="${producto.imageUrl}" class="card-img-top mb-2" style="box-shadow: 0px 1px 0px 0px rgba(213,213,213,0.90);" alt="">
                    <div class="card-body p-0 " style="height: 180px; padding-bottom: 15px;">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text pb-3">${producto.descripcion}</p>
                        <strong><p class="card-text fs-4">$${producto.precio}</p></strong>
                    </div>
                <a href="#" class="btn btn-primary mb-2 mt-3" style="width: 200px; align-self: center;">Comprar</a>
            </div>`;

            contenedor.appendChild(productoDiv);
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
