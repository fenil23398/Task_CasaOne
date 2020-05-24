export const ProductData = [
    {
        productId  : "a10000c",
        productName : "Defghi",
        qty : 3,
        price : 6,
        notes : ''
    },
    {
        productId  : "a10001c",
        productName : "Blue Bags",
        qty : 4,
        price : 12,
        notes : ''
    },
    {
        productId  : "a10002c",
        productName : "Adidas Shooes",
        qty : 2,
        price : 100,
        notes : ''
    }
];

export const deleteProduct = (index) => {
    ProductData.splice(index,1);
    console.log("After Deleting Product Data ",ProductData)
}

export const addProdct = () => {
    let prod = {
        productId : "",
        productName : "",
        qty : "",
        price : "",
        notes : "",
    }
    ProductData = ProductData.push(prod)
    console.log("After Adding data ",ProductData);
}

export const getProducts = () => {
    return ProductData;
}