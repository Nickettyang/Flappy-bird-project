document.addEventListener("DOMContentLoaded", () => {
  const bird = document.querySelector(".bird");
  const gameDisplay = document.querySelector(".game-container");

  let birdBottom = 200;
  let birdLeft = 200;
  const gravity = 2;
  let isGameOver = false;
  
  function startGame() {
    if (!isGameOver) {
      // Apply gravity
      birdBottom -= gravity;
      // Update the bird position
      bird.style.bottom = birdBottom + "px";
      bird.style.left = birdLeft + "px";
      
      // Check for game over due to falling off screen
      if (birdBottom <= 0) {
        gameOver();
      }
    }
  }
  let gameTimerId = setInterval(startGame, 20);

  function jump(e) {
    if (e.keyCode === 32 && !isGameOver) { // Spacebar key
      // Apply jump
      if (birdBottom < 480) birdBottom += 50;
      // Update bird position
      bird.style.bottom = birdBottom + "px";
    }
  }

  document.addEventListener("keyup", jump);

  function createObstacle() {
    const obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    gameDisplay.appendChild(obstacle);

    let obstacleLeft = 508;
    const randomHeight = Math.random() * 200;
    const obstacleBottom = randomHeight;
    obstacle.style.left = obstacleLeft + "px";
    obstacle.style.bottom = obstacleBottom + "px";

    function moveObstacle() {
      if (isGameOver) return;
      obstacleLeft -= 2;
      obstacle.style.left = obstacleLeft + "px";

      if (obstacleLeft < -50) {
        obstacle.remove();
      }

      // Check for collision
      const obstacleRect = obstacle.getBoundingClientRect();
      const birdRect = bird.getBoundingClientRect();

      if (
        birdRect.left < obstacleRect.left + obstacleRect.width &&
        birdRect.left + birdRect.width > obstacleRect.left &&
        birdRect.bottom < obstacleRect.bottom + 60 && // Adjust as necessary
        birdRect.top + birdRect.height > obstacleRect.top
      ) {
        gameOver();
      }
    }
    
    let obstacleMoveId = setInterval(moveObstacle, 20);

    // Continue generating obstacles
    setTimeout(createObstacle, 3000);
  }

  createObstacle();

  function gameOver() {
    isGameOver = true;
    clearInterval(gameTimerId);
    alert("Game Over!"); // Display game over message or screen
    // Optionally, you could also reset the game or provide a restart option here
  }
});

