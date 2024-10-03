async function cargarProductos() {
    try {
        const response = await fetch('./productos.json');
        if (!response.ok) throw new Error('Error en la respuesta de la red');
        return await response.json();
    } catch (error) {
        console.error('Error cargando los productos:', error);
        return [];
    }
}

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(producto => {
        const productDiv = document.createElement('div');
        productDiv.className = 'col-lg-3 col-md-6 col-sm-12 mb-4';

        productDiv.innerHTML = `
            <div class="card text-center h-100">
                <img src="${producto.imageUrl || 'placeholder.jpg'}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text flex-grow-1">${producto.descripcion}</p>
                    <h6 class="card-text flex-grow-1"><strong>Unidades disponibles: ${producto.stock}</strong></h6>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <strong class="fs-4 mx-auto">$${producto.precio}</strong>
                        <div>
                            <button class="btn btn-outline-primary me-2 p-2 edit-btn" data-id="${producto.id}"><i class="bi bi-pencil"></i></button>
                            <button class="btn btn-outline-danger p-2"><i class="bi bi-trash3-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        productList.appendChild(productDiv);
    });
}

const productState = { products: [] };

cargarProductos().then(products => {
    productState.products = products;
    displayProducts(products);
});

// Función para buscar productos
function searchProducts(query) {
    const filteredProducts = productState.products.filter(product =>
        product.nombre.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
}

// Evento para manejar la búsqueda
document.getElementById('searchInput').addEventListener('input', (event) => {
    searchProducts(event.target.value);
});

// Manejar clic en el botón de edición y eliminación
document.addEventListener('click', async (event) => {
    if (event.target.closest('.edit-btn')) {
        const productId = event.target.closest('.edit-btn').getAttribute('data-id');
        const producto = productState.products.find(p => p.id == productId);

        if (producto) {
            document.getElementById('editNombre').value = producto.nombre;
            document.getElementById('editDescripcion').value = producto.descripcion;
            document.getElementById('editCategoria').value = producto.categoria;
            document.getElementById('editStock').value = producto.stock;
            document.getElementById('editPrecio').value = producto.precio;
            document.getElementById('editId').value = producto.id;

            const modal = new bootstrap.Modal(document.getElementById('editForm'));
            modal.show();
        }
    }

    if (event.target.closest('.btn-outline-danger')) {
        const productId = event.target.closest('.btn-outline-danger').parentElement.querySelector('.edit-btn').getAttribute('data-id');

        if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
            try {
                const response = await fetch(`/Productos/${productId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    alert('Producto eliminado con éxito');
                    productState.products = productState.products.filter(p => p.id != productId);
                    displayProducts(productState.products);
                } else {
                    alert('Error al eliminar el producto. Inténtalo más tarde.');
                }
            } catch (error) {
                alert('Error al eliminar el producto. Por favor, inténtelo más tarde.');
            }
        }
    }
});

document.getElementById('addProductBtn').addEventListener('click', () => {
    const modal = new bootstrap.Modal(document.getElementById('addProductForm'));
    modal.show();
});

document.getElementById('addProductForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nuevoProducto = {
        nombre: document.getElementById('addNombre').value,
        descripcion: document.getElementById('addDescripcion').value,
        categoria: document.getElementById('addCategoria').value,
        stock: document.getElementById('addStock').value,
        precio: document.getElementById('addPrecio').value,
    };

    try {
        const response = await fetch('/Productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoProducto),
        });

        if (response.ok) {
            const newProduct = await response.json();
            productState.products.push(newProduct.Producto);
            displayProducts(productState.products);
            alert('Producto agregado con éxito');

            const modal = bootstrap.Modal.getInstance(document.getElementById('addProductForm'));
            modal.hide();
            document.getElementById('addProductForm').reset();
        } else {
            alert('Error al agregar el producto. Por favor, inténtelo más tarde.');
        }
    } catch (error) {
        alert('Error al agregar el producto. Por favor, inténtelo más tarde.');
    }
});

document.getElementById('editProductForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const updatedProduct = {
        id: document.getElementById('editId').value,
        nombre: document.getElementById('editNombre').value,
        descripcion: document.getElementById('editDescripcion').value,
        categoria: document.getElementById('editCategoria').value,
        stock: document.getElementById('editStock').value,
        precio: document.getElementById('editPrecio').value,
    };

    try {
        const response = await fetch(`/Productos/${updatedProduct.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        });

        if (response.ok) {
            const index = productState.products.findIndex(p => p.id == updatedProduct.id);
            productState.products[index] = updatedProduct; 
            displayProducts(productState.products);
            alert('Producto actualizado con éxito');

            const modal = bootstrap.Modal.getInstance(document.getElementById('editForm'));
            modal.hide();
        } else {
            alert('Error al actualizar el producto. Por favor, inténtelo más tarde.');
        }
    } catch (error) {
        alert('Error al actualizar el producto. Por favor, inténtelo más tarde.');
    }
});
