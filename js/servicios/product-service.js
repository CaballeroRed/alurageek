// aca se van hacer las requisas
const productList = () => {
    return fetch("http://localhost:3000/products")
        .then((res) => res.json()) //respuesta en formato json 
        .catch((err) => console.log(err));// en caso de haber un error, mostrarlo en consola. 
};

export const servicesProducts = {
    productList,
};