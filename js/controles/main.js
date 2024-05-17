import { servicesProducts } from "../servicios/product-service.js"

const productContainer = document.querySelector("[data-product]");


function createGrid(name, price, image, id) {
    const card = document.createElement("div");// creando un div dinamico
    card.classList.add("producto")// asignandole estilo al div creado reciente. 

    card.innerHTML = `<a href="#">
    <div>
        <img class="producto__imagen" src="${image}">
    </div>

    <div class="producto__info">
        <p class="producto__nombre">${name}</p>
        <p class="producto__precio">${price}</p>
        <button onclick="alert('apreto boton')" class="btn-borrar">borrar</button>
    </div>
</a>
     
    `;
    productContainer.appendChild(card);
    return card;
}

const render = async () => {
    try {
        const listaProductos = await servicesProducts.productList();
        console.log(listaProductos);
        listaProductos.forEach(product => { // para cada producto realiza lo siguiente 
            productContainer.appendChild(
                createGrid(
                    product.name,
                    product.price,
                    product.image,
                    product.id

                )
            )
        });
    }
    catch (error) {
        console.log(error)
    }
};
render();

