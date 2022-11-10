//Makes changes to the DOM in order to display the create/edit task screen

import Task from "./Task";
import ProjectDom from "./ProjectDom";

class TaskDom {
    createTask(project) {

    const proj = new ProjectDom();
    const main = document.querySelector(".main");
    //New Task Dashboard
    const newTask = document.createElement("div");
    newTask.setAttribute("class", "new-task-card");

    const taskTitle = document.createElement("p");
    taskTitle.textContent = "New Task";
    newTask.appendChild(taskTitle);

    //Task Name
    const taskNameField = document.createElement("div");
    const taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Task Name: ";
    taskNameLabel.setAttribute("for", "task-name");
    taskNameField.appendChild(taskNameLabel);

    const taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("id", "task-name");
    taskNameInput.setAttribute("placeholder", "Max 30 chars");
    taskNameInput.setAttribute("maxlength", "30");
    taskNameField.appendChild(taskNameInput);
    newTask.appendChild(taskNameField);

    //Task Due Date
    const taskDueDateField = document.createElement("div");
    const taskDueDateLabel = document.createElement("label");
    taskDueDateLabel.textContent = "Due Date: ";
    taskDueDateLabel.setAttribute("for", "task-due-date");
    taskDueDateField.appendChild(taskDueDateLabel);

    const taskDueDateInput = document.createElement("input");
    taskDueDateInput.setAttribute("id", "task-due-date");
    taskDueDateInput.setAttribute("type", "date");
    taskDueDateField.appendChild(taskDueDateInput);
    newTask.appendChild(taskDueDateField);

    //Task Description
    const taskDescField = document.createElement("div");
    taskDescField.setAttribute("class", "text-area");
    const taskDescLabel = document.createElement("label");
    taskDescLabel.textContent = "Task Description: ";
    taskDescLabel.setAttribute("for", "task-desc");
    taskDescField.appendChild(taskDescLabel);

    const taskDescInput = document.createElement("textArea");
    taskDescInput.setAttribute("id", "task-desc");
    taskDescField.appendChild(taskDescInput);
    newTask.appendChild(taskDescField);

    //Priorities
    const priorities = document.createElement("div");
    priorities.setAttribute("id", "priorities");
    
    //Low
    const low = document.createElement("input");
    low.setAttribute("type", "radio");
    low.setAttribute("checked", "true");
    low.value = "Low Priority";
    low.setAttribute("name", "p");
    priorities.appendChild(low);

    const lowLabel = document.createElement("label");
    lowLabel.setAttribute("for", "low");
    lowLabel.textContent = "Low";
    priorities.appendChild(lowLabel);

    //Medium
    const med = document.createElement("input");
    med.setAttribute("type", "radio");
    med.value = "Medium Priority";
    med.setAttribute("name", "p");
    priorities.appendChild(med);

    const medLabel = document.createElement("label");
    medLabel.setAttribute("for", "medium");
    medLabel.textContent = "Medium";
    priorities.appendChild(medLabel);

    //High
    const high = document.createElement("input");
    high.setAttribute("type", "radio");
    high.value = "High Priority";
    high.setAttribute("name", "p");
    priorities.appendChild(high);

    const highLabel = document.createElement("label");
    highLabel.setAttribute("for", "high");
    highLabel.textContent = "High";
    priorities.appendChild(highLabel);

    newTask.appendChild(priorities);

    //Task Buttons
    const taskButtons = document.createElement("div");
    taskButtons.setAttribute("class", "new-buttons");
    const newTaskButton = document.createElement("button");
    newTaskButton.setAttribute("class", "confirm");
    newTaskButton.textContent = "Create Task";
    //Creates new task and displays it in the project dom
    newTaskButton.addEventListener("click", () => {
        project.taskArray.push(new Task(taskNameInput.value, taskDescInput.value, taskDueDateInput.value,
             document.querySelector("input[name='p']:checked").value));
             while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            main.appendChild(proj.displayProjectData(project));

    })
    taskButtons.appendChild(newTaskButton);

    const cancelTask = document.createElement("button");
    cancelTask.setAttribute("class", "cancel");
    cancelTask.textContent = "Cancel";
    cancelTask.addEventListener("click", () => {
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        main.appendChild(proj.displayProjectData(project));
    })
    taskButtons.appendChild(cancelTask);

    newTask.appendChild(taskButtons);

    return newTask;
    }

