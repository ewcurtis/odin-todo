class Task {
    constructor(id, name, description, duedate, priority, completed=false) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.completed = completed;
    }
}

export default Task;