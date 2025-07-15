const prompt = require('prompt-sync')({ sigint: true });

const world = '🌍';
const hole = '⚫️';
const space = '✨';
const rocket = '🚀';

class Field {
  constructor(field) {
    this.field = field;
    this.playerX = 0;
    this.playerY = 0;
    this.gameOver = false;
  }

  print() {
    console.clear()
    console.log(this.field.map(row => row.join("")).join("\n"));
  }

  runGame() {
    console.log(
      `👨‍🚀 Welcome, Commander!

      You're lost in deep space ✨, far from your home planet Earth 🌍  
      Your mission: navigate your rocket 🚀 through the space ✨ and make your way back to Earth 🌍

      But be careful — the galaxy is full of mysterious black holes ⚫️  
      One wrong move, and your rocket will be swallowed whole! ꩜

      Use your navigation system to steer the rocket:
      → ⬆️ (w) Up  
      → ⬇️ (s) Down  
      → ⬅️ (a) Left  
      → ➡️ (d) Right

      Can you survive the dangers of space and return safely? 💫

      Good luck, space traveler. Earth is waiting for you! 🌍✨`
    );

    prompt("Press ENTER to begin your mission 🚀");
    this.print();

    while (!this.gameOver) {
      const moved = this.askForInput(); 
      if (moved && !this.gameOver) {
        this.print(); 
      }
    }
  }

  askForInput() {
    const input = prompt("Where should the rocket fly next? (w = up, s = down, a = left, d = right): ");
    
    const oldX = this.playerX;
    const oldY = this.playerY;
    
    const moved = this.updatePosition(input);
    if (!moved) return false;

    if (!this.isInBounds()) {
      console.clear();
      console.log("You've flown off the star map and are lost in space! 🌌");
      this.gameOver = true;
    } else if (this.checkLoss()) {
      console.clear();
      console.log("Your rocket was swallowed by a black hole! ⚫️ Mission failed.");
      this.gameOver = true;
    } else if (this.checkWin()) {
      console.clear();
      console.log("You've reached Earth! 🌍 Mission accomplished, Commander! 🎉");
      this.gameOver = true;
    } else {
      if (this.field[oldY][oldX] !== world) {
        this.field[oldY][oldX] = space;
      }
      this.field[this.playerY][this.playerX] = rocket;
    }
    return true;
  }

  updatePosition(direction) {
    switch (direction) {
      case 'w': this.playerY -= 1; break;
      case 's': this.playerY += 1; break;
      case 'a': this.playerX -= 1; break;
      case 'd': this.playerX += 1; break;
      default:
        console.log("Navigation error! Use w ⬆️, s ⬇️, a ⬅️, or d ➡️ to steer your rocket through space.");
        return false;
    }
    return true;
  }

  isInBounds() {
    return (
      this.playerY >= 0 &&
      this.playerY < this.field.length &&
      this.playerX >= 0 &&
      this.playerX < this.field[0].length
    );
  }

  getCurrentTile() {
    return this.field[this.playerY][this.playerX];
  }

  checkWin() {
    return this.getCurrentTile() === world;
  }

  checkLoss() {
    return this.getCurrentTile() === hole;
  }


  static generateField(height, width, holePercentage = 0.2) {
    const field = [];

    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        const random = Math.random();
        row.push(random < holePercentage ? hole : space);
      }
      field.push(row);
    }

   
    field[0][0] = rocket;


    let worldX, worldY;
    do {
      worldX = Math.floor(Math.random() * width);
      worldY = Math.floor(Math.random() * height);
    } while (worldX === 0 && worldY === 0);

    field[worldY][worldX] = world;

    return field;
  }

  static isSolvable(field, startX = 0, startY = 0) {
  const height = field.length;
  const width = field[0].length;
  const queue = [[startY, startX]];
  const visited = new Set();

  while (queue.length > 0) {
    const [y, x] = queue.shift();
    const key = `${y},${x}`;
    if (visited.has(key)) continue;
    visited.add(key);

    const tile = field[y][x];
    if (tile === world) return true;
    if (tile === hole) continue;

    const neighbors = [
      [y - 1, x],
      [y + 1, x],
      [y, x - 1],
      [y, x + 1]
    ];

    for (const [ny, nx] of neighbors) {
      if (ny >= 0 && ny < height && nx >= 0 && nx < width) {
        queue.push([ny, nx]);
      }
    }
  }

  return false;
}

static generateSolvableField(height, width, holePercentage = 0.2) {
  let field;
  do {
    field = Field.generateField(height, width, holePercentage);
  } while (!Field.isSolvable(field));
  return field;
}
}

function startGame() {
  const fieldData = Field.generateSolvableField(20, 20, 0.35);
  const game = new Field(fieldData);
  game.runGame();

  const again = prompt("Do you want to play again? (y/n): ");
  if (again.toLowerCase() === 'y') {
    startGame();
  } else {
    console.log("Thanks for playing, Commander. Safe travels! 🚀🌌");
  }
}

startGame();