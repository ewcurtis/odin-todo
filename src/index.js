import './styles.css';
import Inbox from './Inbox.js';
import Menu from './menu.svg';
import Plus from './plus.png';
import ProjectDom from './ProjectDom.js';
import Local from './Local.js';

//Renders the initial layout of the webpage
function webpage() {
    const content = document.createElement("div");
    content.setAttribute("class", "content");

    const header = document.createElement("header");
    header.setAttribute("class", "header");
    const menu = new Image();
    menu.src = Menu;
    menu.setAttribute("class", "header-hamburger");
    let clicked = false;
    menu.addEventListener("click", () => {
        if (!clicked) {
            sidebar.id += "sidebar-menu";
            main.id += "main-sidebar";
        } else {
            sidebar.id = "";
            main.id = "";
        }
        clicked = !clicked;
    })
    header.appendChild(menu);
    const headerP = document.createElement("p");
    headerP.textContent = "To-Do List";
    header.appendChild(headerP);

    const sidebar = document.createElement("div");
    sidebar.setAttribute("class", "sidebar");

    

    
    
    //const testProject = new Project("Test", []);
    //Pushes test project to inbox to display below
    //projects.projectArray.push(testProject);
    const project = Inbox.makeInbox("inbox", "All Projects");
    const favorites = Inbox.makeInbox("favorites", "Favorites");


    const main = document.createElement('div');
    main.setAttribute("class", "main");


    
    //projects.displayProjects(project.entryList);
    sidebar.appendChild(project.inbox);
    sidebar.appendChild(favorites.inbox);
    

    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(main);

    
    return content;
}

//Renders the data in the sidebar once the outline of the page has been rendered
function populateSidebar() {
    const projects = new Inbox();
    const sidebar = document.querySelector(".sidebar");
    const inbox = document.querySelector("#inbox");
    const main = document.querySelector(".main");
    const proj = new ProjectDom();
    

    if (Local.storageAvailable("localStorage")) {
        if (!localStorage.getItem("projectArray")) {
            Local.populateArray(JSON.stringify(projects.projectArray));
            Local.populateFavorites(JSON.stringify(Inbox.favoritesArray));
            
            
        } else {
            projects.projectArray = JSON.parse(localStorage.getItem("projectArray"));
            Inbox.favoritesArray = JSON.parse(localStorage.getItem("favoritesArray"));
        }
        
    }

    const plus = new Image();
    plus.src = Plus;
    plus.addEventListener("click", () => {
        
        
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        main.appendChild(proj.createProject(projects, inbox));
    })

    sidebar.insertBefore(plus, sidebar.firstChild);

    projects.displayProjects(inbox);

    if (projects.projectArray.length > 0) {
        main.appendChild(proj.displayProjectData(projects.projectArray[0]));
    }

}

document.body.appendChild(webpage());
populateSidebar();

