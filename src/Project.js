class Project {
    static id = 1;
    constructor(name, taskArray=[], favorited=false) {
        this.name = name;
        this.taskArray = taskArray;
        this.favorited = favorited;
        this.id = Project.id;
        Project.id += 1;
    }
}

export default Project;