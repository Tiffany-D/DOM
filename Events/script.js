const _initTime = Date.now()
const section = document.querySelector(".displayedsquare-wrapper");
const body = document.querySelector('body').addEventListener('keypress', changeColor, 'space');

function getElapsedTime() {
 return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function changeColor() {
    let random = function () { return Math.floor(Math.random() * 256) }
    return "rgb(" + random() + "," + random() + "," + random()+ ")"
}  


function clickOnSquare(e) {
  //create div
  const displaySquares = document.createElement('div');
  displaySquares.classList.add("displayedsquare");
  displaySquares.classList.add(e.target.classList[1]);
  section.append(displaySquares);
  //create new li
  const ul = document.querySelector("ul");
  const newLi = document.createElement("li");
  newLi.textContent = `[${getElapsedTime()}] Created a ${e.target.classList[1]} square`;
  ul.append(newLi);
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  
}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
}

