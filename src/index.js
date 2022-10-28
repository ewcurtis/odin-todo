import './styles.css';
import UnfilledStar from './star-four-points-outline.svg';
import Star from './star-four-points.png';
import Menu from './menu.svg';

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

    sidebar.appendChild(makeInbox("Inbox", "inbox"));
    

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



    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(main);
    
    return content;
}

document.body.appendChild(webpage());