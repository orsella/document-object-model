console.log("Hello");

const body = document.querySelector("body");
console.log(body);

const mainTitle = document.querySelector("h1");
console.log(mainTitle);

//changine h1 text
mainTitle.textContent = "New Content";
console.log(mainTitle);

// updating path to an image
// const image = document.querySelector("img");
// image.src = "/images/myimage.jpg";

//adding h3 element to page
const h3 = document.createElement("h3");
h3.textContent = "new h3 element added!";
body.appendChild(h3);

//create list
const list = document.createElement("ul");
list.textContent = "List of animals";
body.appendChild(list);

//add list items
const listItem = document.createElement("li");
listItem.textContent = "cat";
list.appendChild(listItem);

const listItem2 = document.createElement("li");
listItem2.textContent = "dog";
list.appendChild(listItem2);

const listItem3 = document.createElement("li");
listItem3.textContent = "rabbit";
list.appendChild(listItem3);

//remove h1
const h1 = document.querySelector("h1");
h1.remove();
