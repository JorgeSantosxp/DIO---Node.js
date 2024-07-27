// todas as funcções que lçidam comproduto

const productType = {
    version: "digital",
    tax: "x1",
}

// hidden const
const apiUrl = {
    url: 'www.google.com.br/api',
}

async function getFullName(codeId, productName) {

    console.log( "product: " + codeId + " -- " + productName);
    await doBreakLine();

}

// hidden function
async function doBreakLine() {
    console.log("\n");
}

async function getProductLabel(productName) {
    console.log("Product " + productName);
}

module.exports = {
    getFullName,
    getProductLabel,
    productType,
};