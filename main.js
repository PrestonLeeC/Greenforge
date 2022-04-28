import {Animals} from '/modules/animals.js'
//console.log(Animals)


// ======================
//  Set up HTML Elements
// ======================

function clickHandler(event) {
  console.log("Something was clicked.")
}

var grid
var template

// Create Hunt Cards
/*
grid = document.getElementById("Hunt_Grid")
template = document.getElementById("Hunt_Card_Template")
for (const val of Object.values(Animals)) {
  const card = template.content.querySelector("button").cloneNode(true);
  grid.appendChild(card);
  card.addEventListener("click",clickHandler);
  card.firstElementChild.firstElementChild.src = val.icon_url;
} */

// Create Animal Cards
grid = document.getElementById("Animals_Grid")
template = document.getElementById("Animal_Card_Template")

Object.entries(Animals).forEach(animal => {
  const [key, value] = animal;
  const card = template.content.querySelector("button").cloneNode(true);
  card.id = key;
  grid.appendChild(card);
  card.addEventListener("click",clickHandler);
  card.firstElementChild.firstElementChild.src = value.icon_url;
  card.getElementsByTagName('p')[0].innerText = value.name;
  
})

/*
for (const val of Object.values(Animals)) {
  const card = template.content.querySelector("button").cloneNode(true);
  grid.appendChild(card);
  card.addEventListener("click",clickHandler);
  card.firstElementChild.firstElementChild.src = val.icon_url;
  document.getElementsByTagName('p')[0].innerText = val
}
*/

// ===============================================================
//  Refresh the game display as quickly as the browser will allow
// ===============================================================
var progress = 50;

const perfectFrameTime = 1000 / 60;
let deltaTime = 0;
let lastTimestamp = 0;
function update(timestamp) {
  deltaTime = (timestamp - lastTimestamp) / perfectFrameTime;
  lastTimestamp = timestamp;
  
  progress -= (1 * deltaTime);

  if (progress < 0) { progress = 100 }
  
  //document.getElementById(`Jagras-hp`).style.width = `${progress}%`;

  requestAnimationFrame(update);
}

requestAnimationFrame(update);