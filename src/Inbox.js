import UnfilledStar from './star-four-points-outline.svg';
import Star from './star-four-points.png';
import ProjectDom from './ProjectDom.js';

class Inbox {

    projectArray = [];

    constructor(id, title) {
        this.id = id;
        this.title = title;
        
    }

    makeInbox() {
        
        
        const inbox = document.createElement("div");
    
        const inboxTitle = document.createElement("p");
        inboxTitle.setAttribute("class", "sidebar-header");
        inboxTitle.textContent = this.title;
        inbox.appendChild(inboxTitle);
    
        const entryList = document.createElement("div");
        entryList.setAttribute("class", "entryList");
        entryList.setAttribute("id", this.id);
        inbox.appendChild(entryList);
    
        return {inbox: inbox, entryList: entryList};
    
    }

    //Displays a single project in the sidebar
    #displayProject(entryList, project) {
        
        const proj = new ProjectDom();


        const entryCon = document.createElement("div");
        entryCon.setAttribute("class", "entry-container");
        const delEntry = document.createElement("span");
        delEntry.setAttribute("class", "del-project");
        delEntry.textContent = "X";
        //Deletes project from sideboard and displays first project in list if applicable. Otherwise it clears the main DOM.
        delEntry.addEventListener("click", () => {
            const main = document.querySelector(".main");
            this.projectArray.splice(this.projectArray.indexOf(project), 1);
            this.displayProjects(entryList);

            while (main.firstChild !== null) {
                main.removeChild(main.firstChild);
            }
            if (this.projectArray.length > 0) {
                main.appendChild(proj.displayProjectData(this.projectArray[0]));
            }
            
            
        })
        entryCon.appendChild(delEntry);

        const entry = document.createElement("button");
        entry.setAttribute("class", "entry");
        entry.setAttribute("id", project.id);
        entry.textContent = project.name;
        entry.addEventListener("click", () => {
            const main = document.querySelector(".main");
            
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            main.appendChild(proj.displayProjectData(project));
        })
        entryCon.appendChild(entry);

        const star = new Image();
        if (!project.favorited) {  
            star.src = UnfilledStar;
            
        } else {
            star.src = Star;
        }
        
        entryCon.appendChild(star);
        entryList.appendChild(entryCon);
        
    }

    displayProjects(entryList) {

        while (entryList.firstChild) {
            entryList.removeChild(entryList.firstChild);
        }
        for (let i = 0; i < this.projectArray.length; i++) {
            const project = this.projectArray[i];
            this.#displayProject(entryList, project);

        }
    }

}

export default Inbox;