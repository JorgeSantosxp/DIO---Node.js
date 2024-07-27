//import connectToDatabase from "./utils/database.js";
//connectToDatabase("my-database");

//import * as database from "./utils/database.js";
//database.connectToDatabase("my-database");
//database.disconnectDatabase();


//Descructuring
import { disconnectDatabase, databaseType }  from "./utils/database.js";
import {getDataFromApi} from "./utils/api.js"

getDataFromApi();
disconnectDatabase();

//console.log("hello ecma");