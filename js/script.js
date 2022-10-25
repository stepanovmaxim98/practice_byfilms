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
const b = prompt('Один из последних просмотренных фильмов?');
const a = prompt('Один из последних просмотренных фильмов?');
const c = prompt('На сколько оцените его?');
const d = prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);