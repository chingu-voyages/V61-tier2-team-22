# 🎮 Wordle Game

A React-based implementation of the popular **Wordle** game where players have six attempts to guess a randomly selected five-letter English word. The game features an interactive game board, virtual and physical keyboard support, real-time color feedback, and a modern responsive interface.


# 📖 Overview

This project was developed as part of the **Chingu Voyage Program**, where participants collaborate to build real-world applications. The objective of this assignment was to recreate the popular **Wordle** game within **6 weeks**, following an agile development process and applying modern frontend development practices.

The project focuses on strengthening skills in **React.js**, component-based architecture, state management, event handling, and implementing game logic while maintaining clean, modular, and reusable code.


# ✨ Features

- 🎲 Randomly selects a secret five-letter word from a built-in dictionary
- 🟩 Six attempts to guess the correct word
- 🎨 Wordle-style color feedback
  - Green: Correct letter in the correct position
  - Yellow: Correct letter in the wrong position
  - Gray: Letter not in the word
- ⌨️ Supports both:
  - Physical keyboard input
  - On-screen virtual keyboard
- 🔄 Play Again functionality
- 📱 Responsive user interface
- 🚫 Prevents guesses shorter than five letters
- 📚 Validates guesses against the built-in dictionary
- 🏆 Win/Lose modal after game completion
- 🧩 Component-based architecture using React


# 🛠 Technologies Used

- React.js
- HTML5
- CSS3
- React Hooks (useState, useEffect)
- Vite
  

# 📂 Project Structure


```
src/
│
├── assets/
│
├── components/
│   │
│   ├── data/
│   │   └── WordList.jsx
│   │
│   ├── footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   │
│   ├── game/
│   │   ├── Board.jsx
│   │   ├── Board.css
│   │   ├── Keyboard.jsx
│   │   └── Keyboard.css
│   │
│   ├── header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   │
│   ├── modal/
│   │   ├── GameModal.jsx
│   │   └── GameModal.css
│   │
│   └── utils/
│       └── WordleUtils.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---


# 🚀 Running the Project

### 1. Clone the repository

git clone https://github.com/nahul100/wordle-game.git

### 2. Navigate to the project

cd wordle-game

### 3. Install dependencies

npm install

### 4. Start the development server

npm run dev

### 5. Open in your browser

http://localhost:5173

# 📦 Dependencies

Main packages required:

- React
- React DOM
- Vite

Install them with:
npm install

# 🎮 Gameplay

1. A random five-letter word is selected.
2. Enter a five-letter guess using either:
   - Your physical keyboard
   - The on-screen keyboard
3. Press **Enter** or **Guess** to submit.
4. Receive color-coded feedback after each guess.
5. Guess the word within six attempts to win.
6. Click **Play Again** to start a new game.

# 🔮 Future Improvements

- 🤖 AI-powered hint system
- 💡 AI next-word recommendation
- 📊 Player statistics dashboard
- 🔥 Daily challenge mode
- 🌙 Dark/Light theme toggle
- 🎵 Sound effects and animations
- 🌍 Multiplayer mode
- ☁️ Online leaderboard
- 📖 Vocabulary learning mode

## Our Team

- Anjelica May-Farmer: [GitHub](https://github.com/Anjie-MF) / [LinkedIn](https://www.linkedin.com/in/anjiemay23/)
- Zahra: [GitHub](https://github.com/ZahraSoley)
- Nahul: [GitHub](https://github.com/nahul100) / [LinkedIn](https://linkedin.com/in/liaccountname)
- Hany Farag: [GitHub](https://github.com/hany2working-dev) / [LinkedIn](https://linkedin.com/in/liaccountname)
