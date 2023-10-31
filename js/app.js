let initMovies = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather2", year: 1974 },
    { title: "The Dark knight", year: 2008 }
]

let movieList = new MovieList('list', initMovies);

function searchClick() {
    let formelements = document.getElementById("form-list-control").elements;
    let text = formelements["search-string"].value;
    movieList.search(text);
}

function a2zClick() {
    movieList.sortAZZ();
}

function z2aClick() {
    movieList.sortZAA();
}

// Add form
function addClick() {
    let formelements = document.getElementById("form-add").elements;
    let title = formelements["title"].value;
    let year = formelements["year"].value;
    movieList.add(title, parseInt(year));
    // clear the input
    formelements.title.value = "";
    formelements.year.value = "";
}

// update form
function updateClick() {
    let formelements = document.getElementById("form-update").elements;
    let index = formelements["index"].value - 1;
    let title = formelements["title"].value;
    let year = formelements["year"].value;
    movieList.add(index, title, parseInt(year));
    // clear the input
    formelements.index.value = "";
    formelements.title.value = "";
    formelements.year.value = "";
}


// delete form
function deleteClick() {
    let formelements = document.getElementById("form-delete").elements;
    let index = formelements["index"].value;
    index = parseInt(index) - 1; // -1 is to match array indexing
    movieList.delete(index);
    formelements.index.value = "";
}


// JavaScript for tabs
// function openForm()
// Take 2 parameters, and even and an action
// Returns nothing
function openFrom(evt, action) {
    let i, tabContent, tablinks;
    tabContent = document.getElementsByClassName('tabContent');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    // get All elements with the class name of tablinks 
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        // replace classname active with"
        tablinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add the active class to the button that opened the tab.
    document.getElementById(action).style.display = 'block';
    evt.currentTarget.className = ' active';
}

// Open a Tab by default
document.getElementById('defaultOpen').click();