// aca se van hacer las requisas

const productList = () => {
    return fetch("http://localhost:3000/products")
        .then((res) => res.json()) //respuesta en formato json
        .catch((err) => console.log(err));// en caso de haber un error, mostrarlo en consola.
};
//-----------------------------

//----------------------




//--------------------------------------------------------------------

const createProduct = (name, price, image) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // tipo de contenido
        },
        body: JSON.stringify({// transformando a string para uqe los navegadores lo puedan leer.
            name,
            price,
            image,

        })
    })
        .then((res) => res.json())//
        .catch((err) => console.log(err));

};

const deleteProducto = async (id) => {
    return await fetch(`"http://localhost:3000/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(response => {
        if (response.ok) {
            console.log("Producto eliminado exitosamente");
            // Eliminar el producto del DOM
            let productToRemove = document.getElementById("id");
            productToRemove.remove();
        } else {
            console.error("Error al eliminar el producto:", response.status);
        }
    })
        .catch(error => console.error("Error:", error));
};







export const servicesProducts = {
    createProduct,
    productList,
    deleteProducto


};

//****************************************************************



