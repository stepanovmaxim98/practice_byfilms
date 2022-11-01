const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};


for(let i = 0; i < 2; i++){
    const b = prompt('Один из последних просмотренных фильмов?');
          a = prompt('На сколько оцените его?');

          personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);