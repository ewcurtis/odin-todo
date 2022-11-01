import './styles.css';
import UnfilledStar from './star-four-points-outline.svg';
import Star from './star-four-points.png';
import Menu from './menu.svg';
import Edit from './text-box-edit-outline.png';
import CPlus from './plus-circle.png';
import Plus from './plus.png';


function makeInbox(title, id) {

    const inbox = document.createElement("div");

    const inboxTitle = document.createElement("p");
    inboxTitle.setAttribute("class", "sidebar-header");
    inboxTitle.textContent = title;
    inbox.appendChild(inboxTitle);

    const entryList = document.createElement("div");
    entryList.setAttribute("class", "entryList");
    entryList.setAttribute("id", id);
    inbox.appendChild(entryList);

    return inbox;

}

function webpage() {
    const content = document.createElement("div");
    content.setAttribute("class", "content");

    const header = document.createElement("header");
    header.setAttribute("class", "header");
    const menu = new Image();
    menu.src = Menu;
    menu.setAttribute("class", "header-hamburger");
    header.appendChild(menu);
    const headerP = document.createElement("p");
    headerP.textContent = "To-Do List";
    header.appendChild(headerP);
    
    

    const sidebar = document.createElement("div");
    sidebar.setAttribute("class", "sidebar");

    const plus = new Image();
    plus.src = Plus;
    sidebar.appendChild(plus);

    sidebar.appendChild(makeInbox("All Projects", "inbox"));
    

    const inbox = sidebar.querySelector("#inbox");
    const entryCon = document.createElement("div");
    entryCon.setAttribute("class", "entry-container");
    const entry = document.createElement("button");
    entry.setAttribute("class", "entry");
    entry.textContent = "Test";
    entryCon.appendChild(entry);

    const unfilledStar = new Image();
    unfilledStar.src = UnfilledStar;
    entryCon.appendChild(unfilledStar);
    inbox.appendChild(entryCon);
    

    sidebar.appendChild(makeInbox("High Priority", "high-priority"));
    sidebar.appendChild(makeInbox("Medium Priority", "med-priority"));
    sidebar.appendChild(makeInbox("Low Priority", "low-priority"));
    sidebar.appendChild(makeInbox("Favorites", "favorites"));



    const main = document.createElement('div');
    main.setAttribute("class", "main");

    //Project and tasks dashboard
    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "task-card-container");
    const taskHeader = document.createElement("p");
    taskHeader.setAttribute("class","task-header");
    taskHeader.textContent = "Test";
    taskContainer.appendChild(taskHeader);
    main.appendChild(taskContainer);

    const cPlus = new Image();
    cPlus.src = CPlus;
    taskContainer.appendChild(cPlus);

    const taskCard = document.createElement("div");
    taskCard.setAttribute("class", "task-card");
    taskContainer.appendChild(taskCard);

    const taskButton = document.createElement("button");
    taskButton.setAttribute("class", "task-button");
    taskCard.appendChild(taskButton);

    const taskDesc = document.createElement("div");
    taskDesc.setAttribute("class", "task-desc");
    taskDesc.textContent = "This is a test description.";
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
    taskTools.appendChild(del);
    taskEdit.appendChild(taskTools);


    const pri = document.createElement("p");
    pri.textContent = "Low Priority";
    taskEdit.appendChild(pri);
    taskCard.appendChild(taskEdit);

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
    projInput.setAttribute("placeholder", "Max 25 chars");
    projInput.setAttribute("maxlength", "25");
    projField.appendChild(projInput);

    newProj.appendChild(projField);

    const projButtons = document.createElement("div");
    projButtons.setAttribute("class", "new-proj-buttons");
    const newProjButton = document.createElement("button");
    newProjButton.setAttribute("class", "confirm");
    newProjButton.textContent = "Create Project";
    projButtons.appendChild(newProjButton);

    const cancelProj = document.createElement("button");
    cancelProj.setAttribute("class", "cancel");
    cancelProj.textContent = "Cancel";
    projButtons.appendChild(cancelProj);

    newProj.appendChild(projButtons);



    main.appendChild(newProj);

    //New Task Dashboard



    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(main);
    
    return content;
}

document.body.appendChild(webpage());