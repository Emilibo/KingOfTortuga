// ======================================================
// King of Tortuga - game.js
// Del 1
// ======================================================

// ---------- Game State ----------

const state = {
    day: 1,

    gold: 250,
    food: 120,
    crew: 30,

    morale: 70,
    fear: 20,

    ship: 100,

    pirateRep: 0,
    spanishRep: 0,

    currentEvent: 0
};


// ---------- DOM ----------

const ui = {
    day: document.getElementById("dayCounter"),

    gold: document.getElementById("gold"),
    food: document.getElementById("food"),
    crew: document.getElementById("crew"),

    morale: document.getElementById("morale"),
    fear: document.getElementById("fear"),

    ship: document.getElementById("ship"),

    pirateRep: document.getElementById("pirateRep"),
    spanishRep: document.getElementById("spanishRep"),

    character: document.getElementById("characterName"),
    story: document.getElementById("storyText"),

    yes: document.getElementById("yesBtn"),
    no: document.getElementById("noBtn"),

    log: document.getElementById("log")
};


// ---------- UI ----------

function updateResources() {

    ui.day.textContent = "Dag " + state.day;

    ui.gold.textContent = state.gold;
    ui.food.textContent = state.food;
    ui.crew.textContent = state.crew;

    ui.morale.textContent = state.morale;
    ui.fear.textContent = state.fear;

    ui.ship.textContent = state.ship;

    ui.pirateRep.textContent = state.pirateRep;
    ui.spanishRep.textContent = state.spanishRep;

}


// ---------- Log ----------

function addLog(text){

    const li = document.createElement("li");

    li.textContent =
        "Dag " +
        state.day +
        ": " +
        text;

    ui.log.prepend(li);

}


// ---------- Event ----------

function showEvent(){

    const event = events[state.currentEvent];

    ui.character.textContent = event.character;

    ui.story.textContent = event.text;

}


// ---------- Start ----------

function startGame(){

    if(typeof loadGame === "function"){

        loadGame();

    }

    updateResources();

    showEvent();

}
// ======================================================
// game.js
// Del 2
// ======================================================


// ---------- Valg ----------

function chooseYes() {

    const event = events[state.currentEvent];

    applyChanges(event.yes);

    if (event.yesLog) {
        addLog(event.yesLog);
    }

    nextDay();

}

function chooseNo() {

    const event = events[state.currentEvent];

    applyChanges(event.no);

    if (event.noLog) {
        addLog(event.noLog);
    }

    nextDay();

}


// ---------- Ressourcer ----------

function applyChanges(change) {

    if (!change) return;

    for (const key in change) {

        if (state[key] !== undefined) {

            state[key] += change[key];

        }

    }

    limitResources();

    updateResources();

}


// ---------- Begræns værdier ----------

function limitResources() {

    state.gold = Math.max(0, state.gold);
    state.food = Math.max(0, state.food);
    state.crew = Math.max(0, state.crew);

    state.morale = Math.max(0, Math.min(100, state.morale));
    state.fear = Math.max(0, Math.min(100, state.fear));

    state.ship = Math.max(0, Math.min(100, state.ship));

    state.pirateRep = Math.max(-100, Math.min(100, state.pirateRep));
    state.spanishRep = Math.max(-100, Math.min(100, state.spanishRep));

}


// ---------- Næste dag ----------

function nextDay() {

    state.day++;

    state.food -= Math.max(1, Math.floor(state.crew / 8));

    if (state.food < 0) {

        state.food = 0;

        state.morale -= 10;

    }

    state.currentEvent++;

    if (state.currentEvent >= events.length) {

        state.currentEvent = 0;

    }

    updateResources();

    showEvent();

    if (typeof saveGame === "function") {

        saveGame();

    }

    checkGameOver();

}
// ======================================================
// game.js
// Del 3
// ======================================================


// ---------- Game Over ----------

function checkGameOver() {

    if (state.crew <= 0) {
        alert("Game Over!\n\nDu har mistet hele din besætning.");
        return;
    }

    if (state.ship <= 0) {
        alert("Game Over!\n\nDit skib er sunket.");
        return;
    }

    if (state.morale <= 0) {
        alert("Game Over!\n\nBesætningen gjorde mytteri.");
        return;
    }

}


// ---------- Sejr ----------

function checkVictory() {

    if (
        state.gold >= 5000 &&
        state.pirateRep >= 75
    ) {

        alert(
            "TILLYKKE!\n\n" +
            "Du er blevet Kongen af Tortuga!"
        );

    }

}


// ---------- Knapper ----------

function setupButtons() {

    ui.yes.addEventListener("click", function () {

        chooseYes();

        checkVictory();

    });

    ui.no.addEventListener("click", function () {

        chooseNo();

        checkVictory();

    });

}


// ---------- Start ----------

document.addEventListener("DOMContentLoaded", function () {

    setupButtons();

    startGame();

});
