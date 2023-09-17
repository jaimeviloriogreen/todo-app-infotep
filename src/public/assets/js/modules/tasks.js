import { errorHandle } from "./errors.js";
import { renderViewTodo, renderViewDoing, renderViewDone } from "./views.js";

const form = document.querySelector(".form");
const errorAlert = document.querySelector(".error");

async function getTasks(){
    const {href:url} = new URL("get_tasks", location.href);
    
    try {
        const req = await fetch(url, {
            method:"POST", 
            headers:{"Content-Type":"application/json;charset=utf-8"}
        });

        const res = await req.json();

        // console.log(res);
        return res;

    } catch (err) {
        console.log(err.message);
        return err.message;
    }
}
async function saveTask(e){
    e.preventDefault();

    const task = new FormData(form);

    const title = task.get("title");
    const date = task.get("finished");
    const description = task.get("description");

    const {href:url} = new URL("save_task", location.href);
    
    try {
        const req = await fetch(url, {
            method:"POST", 
            headers:{"Content-Type":"application/json;charset=utf-8"},
            body:JSON.stringify({title, description, date})
        });

        const res = await req.json();

        const hasPassed = errorHandle(res);
    

        if(res.error?.name == "SequelizeValidationError"){
            console.log(res.error);
            errorAlert.classList.add("error__visible");
            return;
        }
    

        if(hasPassed) {
            form.reset();
            renderViewTodo();
        };


    } catch (err) {
        console.log(err.message);
    }
}
async function updateTaskStatus(uuid, status){
    const {href:url} = new URL("update_status", location.href);

     const req = await fetch(url, {
            method:"PUT", 
            headers:{"Content-Type":"application/json;charset=utf-8"},
            body:JSON.stringify({uuid, status})
    });
    
    const {updated} = await req.json();
        
    // if(updated >= 1){
    //     renderViewTodo();
    //     renderViewDoing();
    //     renderViewDone();
    // }
}

export{
    getTasks, saveTask, updateTaskStatus
}
