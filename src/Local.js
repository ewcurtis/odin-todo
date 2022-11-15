class Local {
    //detects whether or not storage is available
    static storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }

    static populateArray(array) {
        localStorage.setItem('projectArray', array);
        
    }

    static populateFavorites(array) {
        localStorage.setItem('favoritesArray', array);
    }

    static updateArrays(project) {
        const projectArray = JSON.parse(localStorage.getItem("projectArray"));
                    for (let i = 0; i < projectArray.length; i++) {
                        if (projectArray[i].id === project.id) {
                            projectArray[i] = project;
                            Local.populateArray(JSON.stringify(projectArray));
                            break;
                        }
                    }

                    if (project.favorited) {
                        const favoritesArray = JSON.parse(localStorage.getItem("favoritesArray"));
                        for (let i = 0; i < favoritesArray.length; i++) {
                            if (favoritesArray[i].id === project.id) {
                                favoritesArray[i] = project;
                                Local.populateFavorites(JSON.stringify(favoritesArray));
                                break;
                            }

                    }
                }
    }
    
}

export default Local;