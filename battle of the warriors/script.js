const thor = {
    name: "Thor",
    hp: 100,
    strength: 12,
    attack: function() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

const zeus = {
    name: "Zeus",
    hp: 100,
    strength: 10,
    attack: function() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

for (let round = 1; round <= 10; round++) {
    console.log(`Round ${round} begins!`);

    let thorAttack = thor.attack();
    zeus.hp -= thorAttack;
    console.log(`Thor attacks Zeus for ${thorAttack} damage. Zeus HP: ${zeus.hp > 0 ? zeus.hp : 0}`);

    let zeusAttack = zeus.attack();
    thor.hp -= zeusAttack;
    console.log(`Zeus attacks Thor for ${zeusAttack} damage. Thor HP: ${thor.hp > 0 ? thor.hp : 0}`);
    
    console.log("--------------------------------");

    if (thor.hp <= 0 || zeus.hp <= 0) {
        break;
    }
}

console.log("Battle Over!");
if (thor.hp > zeus.hp) {
    console.log("🏆 Thor Wins!");
} else if (zeus.hp > thor.hp) {
    console.log("🏆 Zeus Wins!");
} else {
    console.log("🤝 It's a draw!");
}
