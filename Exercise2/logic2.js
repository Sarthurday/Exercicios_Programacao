//Load Initial Item
window.addEventListener("DOMContentLoaded", function(){
    console.log('Pronto para uso!')
})
 

const reviews = [
{
    id: 1,
    name: "Arthur",
    job: "Web-Developer",
    img: "man_1.jpg",
    text: "Como desenvolvedor web, estou realmente impressionado com o site do curso de programação. Os conteúdos são atualizados e muito relevantes para as tendências atuais da indústria. A didática é incrível, facilitando o aprendizado de conceitos complexos. Recomendo fortemente!"
},
{
    id: 2,
    name: "Rachel",
    job: "Back-End Developer",
    img: "woman_1.jpg",
    text: "Como programadora back-end, estou sempre buscando aprimorar minhas habilidades e o site de cursos de programação que encontrei foi incrível! Os módulos de Java são bem estruturados e atualizados, o que me ajudou a ficar por dentro das últimas tendências e melhores práticas. Super recomendo!"
},
{
    id: 3,
    name: "Mark",
    job: "Front-End Developer",
    img: "man_2.jpg",
    text: "Como programador Front-End, estou realmente impressionado com o site de cursos de programação. A abordagem prática envolvendo as linguagens mais usadas no Front-End é muito relevante e os recursos interativos são incríveis. Além disso,  o conteúdo sobre Flutter é particularmente notável. Recomendo fortemente!"
},
{
    id: 4,
    name: "Samantha",
    job: "Web Designer",
    img: "woman_2.jpg",
    text: "Como web designer, estou realmente impressionada com o site de cursos de programação. A interface é intuitiva e os conteúdos são super relevantes para o mercado atual. 10/10!"
}
];
//Select Items

const img = document.getElementById("img-reviewer");
const author = document.getElementById("name-reviewer");
const job = document.getElementById("function-reviewer");
const text = document.getElementById("review-text");

const previousButton =  document.querySelector(".previous-button");
const nextButton = document.querySelector(".foward-button");
const randomButton = document.querySelector(".random-button");

//Set Starting item

let currentItem = 0;

//Load initial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
})

//Show person based on item

function showPerson(personNumber){
    const item = reviews[personNumber];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

//Show next person
previousButton.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }

    showPerson(currentItem);
})

//Show prev person

nextButton.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

randomButton.addEventListener('click', function(){
    function getRandomMax(max){
        return Math.floor(Math.random() * max);
    }
    currentItem = getRandomMax(reviews.length);
    showPerson(currentItem);
})