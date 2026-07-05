// =========================
// HER SECOND SHADOW
// script.js
// =========================

// Элементы
const menu = document.getElementById("menu");
const nameBox = document.getElementById("name");
const textBox = document.getElementById("text");
const choices = document.getElementById("choices");
const fill = document.getElementById("fill");

// Игровые данные
let insanity = 0;
let pills = 5;
let scene = 0;

// Начало игры
function startGame(){

    menu.style.display = "none";

    nextScene();

}

// Следующая сцена
function nextScene(){

    choices.innerHTML = "";

    switch(scene){

        case 0:

            nameBox.innerText = "???";

            textBox.innerText =
            "Сегодня всё кажется обычным... Но кто-то уже наблюдает за тобой.";

            scene++;

        break;

        case 1:

            nameBox.innerText = "Главная героиня";

            textBox.innerText =
            "Странно... Такое чувство, будто за мной кто-то идет.";

            addChoice("Обернуться",lookBack);

            addChoice("Идти дальше",walkAway);

        break;

    }

}

// Создание кнопки выбора
function addChoice(text,action){

    const button=document.createElement("button");

    button.innerText=text;

    button.onclick=action;

    choices.appendChild(button);

}

// Выбор 1
function lookBack(){

    insanity+=10;

    updateInsanity();

    nameBox.innerText="";

    textBox.innerText=
    "Позади никого нет. Но ощущение чужого взгляда стало только сильнее.";

    scene++;

    setTimeout(nextScene,2500);

}

// Выбор 2
function walkAway(){

    insanity+=5;

    updateInsanity();

    nameBox.innerText="";

    textBox.innerText=
    "Ты ускоряешь шаг, стараясь не думать об этом.";

    scene++;

    setTimeout(nextScene,2500);

}

// Обновление шкалы безумия
function updateInsanity(){

    if(insanity>100)
        insanity=100;

    fill.style.width=insanity+"%";

    if(insanity>=100){

        gameOver();

    }

}

// Конец игры
function gameOver(){

    document.body.innerHTML=`

    <div style="
    width:100vw;
    height:100vh;
    background:black;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:60px;
    text-align:center;
    ">

    ВЫ СОШЛИ С УМА

    </div>

    `;

}

// Клик по тексту = продолжить
document.getElementById("textbox").onclick=function(){

    if(scene>1){

        nextScene();

    }

};