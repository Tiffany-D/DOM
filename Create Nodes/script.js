//Modify the script.js to create a new <section> with a random background-color for each learners in your promo. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
function randomColorLearners() {
    let random = function () { return Math.floor(Math.random() * 256) }
    return "rgb(" +random() + "," + random() + "," + random()+ ")"
}

const nameOfLearners = ["Antoine Ghysens", "Aurore Remy", "Baptiste Geron", "Batsheba Deepijan", "Bruno Presti", "Fabrice Castrogiovanni", "Fanny Fraiture", "Francis François", "Frederic Van Overmeire", "JC Molhant", "Maxim K.", "Michael Tesfay", "Philippe Meulemans", "Raoni Gillet", "René", "Rouslan Boyko", "Stephane Genet", "Thomas Backers", "Tiffany Dessouroux"];
let article = document.querySelector('article');


for (item of nameOfLearners) {
    let section = document.createElement('section');
    article.appendChild(section);

    let par = document.createElement('p');
    let text = document.createTextNode(item);

    section.appendChild(par);
    par.appendChild(text);


    let randomColor = randomColorLearners;
    section.style.backgroundColor = randomColor();

}

 //If the background is dark the text should be white, if the background is light the text should be black

    const colorPicker = () => {
    let red = rand(225);
    let green = rand(225);
    let blue = rand(225);
    let brightness  =  Math.sqrt((.299 * red * red) + (.587 * green * green) + (.114 * blue * blue));
    return {"color": `rgb(${red}, ${green}, ${blue})`, "brightness": brightness}
}      
    
 // Find a way so that everytime you load the page the order of the elements changes!
     
let shuffleLearners = (nameOfLearners) => {
    for (i = nameOfLearners.length - 1; i >= 0; i--){
        let randomNumber = Math.floor(Math.random() * (i + 1));
        let randomItem = nameOfLearners[randomNumber];

        nameOfLearners[randomNumber] = nameOfLearners[i];
        nameOfLearners[i] = randomItem;
    }
  }
shuffleLearners(nameOfLearners);