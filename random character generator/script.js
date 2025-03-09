// 1. Create a Character Object
let character = {
    name: "Hero",
    health: 100
};

// 2. Add a Random Class
const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
character.class = classes[Math.floor(Math.random() * classes.length)];

// 3. Add Randomized Health
character.randomizeHealth = function() {
    this.health = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
};

// 4. Assign a Special Ability
const specialAbilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];
character.specialAbility = specialAbilities[Math.floor(Math.random() * specialAbilities.length)];

// 5. Create a generateCharacter() Function
function generateCharacter(name = null) {
    const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];
    return {
        name: name || names[Math.floor(Math.random() * names.length)],
        class: classes[Math.floor(Math.random() * classes.length)],
        health: Math.floor(Math.random() * (150 - 50 + 1)) + 50,
        specialAbility: specialAbilities[Math.floor(Math.random() * specialAbilities.length)]
    };
}

// 6. Attack Function
function attack(attacker, defender) {
    const damage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    const previousHealth = defender.health;
    defender.health -= damage;

    console.log(`Character ${attacker.name} attacked Character ${defender.name} with ${attacker.specialAbility}. ${defender.name}'s health dropped from ${previousHealth} to ${defender.health}.`);
}

// 7. Generate Multiple Characters
function generateMultipleCharacters(x) {
    const characters = [];
    for (let i = 0; i < x; i++) {
        characters.push(generateCharacter());
    }
    return characters;
}

// Test
const character1 = generateCharacter("Zane");
const character2 = generateCharacter("Elara");

attack(character1, character2);

const party = generateMultipleCharacters(5);
console.dir(party);
