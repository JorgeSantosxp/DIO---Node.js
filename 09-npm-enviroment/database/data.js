async function connectToDatabase(user, password) {
    if(user === process.env.USERDATABASE && password === process.env.PASSWORD) {
        console.log(
            "conexão com banco de dados estabelecida"
        );
    } else {
        console.log(
            "falha de login, não foi possível se conectar ao banco de dados"
        );
    }
}

export default connectToDatabase;

