//Not a component
//Only holds the data (the texts to type) and one small helper function

//An array(a list) of strings.Each string is one text the player can get
export const passages = [
    "The morning train slid into the station just as the rain began to fall. Passengers hurried across the wet platform, holding newspapers over their heads, while a small dog waited patiently beside a bench for its owner to return with tea.",
    "Learning to type quickly is a lot like learning to ride a bicycle. At first every movement feels awkward and slow, but after enough practice your fingers begin to remember where each letter lives and the words simply flow.",
    "A good programmer breaks a large problem into small pieces and solves them one at a time. Each tiny step is easy to test, and when all the pieces fit together the whole program works better than anyone expected.",
];

//Pick a random passage
// If we pass in the previous message, it is removed from the choices.
//So the player never gets the same text twice in a row
export function pickPassage(previous) {
    const choices = passages.filter((text) => text !== previous);
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}