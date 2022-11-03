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
    
        return inbox;
    
    }

    
}

export default Inbox;