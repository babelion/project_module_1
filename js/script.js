let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let title_1 = prompt('Один из последних просмотренных фильмов?'),
    score_1 = prompt('На сколько оцените его?'),
    title_2 = prompt('Один из последних просмотренных фильмов?'),
    score_2 = prompt('На сколько оцените его?')4


personalMovieDB.movies[title_1] = score_1;
personalMovieDB.movies[title_2] = score_2;

