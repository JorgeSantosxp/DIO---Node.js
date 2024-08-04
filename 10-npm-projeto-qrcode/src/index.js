import prompt from "prompt";
import mainPronpt from "./prompts/prompt-main.js"
import createPassowrd from "./services/passoword/create.js";
import createQRCode from "./services/qr-code/create.js";


async function main() {
    prompt.get(mainPronpt, async (err, choose) => {
        if(err) console.log(err);

        if(choose.select == 1) await createQRCode(); //if com comando de uma linha
        if(choose.select == 2) await createPassowrd(); //if com comando de uma linha
    });

    prompt.start();
}


main();