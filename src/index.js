import './styles.css';
import Inbox from './Inbox.js';
import Menu from './menu.svg';
import Plus from './plus.png';
import Project from './Project.js';
import ProjectDom from './ProjectDom.js';


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
    
    const proj = new ProjectDom();

    const sidebar = document.createElement("div");
    sidebar.setAttribute("class", "sidebar");

    const plus = new Image();
    plus.src = Plus;
    plus.addEventListener("click", () => {
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        main.appendChild(proj.createProject(projects, project.entryList));
    })

    sidebar.appendChild(plus);

    const projects = new Inbox("inbox", "All Projects");
    const testProject = new Project("Test", []);
    //Pushes test project to inbox to display below
    projects.projectArray.push(testProject);
    const project = projects.makeInbox();
    projects.displayProjects(project.entryList);
    sidebar.appendChild(project.inbox);

    const favorites = new Inbox("favorites", "Favorites");
    const favorite = favorites.makeInbox();
    sidebar.appendChild(favorite.inbox);


    const main = document.createElement('div');
    main.setAttribute("class", "main");

   // main.appendChild(proj.displayProject(entry.getAttribute("id")));

   

    content.appendChild(header);
    content.appendChild(sidebar);
    content.appendChild(main);

    
    
    return content;
}

document.body.appendChild(webpage());