import Task from "../models/Task.js";
import { request, response } from "express";

const save_task = (req = request, res = response)=>{
    
    const { title, description, date:finished_at } = req.body;

    // const task = Task.build({title, description, finished_at});

    // console.log(task);

    res.json({msg:"saved!"});
}


export{save_task}