import { servicesProducts } from "../servicios/product-service.js"

const productContainer = document.querySelector("[data-product]");
const form = document.querySelector("[ data-form]");




function createGrid(name, price, image, id) {
    const card = document.createElement("div");// creando un div dinamico
    card.classList.add("producto")// asignandole estilo al div creado reciente. 


    const contenido = `<a href="#">  
    <div>
        <img class="producto__imagen" src="${image}">
    </div>

    <div class="producto__info">
        <p class="producto__nombre">${name}</p>
        <p class="producto__precio">${price}</p>
        <button  class="btn-borrar" id="${id}">borrar</button>
    </div>
</a>
     `;
    card.innerHTML = contenido;




    productContainer.appendChild(card);
    card.dataset.id = id;
    return card;
}
//----------------------------------------------

const produc = document.querySelector("[data-product]");

produc.addEventListener("click", async (evento) => {
    alert("el click funciona");
    let deleteButton = evento.target.className === "btn-borrar";
    if (deleteButton) {
        const producto = evento.target.closest("[data-id]");
        let id = producto.dataset.id;
        servicesProducts
            .deleteProducto(id)
            .then((res) => {
                produc.remove();
                console.log(res);
            })
            .catch((err) => console.log(err));
    }
});
//===========================================================




//----------------------------------
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
            );
        });
    }
    catch (error) {
        console.log(error)
    }
};
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    servicesProducts.createProduct(name, price, image)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
});






render();



