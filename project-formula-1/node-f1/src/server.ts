import fastify from "fastify";
import { request } from "http";
import cors from "@fastify/cors";

const server = fastify({logger: true});

server.register(cors, {
    origin: "*",
});

const teams = [
    {id: 1, name: "McLaren", base: "Woking, United Kingdom"},
    {id: 2, name: "Mercedes", base: "Brackley, United Kingdom"},
    {id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom"},
    {id: 4, name: "Ferrari", base: "Maranello, Italy"},
    {id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom"},
    {id: 6, name: "Alpine", base: "Enstone, United Kingdom"},
    {id: 7, name: "AlphaTauri", base: "Faenza, Italy"},
    {id: 8, name: "Williams", base: "Grove, United Kingdom"},
    {id: 9, name: "Haas", base: "Kannapolis, United States"},
    {id: 10, name: "Alfa Romeo", base: "Hinwil, Switzerland"}
];


const drivers = [
    {id: 1, name: "Max Verstappen", team: "Red Bull Racing"},
    {id: 2, name: "Lewis Hamilton", team: "Mercedes"},
    {id: 3, name: "Lando Norris", team: "McLaren"},
    {id: 4, name: "Charles Leclerc", team: "Ferrari"},
    {id: 5, name: "George Russell", team: "Mercedes"},
    {id: 6, name: "Carlos Sainz", team: "Ferrari"},
    {id: 7, name: "Sergio Perez", team: "Red Bull Racing"},
    {id: 8, name: "Fernando Alonso", team: "Aston Martin"},
    {id: 9, name: "Lance Stroll", team: "Aston Martin"},
    {id: 10, name: "Esteban Ocon", team: "Alpine"},
    {id: 11, name: "Pierre Gasly", team: "Alpine"},
    {id: 12, name: "Yuki Tsunoda", team: "AlphaTauri"},
    {id: 13, name: "Daniel Ricciardo", team: "AlphaTauri"},
    {id: 14, name: "Valtteri Bottas", team: "Alfa Romeo"},
    {id: 15, name: "Zhou Guanyu", team: "Alfa Romeo"},
    {id: 16, name: "Kevin Magnussen", team: "Haas"},
    {id: 17, name: "Nico Hulkenberg", team: "Haas"},
    {id: 18, name: "Alexander Albon", team: "Williams"},
    {id: 19, name: "Logan Sargeant", team: "Williams"}
];



//controller
server.get("/teams", async(request, response) => {
    response.type("application/json").code(200)
    return { teams };
});

server.get("/drivers", async(request, response)=>{
    response.type("application/json").code(200);
    return { drivers }    
});

interface DriverParams{
    id: string
}

server.get<{Params: DriverParams}>(
    "/drivers/:id", 
    async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if(!driver){
        response.type("application/json").code(404);
        return { messege: "Driver Not Found"};
    }else{
        response.type("application/json").code(200);
        return { driver };
    }
})


server.listen({port: 3333}, ()=> {
    console.log("server init");
});
