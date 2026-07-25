// ======================================================
// King of Tortuga - events.js
// ======================================================

const events = [

{
    character: "Styrmand Briggs",

    text: "Et handelsskib sejler alene. Skal vi angribe det?",

    yes: {
        gold: 120,
        food: 20,
        pirateRep: 5,
        spanishRep: -5
    },

    no: {
        morale: -5
    },

    yesLog: "Handelsskibet blev plyndret.",
    noLog: "Besætningen havde håbet på bytte."
},

{
    character: "Kokken Pierre",

    text: "Madlageret rådner. Skal vi købe friske forsyninger i havnen?",

    yes: {
        gold: -40,
        food: 50,
        morale: 5
    },

    no: {
        food: -20,
        morale: -10
    },

    yesLog: "Du købte friske forsyninger.",
    noLog: "Besætningen må spise dårlige rationer."
},

{
    character: "Maria",

    text: "En smugler tilbyder et hemmeligt skattekort. Købe det?",

    yes: {
        gold: -60,
        pirateRep: 5
    },

    no: {
        morale: -2
    },

    yesLog: "Du købte skattekortet.",
    noLog: "Smugleren sejlede videre."
},

{
    character: "Flint",

    text: "En voldsom storm nærmer sig. Søge havn?",

    yes: {
        gold: -20,
        ship: 10
    },

    no: {
        ship: -25,
        fear: 10
    },

    yesLog: "Skibet blev reddet i havnen.",
    noLog: "Stormen beskadigede skibet."
},

{
    character: "Don Alvarez",

    text: "Spanierne tilbyder våbenhvile mod betaling.",

    yes: {
        gold: -100,
        spanishRep: 15
    },

    no: {
        pirateRep: 5,
        spanishRep: -10
    },

    yesLog: "Du accepterede våbenhvilen.",
    noLog: "Krigen fortsætter."
},

{
    character: "Briggs",

    text: "En ung sømand vil slutte sig til besætningen.",

    yes: {
        crew: 1,
        morale: 2
    },

    no: {
        morale: -3
    },

    yesLog: "Et nyt besætningsmedlem kom ombord.",
    noLog: "Sømanden gik sin vej."
}

];
