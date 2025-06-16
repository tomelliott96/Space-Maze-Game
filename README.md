# 🚀 Space Escape

**A terminal-based adventure game built in JavaScript**  
Guide a stranded rocket 🚀 through deep space ✨ to reach Earth 🌍 while avoiding deadly comets ☄️.

---

## 🎮 Project Overview

**Space Escape** is a text-based game inspired by maze pathfinding challenges. The player controls a rocket navigating through a randomly generated galaxy, where each move is a calculated risk. The goal is to reach the Earth while dodging comets. The map changes dynamically, and each game is different.

---

## ✨ Features

- 🗺️ **Procedurally Generated Game Maps**  
  Each game session generates a new randomized grid with dynamic placement of obstacles and objectives.

- 🧠 **Solvability Guarantee (BFS)**  
  The map generation uses a Breadth-First Search algorithm to ensure the player always has a valid path to reach the goal.

- 🎮 **Interactive Terminal Gameplay**  
  Real-time user input via keyboard commands (u/d/l/r) simulates movement through the map.

- 📉 **Game State & Logic Management**  
  Win, lose, or out-of-bounds conditions are clearly defined and managed through encapsulated methods.

- 🌌 **Custom Story & Theming**  
  A space-themed setting with emojis and narrative adds a fun and engaging atmosphere.

---

## 🛠️ Tech Stack

- **JavaScript (Node.js)** – core language and runtime  
- **prompt-sync** – for real-time terminal input  
- **Markdown** – for documentation and GitHub presentation

---

## 🧠 Skills Demonstrated

- ✅ **Object-oriented programming**: Game logic encapsulated in a reusable `Field` class  
- ✅ **Algorithmic thinking**: Custom BFS implementation to validate path solvability  
- ✅ **Randomized procedural generation**: Creating varied maps with consistent rules  
- ✅ **User interaction**: Handling player input and updating game state  
- ✅ **Terminal-based UI design**: Crafting feedback-rich gameplay without a GUI  
- ✅ **Code structuring and readability**: Organized methods and descriptive logic

---

## 🚀 Run It Yourself

1. Clone the repository:
   ```bash
   git clone https://github.com/tomelliott96/Space-Maze-Game
   cd Space-Maze-Game
   ```

2. Install dependencies:
    ```bash
    npm install prompt-sync
    ```

3. Start the game:
    ```bash
    node main.js
    ```

---

## 🙋 Motivation

This project was developed as part of the *Codecademy Back-End Engineer Path* to apply theoretical knowledge to a playful real-world scenario. The challenge fostered creative problem-solving and algorithmic thinking — simulating real-life engineering challenges where no strict blueprint exists. From designing a solvable pathfinding system to crafting a compelling user experience, this game demonstrates my ability to balance logic, structure, and creativity in JavaScript.
Originally based on Codecademy’s “Find Your Hat” project, this project-challenge differs from traditional step-by-step tutorials by presenting open-ended tasks that required independent problem-solving — from designing the game mechanics to implementing the underlying logic — fostering creativity, algorithmic thinking, and a full-stack mindset.