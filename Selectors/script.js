// Add a title attribute to every element that has the important class, stating This is an important item
const important = document.querySelectorAll('.important');
for (item of important) {
    item.title = "This is an important item";
}

//Select all the imgs tags and loop through them. If they have no important class, turn their display property to none.
const images = document.querySelectorAll("img");
for (item of images) {
    
    if (item.classList.contains("important")) {
        item.style.display = 'none';
    }
}

//Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well.
const paragraph = document.querySelectorAll("p");
for (item of paragraph) {
    if (item.hasAttribute("class")) {
        console.log(item.classList);
    } else {
        item.style.color = changeParaphColor();
        console.log(item);
    }
}

//Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.


function changeParaphColor() {
    let random = function () { return Math.floor(Math.random() * 256) }
    return "rgb(" + random() + "," + random() + "," + random()+ ")"
}



