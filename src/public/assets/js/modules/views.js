import { getTasks } from "./tasks.js";
import dateHandle from "./date.js";

const tasks = document.querySelector(".tasks");


async function renderView(taskStatus){
    const getAllTasks = await getTasks();
    
    getAllTasks.forEach(({uuid_task, title, description, created_at, finished_at, status}) =>{
        const article = document.createElement("article");
        const divTaskHead = document.createElement("div");
        const labelTaskHead = document.createElement("label");
        const divAction = document.createElement("div");
        const taskTile = document.createElement("span");
        const imgEdit = document.createElement("img");
        const imgDelete = document.createElement("img");
        const inputCheckbox = document.createElement("input");
        const sectionDescription = document.createElement("section");
        const descriptionText = document.createElement("span");
        const descriptionDate = document.createElement("p");
        const dateText = document.createElement("span");
        const dateFinished = document.createElement("span");
        const sectionRadioButtons = document.createElement("section");
        
        const inputRadioTodo = document.createElement("input");
        const labelRadioTodo = document.createElement("label");
        const spanTodoCircle = document.createElement("span");
        const spanTodoSpan = document.createElement("span");
        
        const inputRadioDoing = document.createElement("input");
        const labelRadioDoing = document.createElement("label");
        const spanDoingCircle = document.createElement("span");
        const spanDoingSpan = document.createElement("span");
        
        const inputRadioDone = document.createElement("input");
        const labelRadioDone = document.createElement("label");
        const spanDoneCircle = document.createElement("span");
        const spanDoneSpan = document.createElement("span");

        // Clases
        article.classList.add("task", "todo")
        divTaskHead.className = "task__head";
        labelTaskHead.className = "task__label";
        divAction.className = "task__action";
        taskTile.className = "task_title";
        imgDelete.className = "task__icon";
        imgEdit.className = "task__icon";
        inputCheckbox.className = "task__checkbox";
        sectionDescription.classList.add("task__description", "description");
        descriptionText.className = "description__text";
        descriptionDate.classList.add("description__date", "date");
        dateText.className = "date__text";
        dateFinished.className = "date__finished";
        sectionRadioButtons.classList.add("radio-buttons", "radio");
        
        inputRadioTodo.className = "radio__btn";
        inputRadioDoing.className = "radio__btn";
        inputRadioDone.className = "radio__btn";
        
        labelRadioTodo.className = "radio__label";
        spanTodoCircle.className = "todo__circle";
        spanTodoSpan.className = "todo__span";

        labelRadioDoing.className = "radio__label";
        spanDoingCircle.className = "todo__circle";
        spanDoingSpan.className = "todo__span";

        labelRadioDone.className = "radio__label";
        spanDoneCircle.className = "todo__circle";
        spanDoneSpan.className = "todo__span";

        // Attributes
        inputCheckbox.type = "checkbox";
        inputCheckbox.id = `task-${uuid_task}`;
        imgEdit.src = "assets/icons/edit.svg";
        imgEdit.alt = "edit";
        imgDelete.src = "assets/icons/delete.svg";
        imgDelete.alt = "delete";
        article.dataset.uuid=uuid_task;
        labelTaskHead.htmlFor=`task-${uuid_task}`;
        labelRadioTodo.htmlFor=`todo-${uuid_task}`;
        labelRadioDoing.htmlFor=`doing-${uuid_task}`;
        labelRadioDone.htmlFor=`done-${uuid_task}`;

        inputRadioTodo.type = "radio";
        inputRadioTodo.name = `${uuid_task}`;
        inputRadioTodo.id = `todo-${uuid_task}`;
        inputRadioTodo.value = "todo";
        status === "todo" ? inputRadioTodo.checked = true : inputRadioTodo.checked = false;

        inputRadioDoing.type = "radio";
        inputRadioDoing.name = `${uuid_task}`;
        inputRadioDoing.id = `doing-${uuid_task}`;
        inputRadioDoing.value = "doing";
        status === "doing" ? inputRadioDoing.checked = true : inputRadioDoing.checked = false;

        inputRadioDone.type = "radio";
        inputRadioDone.name = `${uuid_task}`;
        inputRadioDone.id = `done-${uuid_task}`;
        inputRadioDone.value = "done";
        status === "done" ? inputRadioDone.checked = true : inputRadioDone.checked = false;

        // Render
        taskTile.textContent = title;
        descriptionText.textContent = description;
        dateText.textContent = "Finished at:";
        dateFinished.textContent = `${ dateHandle(finished_at) }`;
        spanTodoSpan.textContent = "To Do";
        spanDoingSpan.textContent = "Doing";
        spanDoneSpan.textContent = "Done";

        // Appends
        labelRadioTodo.append(spanTodoCircle, spanTodoSpan);
        labelRadioDoing.append(spanDoingCircle, spanDoingSpan);
        labelRadioDone.append(spanDoneCircle, spanDoneSpan);

        sectionRadioButtons.append(inputRadioTodo, labelRadioTodo,inputRadioDoing, labelRadioDoing, inputRadioDone, labelRadioDone);
        descriptionDate.append(dateText, dateFinished);
        divAction.append(imgEdit, imgDelete);
        labelTaskHead.append(taskTile);
        divTaskHead.append(labelTaskHead, divAction);
        sectionDescription.append(descriptionText, descriptionDate, sectionRadioButtons);
        article.append(divTaskHead, inputCheckbox, sectionDescription);

        if(status == taskStatus) tasks.appendChild(article);
    });
}

async function renderViewTodo(){
    tasks.innerHTML = "";
    renderView("todo");
}
async function renderViewDoing(){
    tasks.innerHTML = "";
    renderView("doing");
}

async function renderViewDone(){
    tasks.innerHTML = "";
    renderView("done");
}



export{
    renderViewTodo,
    renderViewDoing,
    renderViewDone
}