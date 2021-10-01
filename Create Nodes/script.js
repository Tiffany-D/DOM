//Modify the script.js to create a new <section> with a random background-color for each learners in your promo. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
const body = document.querySelector('body');
const hexValues = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const value = document.querySelector('#background');

function changeColor() {
    let hex = "#";
    for (i = 0; i < 3; i++){
        const index = Math.floor(Math.random() * hexValues.length)
        hex+= hexValues[index]
    }
    
    body.style.backgroundColor = hex;
}
changeColor();

    const learners = ["Antoine Ghysens", "Aurore Remy", "Baptiste Geron", "Batsheba Deepijan", "Bruno Presti", "Fabrice Castrogiovanni", "Fanny Fraiture", "Francis François", "Frederic Van Overmeire", "JC Molhant", "Maxim K.", "Michael Tesfay", "Philippe Meulemans", "Raoni Gillet", "René", "Rouslan Boyko", "Stephane Genet", "Thomas Backers", "Tiffany Dessouroux"];

function createParagraphForLearners() {

    let article = document.querySelector('article');
    let section = document.createElement('section');  
    let par = document.createElement('p');
    let text = document.createTextNode(learners);
    par.appendChild(text);
    section.appendChild(par);
    article.appendChild(section); 
       
}
createParagraphForLearners();