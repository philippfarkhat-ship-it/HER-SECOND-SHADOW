// =========================
// HER SECOND SHADOW
// script.js (FIXED)
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

// ===== СТАРТ ИГРЫ =====
function startGame() {
    menu.style.display = "none";
    nextScene();
}

// ===== СЦЕНЫ =====
function nextScene() {

    choices.innerHTML = "";

    switch (scene) {

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

            addChoice("Обернуться", lookBack);
            addChoice("Идти дальше", walkAway);
            break;

        default:
            textBox.innerText = "Конец демо.";
            break;
    }
}

// ===== КНОПКИ ВЫБОРА =====
function addChoice(text, action) {
    const button = document.createElement("button");
    button.innerText = text;
    button.onclick = action;
    choices.appendChild(button);
}

// ===== ВЫБОР 1 =====
function lookBack() {
    insanity += 10;
    updateInsanity();

    nameBox.innerText = "";
    textBox.innerText =
        "Позади никого нет. Но ощущение чужого взгляда стало только сильнее.";

    scene++;
    setTimeout(nextScene, 2000);
}

// ===== ВЫБОР 2 =====
function walkAway() {
    insanity += 5;
    updateInsanity();

    nameBox.innerText = "";
    textBox.innerText =
        "Ты ускоряешь шаг, стараясь не думать об этом.";

    scene++;
    setTimeout(nextScene, 2000);
}

// ===== БЕЗУМИЕ =====
function updateInsanity() {

    if (insanity > 100) insanity = 100;

    fill.style.width = insanity + "%";

    if (insanity >= 100) {
        gameOver();
    }
}

// ===== КОНЕЦ ИГРЫ =====
function gameOver() {
    document.body.innerHTML = `
    <div style="
        width:100vw;
        height:100vh;
        background:black;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:40px;
        text-align:center;
    ">
        ВЫ СОШЛИ С УМА
    </div>
    `;
}

// ===== ПОДКЛЮЧЕНИЕ КНОПКИ СТАРТА =====
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startBtn").addEventListener("click", startGame);

    document.getElementById("textbox").onclick = function () {
        if (scene > 1) {
            nextScene();
        }
    };
});