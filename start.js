const buttons = document.querySelectorAll("remove-button");
// const button1 = document.querySelector("button1");
const button1 = document.getElementById("button1");

const paras = document.querySelectorAll("p");
// const para1 = document.querySelector("para1");
const para1 = document.getElementById("para1");



// buttons.addEventListener("click", (p) => {
//     paras.innerText("");
// });

// button1.addEventListener("click", (p) => {
//     para1.textContent("");
// });

button1.addEventListener("click", (e) => {
    para1.textContent = "";
});

// clicks inside container then chec whether it was button
// above works but isnt the best way to do it

const container = document.querySelector("#container");

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-button")) {
       e.target.parentElement.remove();
    }
    
});



// above way shown to me by joel. much better approach !!!!

