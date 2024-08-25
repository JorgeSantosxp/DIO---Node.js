import {getBaseEmail} from "./services/email";

async function main(){

    console.log(await getBaseEmail("joão"));
    
    console.log("finalizado");
    console.log("...");

}

main();
