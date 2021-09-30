//Display the document title in the console
document.title;


//Change the document title to Modifying the DOM
document.title = "Modifying the DOM";

//Using the children method and a for ... of loop, display every children elements of the second child element of your document (display all children elements of the <body>)

for (child of document.body.children) {
    console.log(child);
}

//Change the background color of the body with a random color. (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).

const body = document.querySelector('body');
const hexValues = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const value = document.querySelector('#background');

function changeBodyBackgroundColor() {
    let hex = "#";
    for (i = 0; i < 3; i++){
        const index = Math.floor(Math.random() * hexValues.length)
        hex+= hexValues[index]
    }
    
    body.style.backgroundColor = hex;
}
changeBodyBackgroundColor();