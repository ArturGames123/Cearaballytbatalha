document.addEventListener("DOMContentLoaded", function () {
    let playerHealth = 100;
    let enemyHealth = 100;

    const playerHealthText = document.getElementById("player-health");
    const enemyHealthText = document.getElementById("enemy-health");
    const battleLog = document.getElementById("battle-log");
    const attackButton = document.getElementById("attack-btn");
    const healButton = document.getElementById("heal-btn");

    function attack() {
        let playerDamage = Math.floor(Math.random() * (15 - 5 + 1)) + 5; // Dano entre 5 e 15
        let enemyDamage = Math.floor(Math.random() * (15 - 5 + 1)) + 5;

        enemyHealth -= playerDamage;
        playerHealth -= enemyDamage;

        if (enemyHealth < 0) enemyHealth = 0;
        if (playerHealth < 0) playerHealth = 0;

        playerHealthText.innerText = playerHealth;
        enemyHealthText.innerText = enemyHealth;

        battleLog.innerText = `🔥 Você causou ${playerDamage} de dano! Ceará_ball_yt causou ${enemyDamage} de dano!`;

        checkGameOver();
    }

    function heal() {
        let healAmount = Math.floor(Math.random() * (20 - 10 + 1)) + 10; // Cura entre 10 e 20
        playerHealth += healAmount;

        if (playerHealth > 100) playerHealth = 100;

        playerHealthText.innerText = playerHealth;
        battleLog.innerText = `💖 Você se curou em ${healAmount} de vida!`;

        enemyAttack();
    }

    function enemyAttack() {
        let enemyDamage = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
        playerHealth -= enemyDamage;

        if (playerHealth < 0) playerHealth = 0;

        playerHealthText.innerText = playerHealth;
        battleLog.innerText += `\n⚔️ Ceará_ball_yt te atacou causando ${enemyDamage} de dano!`;

        checkGameOver();
    }

    function checkGameOver() {
        if (playerHealth === 0) {
            setTimeout(() => alert("😢 Você perdeu!"), 100);
            resetGame();
        } else if (enemyHealth === 0) {
            setTimeout(() => alert("🎉 Você venceu Ceará_ball_yt!"), 100);
            resetGame();
        }
    }

    function resetGame() {
        playerHealth = 100;
        enemyHealth = 100;
        playerHealthText.innerText = playerHealth;
        enemyHealthText.innerText = enemyHealth;
        battleLog.innerText = "";
    }

    attackButton.addEventListener("click", attack);
    healButton.addEventListener("click", heal);
});
