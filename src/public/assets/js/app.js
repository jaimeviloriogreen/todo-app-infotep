import { saveTask, updateTaskStatus } from "./modules/tasks.js";
import { renderViewTodo, renderViewDoing, renderViewDone } from "./modules/views.js";

const form = document.querySelector(".form");

const closeIconAlert = document.querySelector(".error_icon");
const errorAlert = document.querySelector(".error");

const menuRadio = document.querySelectorAll(".menu__radio[type=radio]");
const tasks = document.querySelector(".tasks");

let menuLocation = "";

renderViewTodo();

if(closeIconAlert){
    closeIconAlert.addEventListener("click", (e)=>{
        errorAlert.classList.remove("error__visible");
    })
}

form.addEventListener("submit", saveTask);

tasks.addEventListener("click", (e)=>{
    if(e.target.className === "radio__btn"){
        
        if(menuLocation === "todo") renderViewTodo();
        if(menuLocation === "doing") renderViewDoing();
        if(menuLocation === "done") renderViewDone();
        
        updateTaskStatus(e.target.name, e.target.value);
    }
});


menuRadio.forEach(radio =>{

    if(radio.value === "todo") radio.addEventListener("input", ()=>{
        menuLocation = radio.value;
        renderViewTodo();
    });
    if(radio.value === "doing") radio.addEventListener("input", ()=>{
        menuLocation = radio.value;
        renderViewDoing();
    });
    if(radio.value === "done") radio.addEventListener("input", ()=>{
        menuLocation = radio.value;
        renderViewDone();
    });
});

