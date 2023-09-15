import { request, response } from "express";


const validateTask = (req = request, res = response, next)=>{
    const { title, description, date:finished_at } = req.body;

    const expRegText = /^([a-zA-ZÀ-ÿ]{2,})(\s[a-zA-ZÀ-ÿ]+)*$/g;

    const expRegFecha = /^[0-9]{4}[-](([0]{1}[1-9]{1})|([1]{1}[0-2]{1}))[-](([0]{1}[1-9]{1})|([1-2]{1}[0-9]{1})|([3]{1}[0-1]{1}))$/g;

    expRegText.lastIndex = 0;
    if(!expRegText.test(title)){
        return res.status(406).json({"error":"title wrong"});
    }

    if(!expRegFecha.test(finished_at)){
        return res.status(406).json({"error":"date wrong"});
    }

    expRegText.lastIndex = 0;
    if(!expRegText.test(description)){
        return res.status(406).json({"error":"description wrong"});
    }

    next();
};

export default validateTask;


