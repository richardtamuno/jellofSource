var movies = [
{
    title: "The God's Must be crazy",
    hasWatched: true,
    rating:7
},
{
    title:"The Last airbender",
    hasWatched:false,
    rating: 7
},
{
    title: "Oya dab",
    hasWatched: true,
    rating:7
},
]

for (var i = movies.length; i >= movies.length; i++) {
    if (movies.hasWatched){
        console.log(movies[i].title + movies[i].rating + "I have watched this muvie");
    }
    else{
        console.log(movies[i].title + movies[i].rating + "I have not watched this muvie");
    }
}