    //Allows task to be edited
    editTask(project, task) {

        const proj = new ProjectDom();
        const main = document.querySelector(".main");
        //Edit Task Dashboard
        const newTask = document.createElement("div");
        newTask.setAttribute("class", "new-task-card");

        const taskTitle = document.createElement("p");
        taskTitle.textContent = "Edit Task";
        newTask.appendChild(taskTitle);

        //Task Name
        const taskNameField = document.createElement("div");
        const taskNameLabel = document.createElement("label");
        taskNameLabel.textContent = "Task Name: ";
        taskNameLabel.setAttribute("for", "task-name");
        taskNameField.appendChild(taskNameLabel);

        const taskNameInput = document.createElement("input");
        taskNameInput.setAttribute("id", "task-name");
        taskNameInput.setAttribute("placeholder", "Max 30 chars");
        taskNameInput.setAttribute("maxlength", "30");
        console.log(`date: ${task.dueDate}`);
        taskNameInput.value = task.name;
        taskNameField.appendChild(taskNameInput);
        newTask.appendChild(taskNameField);

        //Task Due Date
        const taskDueDateField = document.createElement("div");
        const taskDueDateLabel = document.createElement("label");
        taskDueDateLabel.textContent = "Due Date: ";
        taskDueDateLabel.setAttribute("for", "task-due-date");
        taskDueDateField.appendChild(taskDueDateLabel);

        const taskDueDateInput = document.createElement("input");
        taskDueDateInput.setAttribute("id", "task-due-date");
        taskDueDateInput.setAttribute("type", "date");
        taskDueDateInput.value = task.dueDate;
        taskDueDateField.appendChild(taskDueDateInput);
        newTask.appendChild(taskDueDateField);

        //Task Description
        const taskDescField = document.createElement("div");
        taskDescField.setAttribute("class", "text-area");
        const taskDescLabel = document.createElement("label");
        taskDescLabel.textContent = "Task Description: ";
        taskDescLabel.setAttribute("for", "task-desc");
        taskDescField.appendChild(taskDescLabel);

        const taskDescInput = document.createElement("textArea");
        taskDescInput.setAttribute("id", "task-desc");
        taskDescInput.value = task.description;
        taskDescField.appendChild(taskDescInput);
        newTask.appendChild(taskDescField);

        //Priorities
        const priorities = document.createElement("div");
        priorities.setAttribute("id", "priorities");
        
        //Low
        const low = document.createElement("input");
        low.setAttribute("type", "radio");
        low.value = "Low Priority";
        low.setAttribute("name", "p");
        priorities.appendChild(low);

        const lowLabel = document.createElement("label");
        lowLabel.setAttribute("for", "low");
        lowLabel.textContent = "Low";
        priorities.appendChild(lowLabel);

        //Medium
        const med = document.createElement("input");
        med.setAttribute("type", "radio");
        med.value = "Medium Priority";
        med.setAttribute("name", "p");
        priorities.appendChild(med);

        const medLabel = document.createElement("label");
        medLabel.setAttribute("for", "medium");
        medLabel.textContent = "Medium";
        priorities.appendChild(medLabel);

        //High
        const high = document.createElement("input");
        high.setAttribute("type", "radio");
        high.value = "High Priority";
        high.setAttribute("name", "p");
        priorities.appendChild(high);

        const highLabel = document.createElement("label");
        highLabel.setAttribute("for", "high");
        highLabel.textContent = "High";
        priorities.appendChild(highLabel);

        switch (task.priority) {
            case "Medium Priority":
                med.setAttribute("checked", "true");
                break;
            case "High Priority":
                high.setAttribute("checked", "true");
                break;
            default:
                low.setAttribute("checked", "true");
        }

        newTask.appendChild(priorities);

        //Task Buttons
        const taskButtons = document.createElement("div");
        taskButtons.setAttribute("class", "new-buttons");
        const confirmEditButton = document.createElement("button");
        confirmEditButton.setAttribute("class", "confirm");
        confirmEditButton.textContent = "Save Changes";
        //Creates new task and displays it in the project dom
        confirmEditButton.addEventListener("click", () => {
            task.name = taskNameInput.value;
            task.description = taskDescInput.value;
            task.dueDate = taskDueDateInput.value;
            task.priority = document.querySelector("input[name='p']:checked").value;

                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                main.appendChild(proj.displayProjectData(project));

        })
        taskButtons.appendChild(confirmEditButton);

        const cancelTask = document.createElement("button");
        cancelTask.setAttribute("class", "cancel");
        cancelTask.textContent = "Cancel";
        cancelTask.addEventListener("click", () => {
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            main.appendChild(proj.displayProjectData(project));
        })
        taskButtons.appendChild(cancelTask);

        newTask.appendChild(taskButtons);

        return newTask;

    }

    //Displays details of a class
    displayTask(project, task) {
        const proj = new ProjectDom();
        const main = document.querySelector(".main");
        //Display Task Dashboard
        const displayTask = document.createElement("div");
        displayTask.setAttribute("class", "display-task-card");

        const closeTask = document.createElement("p");
        closeTask.textContent = "X";
        closeTask.setAttribute("id", "task-close");
        closeTask.addEventListener("click", () => {
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            main.appendChild(proj.displayProjectData(project));
        })
        displayTask.appendChild(closeTask);

        const nameDiv = document.createElement("div");
        const nameLabel = document.createElement("span");
        nameLabel.textContent = "Name: ";
        const name = document.createElement("p");
        name.textContent = task.name;
        nameDiv.appendChild(nameLabel);
        nameDiv.appendChild(name);
        displayTask.appendChild(nameDiv);

        const dateDiv = document.createElement("div");
        const dateLabel = document.createElement("span");
        dateLabel.textContent = "Due date: ";
        const date = document.createElement("p");
        date.textContent = task.dueDate;
        dateDiv.appendChild(dateLabel);
        dateDiv.appendChild(date);
        displayTask.appendChild(dateDiv);

        const descriptionDiv = document.createElement("div");
        const descriptionLabel = document.createElement("span");
        descriptionLabel.textContent = "Description: "
        const description = document.createElement("p");
        description.textContent = task.description;
        descriptionDiv.appendChild(descriptionLabel);
        descriptionDiv.appendChild(description);
        displayTask.appendChild(descriptionDiv);
        
        const priorityDiv = document.createElement("div");
        const priorityLabel = document.createElement("span");
        priorityLabel.textContent = "Priority: ";
        const priority = document.createElement("p");
        const taskP = task.priority.split(" ")[0];
        priority.textContent = taskP;
        priorityDiv.appendChild(priorityLabel);
        priorityDiv.appendChild(priority)
        displayTask.appendChild(priorityDiv);

        return displayTask;
    }
}

export default TaskDom;