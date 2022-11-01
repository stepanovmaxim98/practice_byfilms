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

    if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else{
        console.log('erorr');
        i--;
    }

        
}

if (personalMovieDB.count < 10){
    console.log("посмотрено мало фильмов");

} else if( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');

} else if(personalMovieDB.count >= 30){
    console.log('Вы киноман!')
}else {
    console.log('Ошибка')
}

console.log(personalMovieDB);