document.addEventListener("DOMContentLoaded", () => {
  const bird = document.querySelector(".bird");
  const gameDisplay = document.querySelector(".game-container");
  const ground = document.querySelector(".ground");
  const obstacle = document.querySelector(".obstacle");

  let birdBottom = 200;
  let birdLeft = 200;
  let gravity = 2;

  function startGame() {
    //Apply Gravity
    birdBottom -= gravity;

    //Update the bird position
    bird.style.bottom = birdBottom + "px";
    bird.style.left = birdLeft + "px";
  }
  let timerId = setInterval(startGame, 20);

  function control(e) {
    if (e === 32) jump();
  }

  function jump() {
    //Apply jump
    if (birdBottom < 480) birdBottom += 50;
    //Update bird position
    bird.style.bottom = birdBottom + "px";
  }

  document.addEventListener("keyup", jump);

  function generateObstacle() {
    let obstacleLeft = 508;
    let randomHeight = Math.random() * 60;
    let obstacleBottom = randomHeight;
    let obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    gameDisplay.appendChild(obstacle);
    obstacle.style.left = obstacleLeft + "px";
    obstacle.style.bottom = obstacleBottom + "px";
  }

  move = 2;

  function moveObstacle() {
    obstacleLeft -= move;
    obstacle.style.left = obstacleLeft + "px";
  }

  {
    let gameTimerId = setInterval(moveObstacle, 20);
  }
  function generateObstacle() {
    let obstacleLeft = 508;
    let randomHeight = Math.random() * 200;
    let obstacleBottom = randomHeight;
    let obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    gameDisplay.appendChild(obstacle);
    obstacle.style.left = obstacleLeft + "px";
    obstacle.style.bottom = obstacleBottom + "px";

    move = 2;

    function moveObstacle() {
      obstacleLeft -= move;
      obstacle.style.left = obstacleLeft + "px";
      
    }
    let gameTimerId = setInterval(moveObstacle, 20);

     setTimeout(generateObstacle, 3000)
  }

  generateObstacle();
});
