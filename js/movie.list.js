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
}