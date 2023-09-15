const form = document.querySelector(".form");
const adviseText = document.querySelectorAll(".advise");
const inputRadio = document.querySelectorAll(".radio__btn[type=radio]");
const menuRadio = document.querySelectorAll(".menu__radio[type=radio]");
const tasks = document.querySelector(".tasks");


form.addEventListener("submit", saveTask);

async function saveTask(e){
    e.preventDefault();

    const task = new FormData(form);

    const title = task.get("title");
    const date = task.get("finished");
    const description = task.get("description");

    const {href:url} = new URL("save_task", location.href);
    
    const req = await fetch(url, {
        method:"POST", 
        headers:{"Content-Type":"application/json;charset=utf-8"},
        body:JSON.stringify({title, description, date})
    });

    const res = await req.json();

    console.log(res);
    const hasPassed = errorHandle(res);

    if(hasPassed) form.reset();
}
function errorHandle({error}){
    if(error === "title wrong"){
        inputErrorRemove();
        form.title.focus();
        form.title.classList.add("error");
        adviseErrorText("title");
        return;
    }

    if(error === "date wrong"){
        inputErrorRemove();
        form.finished.focus();
        form.finished.classList.add("error");
        adviseErrorText("date");
        return;
    }

    if(error === "description wrong"){
        inputErrorRemove();
        form.description.focus();
        form.description.classList.add("error");
        adviseErrorText("description");
        return;
    }
    adviseErrorText();
    inputErrorRemove();
    return true;
}
function inputErrorRemove(){
    form.title.classList.remove("error");
    form.finished.classList.remove("error");
    form.description.classList.remove("error");
}
function adviseErrorText(element = null){
    adviseText.forEach(item => {
        if(!item.classList.contains("advise__hidden")){
            item.classList.add("advise__hidden");
        }

        if(item.classList.contains(`advise__${element}`)){
            item.classList.remove("advise__hidden");
        }
    })
}

// inputRadio.forEach(input =>{
//     if(input.value === "doing") input.checked = true;
    
//     input.addEventListener("input",getRadioValue)
// });

// function getRadioValue(e){
//     console.log(e.target);
// }


menuRadio.forEach(radio =>{
    // if(radio.value === "doing") radio.checked = true;
    
    radio.addEventListener("input", renderView)
});

function renderView(e){
    const h2 = document.createElement("h2");
    h2.textContent = "render view";
    tasks.insertAdjacentElement("beforeend", h2);
}