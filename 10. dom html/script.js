const header1 = document.getElementById("h1");
const p = document.getElementsByTagName("p");
const list = document.getElementsByClassName("list");

header1.style.backgroundColor = "green";
p[0].style.color = "blue";
list[0].style.color = "blue";

const list2 = document.querySelector("li:nth-child(2)");
const anchor = document.querySelector("#a a");
list2.style.backgroundColor = "grey";
anchor.style.fontSize = "16px";

document.querySelectorAll('.list').forEach((listItem, index) => {
    listItem.textContent = `List ${index + 1}`;
    listItem.style.fontFamily = 'Arial, sans-serif';
    listItem.style.fontSize = '16px';
    listItem.style.backgroundColor = 'grey';
    listItem.style.color = 'blue';
    listItem.style.padding = '16px';
});
