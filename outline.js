/***Initial Plan***
1. Create a Task class that contains required fields of a task (title, description, duedate, priority) as well as getters and setters.
    May also add field for the section a task belongs to in order to avoid multiple arrays. (will try this first)
    May also add field to determine whether task has been completed.

2. Create a displayTask method that will populate the screen with details about a specific task.
    This data may use a for loop to go through all the items in a Task in case new fields are added later.

3. displayTask may be used in another class that will also contain an array of tasks.
    There may need to be multiple arrays for different groupings of tasks.
    
4. Need a sidebar panel that displays and organizes tasks. May use Inbox, Low, Medium, and High Priority sections to start with.
    Each section should probably be collapsable.
    
5. Create a createTask method that will allow new tasks to be created and added to the specified section. A form popup will
    likey need created for this.

6. Create an editTask method that will allow tasks to be edited. Changes will need to be made in both the display and the
    task object itself.

7. Create a deleteTask method that will remove the task from the display and the appropriate array.

8. Create a completeTask method that will mark the task complete in the appropriate display.

***OPTIONAL IMPLEMENTATIONS***

1. A search bar to locate specific tasks

2. If using the favorites section, provide functionality that will allow tasks to be favorited*/