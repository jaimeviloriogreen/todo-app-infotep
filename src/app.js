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
