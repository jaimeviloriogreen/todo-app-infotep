const adviseText = document.querySelectorAll(".advise");
const form = document.querySelector(".form");

function errorHandle({error}){
    if(error === "title wrong"){
        inputErrorRemove();
        form.title.focus();
        form.title.classList.add("errorInputs");
        adviseErrorText("title");
        return;
    }

    if(error === "date wrong"){
        inputErrorRemove();
        form.finished.focus();
        form.finished.classList.add("errorInputs");
        adviseErrorText("date");
        return;
    }

    if(error === "description wrong"){
        inputErrorRemove();
        form.description.focus();
        form.description.classList.add("errorInputs");
        adviseErrorText("description");
        return;
    }
    adviseErrorText();
    inputErrorRemove();
    return true;
}
function inputErrorRemove(){
    form.title.classList.remove("errorInputs");
    form.finished.classList.remove("errorInputs");
    form.description.classList.remove("errorInputs");
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

export{
    errorHandle,inputErrorRemove,adviseErrorText
}