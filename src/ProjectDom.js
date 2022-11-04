import Edit from './text-box-edit-outline.png';
import CPlus from './plus-circle.png';
import Inbox from './Inbox.js';
import TaskDom from './TaskDom.js';
import Project from './Project.js';

//Makes changes to the DOM in order to display tasks of a project

class ProjectDom {


    //Displays task for a given project
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

    displayProjectData(id="Test") {
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
    
    createProject(inbox, entryList) {
         //New Project Dashboard
        const newProj = document.createElement("div");
        newProj.setAttribute("class", "project-card");

        const projTitle = document.createElement("p");
        projTitle.textContent = "New Project";
        newProj.appendChild(projTitle);

        const projField = document.createElement("div");
        const projLabel = document.createElement("label");
        projLabel.textContent = "Project Name: ";
        projLabel.setAttribute("for", "new-proj");
        projField.appendChild(projLabel);

        const projInput = document.createElement("input");
        projInput.setAttribute("id", "new-proj");
        projInput.setAttribute("placeholder", "Max 13 chars");
        projInput.setAttribute("maxlength", "13");
        projField.appendChild(projInput);
        newProj.appendChild(projField);


        //Project Buttons
        const projButtons = document.createElement("div");
        projButtons.setAttribute("class", "new-buttons");
        const newProjButton = document.createElement("button");
        newProjButton.setAttribute("class", "confirm");
        newProjButton.textContent = "Create Project";
        //Creates new project and adds it to corresponding entryList in the sidebar
        newProjButton.addEventListener("click", () => {
            const project = new Project(projInput.value);
            inbox.projectArray.push(project);
            inbox.displayProjects(entryList);
            const main = document.querySelector(".main");
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            main.appendChild(this.displayProjectData(project.name));
        })
        projButtons.appendChild(newProjButton);

        const cancelProj = document.createElement("button");
        cancelProj.setAttribute("class", "cancel");
        cancelProj.textContent = "Cancel";
        projButtons.appendChild(cancelProj);

        newProj.appendChild(projButtons);
        
        return newProj;

    }
}

export default ProjectDom;