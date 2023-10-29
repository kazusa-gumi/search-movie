class MovieList {
    constructor(rootId, movies) {
        this.rootId = rootId;
        this.MovieList = movies;
        this.refresh();
    }

    // generate one row
    movieItemString(number, title, year) {
        return `<div class="row">${number}. ${title} (${year})</div>`
    }
    // Look at using create element

    // Generate all rows
    movieItemString(movies) {
        let html = ``;
        for (let i = 0; i < movies.length; i++) {
            let movie = movies[i];
            html = html + this.movieItemString(i + 1, movie.title, movie.year)
        }

        return html
    }

    refresh() {
        let elementString = this.movieItemString(this.MovieList);
        let rootElement = document.getElementById(this.rootId);
        rootElement.innerHTML = elementString;
    }

    // Add a new Movie
    add(title, year) {
        // add a new item to the end of the array
        this.MovieList.push({ title: title, year: year });
        // this.MovieList.push(title, year); this came in, e6 Js.
        // Refresh the view
        this.refresh();
    }

    // Update a movie by index
    update(index, title, year) {
        this.MovieList[index].title = title;
        this.MovieList[index].year = year;
        this.refresh();
    }
    // Delete a movie ny index
    delete(index) {
        this.MovieList.splice(index, 1);
        this.refresh();
    }
    // Sort by Title A - Z
    sortAZZ() {
        this.MovieList.sort(function (a, b) {
            return a.title.localeCompare(b.title);
        })
        this.refresh();
    }
    // Sort by Title Z - A
    sortAZZ() {
        this.MovieList.sort(function (a, b) {
            return b.title.localeCompare(a.title);
        })
        this.refresh();
    }
    // Search by partial title
    search(nameString) {
        let shortList = [];
        for (let movie of this.MovieList) {
            if (movie.title.includes(nameString)) {
                shortList.push(movie)
            }
        }
    }
}