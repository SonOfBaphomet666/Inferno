// 'use strict';

// let personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
//         while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//             numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt("Один из последних просмотренных фильмов?", "");
//             let b = prompt("На сколько оцените его?", "");

//             if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log("done")
//             } else {
//                 console.log("Error")
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres:function() {
//         for (let i = 1; i <= 3; i++) {
//             personalMovieDB.genre[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

//             if (genre == '' || genre == null) {
//                 console.log('Вы ввели некорректные данные или не вели их вовсе');
//                 i--;
//             } else {
//             personalMovieDB.genres[i-1] = genre;
//         }
//     }
//     personalMovieDB.genres.forEach((item, i) => {
//         console.log(`Любимый жанр ${i + 1} - это ${item}`);
//     })
// }
// };
// MOVIE THE END

у




