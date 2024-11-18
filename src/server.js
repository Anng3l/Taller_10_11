import express from "express";
import router from "./routers/weather_router.js";
//import router from "./routers/weather_router";

//Inicializaciones
const app = express();


//Middleware
    //Establece que los datos intercambiados se manejarán con formato json
app.use(express.json());
    //Dirige al ruteo de "router"
app.use("/lab", router);

//Variables
app.set("port", process.env.port || 3000);


//Router
app.get("/", (req, res) => {
    res.send("Server on");
});




//Exportar variable app
export default app;