async function cargarProductos() {
  const contenedor = document.getElementById('contenedor2');
  contenedor.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Cargando...</span></div>'; // Spinner

  try {
      const response = await fetch('./productos.json');
      if (!response.ok) {
          throw new Error('Error en la carga del archivo JSON');
      }
      const data = await response.json();
      
      contenedor.innerHTML = ''; 

      data.forEach(producto => {
          if (producto) {
              const productoDiv = document.createElement('div');
              productoDiv.className = 'col-lg-3 col-md-6 col-sm-12 mb-4'

              productoDiv.innerHTML = `
            <div class="card text-center h-100">
                <img src="${producto.imageUrl}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text flex-grow-1">${producto.descripcion}</p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <strong class="fs-4 mx-auto">$${producto.precio}</strong>
                        <div>
                            <a href="#" class="btn btn-outline-primary me-2 p-2"><i class="bi bi-pencil"></i></a>
                            <a href="#" class="btn btn-outline-danger p-2"><i class="bi bi-trash3-fill"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `;
              
              contenedor.appendChild(productoDiv);
          }
      });
  } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
      contenedor.innerHTML = `<div class="alert alert-danger" role="alert">No se pudieron cargar los productos. Intenta de nuevo más tarde.</div>`;
  }
}

cargarProductos();
