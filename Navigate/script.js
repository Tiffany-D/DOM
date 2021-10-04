//Select the last child of the <ol> tag and put it at the begining of the list
const ol = document.querySelector('ol');
const li = document.querySelector('ol').children;
const lastChild = li[li.length - 1];
ol.insertBefore(lastChild, li[0]);

//Move the <h2> of the third section in the second one and vice-versa
const h2 = document.querySelectorAll("h2");
const secondSection = h2[1].parentNode;
const thirdSection = h2[2].parentNode;
secondSection.insertBefore(h2[2], h2[1]);
thirdSection.insertBefore(h2[1], thirdSection.firstChild);


//Delete the last section from the DOM, we don't need it anyways

const section = document.getElementById("third");
section.remove();