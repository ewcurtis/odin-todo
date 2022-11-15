import UnfilledStar from './star-four-points-outline.svg';
import Star from './star-four-points.png';
import ProjectDom from './ProjectDom.js';
import Local from './Local.js';

class Inbox {

    projectArray = [];
    static favoritesArray = [];

    constructor() {
        
        
    }

    //Makes a new inbox to populate projects. Only is used to create the Projects and Favorites section of the sidebar at the moment
    // * Param: id = the id of the div that houses the new section
    // * Param: title = the header of the new section
    static makeInbox(id, title) {
        
        
        const inbox = document.createElement("div");
    
        const inboxTitle = document.createElement("p");
        inboxTitle.setAttribute("class", "sidebar-header");
        inboxTitle.textContent = title;
        inbox.appendChild(inboxTitle);
    
        const entryList = document.createElement("div");
        entryList.setAttribute("class", "entryList");
        entryList.setAttribute("id", id);
        inbox.appendChild(entryList);
    
        return {inbox: inbox, entryList: entryList};
    
    }

    //Displays a single project in the sidebar
    // * Param: entryList = the Projects section of the sidebar that will be rendered
    // * Param: project = the project to be rendered
    #displayProject(entryList, project) {
        
        const proj = new ProjectDom();

        const entryCon = document.createElement("div");
        entryCon.setAttribute("class", "entry-container");
        entryCon.setAttribute("id", `id${project.id}`);
        const delEntry = document.createElement("span");
        delEntry.setAttribute("class", "del-project");
        delEntry.textContent = "X";
        //Deletes project from sideboard and displays first project in list if applicable. Otherwise it clears the main DOM.
        delEntry.addEventListener("click", () => {
            const main = document.querySelector(".main");
            if (project.favorited) {
                //Removes project from Favorites section of sidebar
                Inbox.favoritesArray.splice(Inbox.favoritesArray.indexOf(project), 1);
            }
            
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
        

        //Adds / removes entry from the favorites section
        star.addEventListener("click", () => {
            if (project.favorited) {  
                star.src = UnfilledStar;
                Inbox.favoritesArray.splice(Inbox.favoritesArray.indexOf(project), 1);
                
                
            } else {
                star.src = Star;
                Inbox.favoritesArray.push(project);
            }

            

            project.favorited = !project.favorited;
            //refreshes current section
            this.displayProjects(entryList);
            

            
        })
        
        
        
    }

    //Renders all projects in the Projects section of the sidebar
    // * Param: entryList = the Projects section of the sidebar that will be rendered
    displayProjects(entryList) {

        while (entryList.firstChild) {
            entryList.removeChild(entryList.firstChild);
        }
        //Populates Projects section of sidebar
        for (let i = 0; i < this.projectArray.length; i++) {
            const project = this.projectArray[i];
            this.#displayProject(entryList, project);

        }

        //Populates Favorites section of sidebar
        this.#displayFavorites(entryList);

        //Sync's localStorage
        if (Local.storageAvailable('localStorage')) {
            Local.populateArray(JSON.stringify(this.projectArray));
            Local.populateFavorites(JSON.stringify(Inbox.favoritesArray));
        }
    }

    //Renders a single favorite entry in the Favorites section of the sidebar
    // * Param: entryList = the entryList from the displayProjects method
    // * Param: project = The project from the Inbox.favoritesArray that will be rendered
    #displayFavorite(entryList, project) {
        const favorites = document.querySelector("#favorites");
        const proj = new ProjectDom();

        const entryCon = document.createElement("div");
        entryCon.setAttribute("class", "entry-container");
        entryCon.setAttribute("id", `id${project.id}`);
        const delEntry = document.createElement("span");
        delEntry.setAttribute("class", "del-project");
        delEntry.textContent = "X";
        //Deletes project from sideboard and displays first project in list if applicable. Otherwise it clears the main DOM.
        delEntry.addEventListener("click", () => {
            const main = document.querySelector(".main");
            //favorites.removeChild(favorites.querySelector(`#id${project.id}`));
            //Removes project from Favorites section of sidebar
            Inbox.favoritesArray.splice(Inbox.favoritesArray.indexOf(project), 1);
            
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
        star.src = Star;
        

        entryCon.appendChild(star);
        favorites.appendChild(entryCon);
        

        //Removes entry from the Favorites and Projects sections
        star.addEventListener("click", () => {
            
            star.src = UnfilledStar;
            Inbox.favoritesArray.splice(Inbox.favoritesArray.indexOf(project), 1);
            
            project.favorited = !project.favorited;
            //refreshes sidebar
            this.displayProjects(entryList);
            

            
        })

    }

    //Renders Favorite entries in Favorites section of the sidebar.
    // * Param: entryList = entryList used in the displayProjects method to render Projects section of the sidebar
    #displayFavorites(entryList) {

        const favorites = document.querySelector("#favorites");
        while (favorites.firstChild) {
            favorites.removeChild(favorites.firstChild);
        }

        //Populates Favorites sidebar
        for (let i = 0; i < Inbox.favoritesArray.length; i++) {
            const favorite = Inbox.favoritesArray[i];
            this.#displayFavorite(entryList, favorite);

        }

    }

}

export default Inbox;