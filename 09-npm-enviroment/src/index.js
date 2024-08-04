import connectToDatabase from "../database/data.js";
// require('dotenv').config(); //para versão do node.js inferior a 20.0

async function main() {
    await connectToDatabase(
        process.env.USERDATABASE, 
        process.env.PASSWORD
    );
}

main();