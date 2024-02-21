let deParam = require("./utility/deParam.js");
let _ = require("lodash");
let $ = require("jquery");
let exercises = require("./exercisesToShowOnIndex.js");
require("./listeners/indexSaveLoadAll.js");

let title = deParam(window.location.search).title;
let allTitles = _.uniq(exercises.map(e=>e.title));
let titles = title? [title] : allTitles;

// display all problems
for (title of titles){
  let outerDiv = document.getElementById('exerciseIndex');
  outerDiv.innerHTML += `<h3 class="probTitle" id="${title}">${title}</h3>`;

  let div = $('<div class="problems"></div>').appendTo('#exerciseIndex');
  let x = exercises.filter((ex) => ex.title == title);

  x.forEach((ex) => {
    div.append(`<a class="exercise-link" id="${ex.name}" href='exercise.html?name=${ex.name}&title=${ex.title}'>${ex.name}</a>`)
    if (localStorage[ex.name] == "true"){
      $(`#${ex.name}`).append('<span class="tick"><b>✓</b></span>');
    }
  });
}

