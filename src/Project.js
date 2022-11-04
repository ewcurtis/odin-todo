class Project {
    constructor(name, taskArray=[], favorited=false) {
        this.name = name;
        this.taskArray = taskArray;
        this.favorited = favorited;
    }
}

export default Project;