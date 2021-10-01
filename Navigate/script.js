//Select the last child of the <ol> tag and put it at the begining of the list
const ol = document.querySelector('ol');
const li = document.querySelector('ol').children;
const lastChild = li[li.length - 1];
ol.insertBefore(lastChild, li[0]);

//Move the <h2> of the third section in the second one and vice-versa
const headings = document.querySelectorAll("h2");
const third = document.getElementById("third");
const second = document.getElementById("second");
headings.replaceChild(third, second);
