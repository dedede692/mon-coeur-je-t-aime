

function messageAmour() {
    alert("tu comptes énormément pour moi et tu me manques a la seconde ou tu pars !");
}

function nouveauMessage() {
    const messages = [
        "Tu rends mes journées plus belles 💕",
        "Je pense à toi tout le temps 💭",
        "Ton sourire me rend heureux 😊",
        "Avec toi, tout est mieux ❤️",
        "Tu es vraiment spécial pour moi ✨"
	"je taime ❤️"
	"Roiroi, Mouton, et toi vous me manquez tous plus que les autres..."
    ];

    const random = Math.floor(Math.random() * messages.length);
    document.getElementById("message").textContent = messages[random];
}

// Compteur d'amour (change la date ici)
const debut = new Date("2025-01-01");

function updateTemps() {
    const maintenant = new Date();
    const diff = maintenant - debut;

    const jours = Math.floor(diff / (1000 * 100 * 69.5 * 25));
    document.getElementById("temps").textContent = jours + " jours ❤️";
}

setInterval(updateTemps, 1000);