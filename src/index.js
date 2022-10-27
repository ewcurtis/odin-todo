import './styles.css';

function webpage() {
    const content = document.createElement("div");
    content.setAttribute("class", "content");

    const header = document.createElement("header");
    header.setAttribute("class", "header");
    header.textContent = "To-Do List";

    const sidebar = document.createElement("div");
    sidebar.setAttribute("class", "sidebar");

    const inbox = document.createElement("div");
    inbox.setAttribute("class", "sidebar-header");
    inbox.textContent = "Inbox";

    const entryList = document.createElement("div");
    entryList.setAttribute("class", "entryList");
    const entry = document.createElement("button");
    entry.setAttribute("class", "entry");
    entry.textContent = "Test";
    entryList.appendChild(entry);

    sidebar.appendChild(inbox);
    sidebar.appendChild(entryList);

    const highP = document.createElement("div");
    highP.setAttribute("class", "sidebar-header");
    highP.textContent = "High Priority";
    sidebar.appendChild(highP);

    const medP = document.createElement("div");
    medP.setAttribute("class", "sidebar-header");
    medP.textContent = "Medium Priority";
    sidebar.appendChild(medP);

    const lowP = document.createElement("div");
    lowP.setAttribute("class", "sidebar-header");
    lowP.textContent = "Low Priority";
    sidebar.appendChild(lowP);


    const main = document.createElement('div');
    main.setAttribute("class", "main");



    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(main);
    
    return content;
}

document.body.appendChild(webpage());