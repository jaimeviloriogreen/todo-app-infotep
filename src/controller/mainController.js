import Task from "../models/Task.js";
import { request, response } from "express";

const saveTask = async (req = request, res = response)=>{

    try {
        const { title, description, date:finished_at } = req.body;
   
        await Task.create({title, description, finished_at});

        res.json({msg:"saved!"});

    } catch (error) {
        
        // console.log(error);

        res.json({error});
    }
}

const updateTaskStatus = async(req = request, res = response)=>{
    const { uuid, status } = req.body;
    
    const task = await Task.update({status}, {
        where:{
            uuid_task:uuid
        }
    });

    res.json({updated:task[0]})
}
 
    
const getTasks = async(req = request, res = response)=>{
    const tasks = await Task.findAll();
    res.json(tasks);
}


export{saveTask, getTasks, updateTaskStatus}