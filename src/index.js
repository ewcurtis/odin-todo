import './styles.css';

function webpage() {
    const content = document.createElement("div");
    content.setAttribute("class", "content");

    const header = document.createElement("header");
    header.setAttribute("class", "header");
    header.textContent = "To-Do List";

    const sidebar = document.createElement("div");
    sidebar.setAttribute("class", "sidebar");

    const main = document.createElement('div');
    main.setAttribute("class", "main");



    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(main);
    
    return content;
}

document.body.appendChild(webpage());