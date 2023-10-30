let initMovies =[
    {title: "The Shawshank Redemption", year: 1994},
    {title: "The Godfather", year: 1972},
    {title: "The Godfather2", year: 1974},
    {title: "The Dark knight", year: 2008}
]

let movieList = new MovieList('list', initMovies);

function searchClick(){
    let formelements = document.getElementById("form-list-control").elements;
    let text = formelements["search-string"].value;
    movieList.search(text);
}