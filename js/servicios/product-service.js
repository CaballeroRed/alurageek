// aca se van hacer las requisas
const productList = () => {
    return fetch("http://localhost:3000/products")
        .then((res) => res.json()) //respuesta en formato json 
        .catch((err) => console.log(err));// en caso de haber un error, mostrarlo en consola. 
};



const createProduct = (name, price, image, id) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            image,
            id,
        })
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));

};


export const servicesProducts = {
    createProduct,
    productList

};



