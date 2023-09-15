import express from "express";
import cors from "cors";
import router from "./routes/mainRouter.js";

const app = express();
const port = process.env.PORT || 4500;

// Middleware
app.use(express.static("src/public"));
app.use(cors());
app.use(express.json());
app.use(router);

app.get("/*", (req, res)=> res.redirect("/"));
app.listen(port, ()=> console.log(`Running on port ${ port }`));


// Rutas
// await Task.sync();
// const task = Task.build({
//     title:"Aprender Javascript",
//     description:"Javascript es importante para mi como desarrollador", 
//     finished_at: new Date("09-18-2023") // dia-mes-año
// });

// console.log(task);
// Fecha formateada = new Date(task.finished_at.replace(/-/g, '\/')).toLocaleDateString("es-Do")

// Redirecciona al Index.html 