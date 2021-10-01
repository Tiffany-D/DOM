//Modify the script.js to create a new <section> with a random background-color for each learners in your promo. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>

function createParagraphForLearners() {
    const learners = ["Antoine Ghysens", "Aurore Remy", "Baptiste Geron", "Batsheba Deepijan", "Bruno Presti", "Fabrice Castrogiovanni", "Fanny Fraiture", "Francis François", "Frederic Van Overmeire", "JC Molhant", "Maxim K.", "Michael Tesfay", "Philippe Meulemans", "Raoni Gillet", "René", "Rouslan Boyko", "Stephane Genet", "Thomas Backers", "Tiffany Dessouroux"];
    let article = document.querySelector('article');
    let section = document.createElement('section');  
    let par = document.createElement('p');
    let text = document.createTextNode(learners);
    par.appendChild(text);
    section.appendChild(par);
    article.appendChild(section); 
       
}
createParagraphForLearners();


function rdmColorLearners() {
    let random = function () { return Math.floor(Math.random() * 256) }
    return "rgb(" + random() + "," + random() + "," + random()+ ")"
}

