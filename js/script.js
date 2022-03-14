'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}


let title = '',
    score = '';
for (let i = 0; i < 2; i++) {
    title = prompt('Один из последних просмотренных фильмов?');
    score = prompt('На сколько оцените его?');
    if ( (title !='' || score =='') && (title.length < 50) && (title != null || score != null) ) {
        personalMovieDB.movies[title] = score;
        alert('done');
    } else {
        alert('error');
        i--;
    }
} 

