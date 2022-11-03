import Edit from './text-box-edit-outline.png';
import CPlus from './plus-circle.png';
import TaskDom from './TaskDom.js';

//Makes changes to the DOM in order to display tasks of a project

class ProjectDom {

    displayTaskCard(id, description, priority) {
        const taskCard = document.createElement("div");
        taskCard.setAttribute("class", "task-card");
        taskCard.setAttribute("id", id);

        const taskButton = document.createElement("button");
        taskButton.setAttribute("class", "task-button");
        taskCard.appendChild(taskButton);

        const taskDesc = document.createElement("div");
        taskDesc.setAttribute("class", "task-desc");
        taskDesc.textContent = description;
        taskCard.appendChild(taskDesc);

        const taskEdit = document.createElement("div");
        taskEdit.setAttribute("class", "task-edit");

        const taskTools = document.createElement("div");
        taskTools.setAttribute("class", "task-tool")
        const edit = new Image();
        edit.src = Edit;
        taskTools.appendChild(edit);

        const del = document.createElement("p");
        del.textContent = "X";
        del.addEventListener("click", () => {
            del.closest(".task-card-container").removeChild(taskCard);
        })
        taskTools.appendChild(del);
        taskEdit.appendChild(taskTools);


        const pri = document.createElement("p");
        pri.textContent = priority;
        taskEdit.appendChild(pri);
        taskCard.appendChild(taskEdit);

        return taskCard;
    }

    displayProject(id="Test") {
        //Project and tasks dashboard
        const taskContainer = document.createElement("div");
        taskContainer.setAttribute("class", "task-card-container");
        const projHeader = document.createElement("p");
        projHeader.setAttribute("class","proj-header");
        projHeader.textContent = id;
        taskContainer.appendChild(projHeader);

        const cPlus = new Image();
        cPlus.src = CPlus;
        cPlus.addEventListener("click", () => {
            const task = new TaskDom();
            try {
                const parent = taskContainer.closest(".main");
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
                parent.appendChild(task.createTask(id));
            } catch {
                console.log("Well that didn't work");
            }
            
        })
        taskContainer.appendChild(cPlus);
        taskContainer.appendChild(this.displayTaskCard(1, "This is a test description.", "Low Priority"));

       return taskContainer;
    }
}

export default ProjectDom;