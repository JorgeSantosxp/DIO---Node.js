const { getFullName, productType } = require("./services/products");
const products = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main () {
    console.log("Carrinho de compras:");

    getFullName("1", "teclado");
    products.getFullName("1", "teclado");

    // product.getFullName("408", "mousepad");
    // product.getFullName("508", "mouse");
    // product.getProductLabel("mousepad");

    // console.log(config.client);

    // product.productType.version

    database.connectToDatabase("my-data");
    // database.disconnectDatabase();
};

main();