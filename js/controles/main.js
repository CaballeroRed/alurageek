import { servicesProducts } from "../servicios/product-service.js"

const productContainer = document.querySelector("[data-product]");
const form = document.querySelector("[ data-form]");


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
        <button  class="btn-borrar" id="${id}">borrar</button>
    </div>
</a>
     
    `;
    productContainer.appendChild(card);
    return card;
}
//----------------------------------------------

const btnBorrar = document.querySelector(".btn-borrar")
btnBorrar.addEventListener("click", () => {
    const id = btnBorrar.id
    console.log("el click",);
})

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
                    product.image


                )
            )
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


