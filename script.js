//Global Constants
const cluePauseTime = 333; //time in between clues
const nextClueWaitTime = 1000; //time to wait before starting sequence
//Global Variables
var pattern = [0, 0, 0, 0, 0, 0, 0, 0];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000; //how long clue is lit up for
var strike = 0;

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;

  for (let x = 0; x < pattern.length; x++) {
    pattern[x] = Math.floor(Math.random() * 5 + 1);
  }

  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  strike = 0;
  clueHoldTime = 1000;
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  strike = 0;
  clueHoldTime = 1000;
  stopGame();
  alert("Congratulations! You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //correct guess
    if (progress == guessCounter) {
      if (progress == pattern.length - 1) {
        //reached end of pattern
        winGame();
      } else {
        //increase length of sequence
        clueHoldTime /= 1.2;
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    strike++;
    playClueSequence();
    if (strike == 3) {
      loseGame();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 140.3,
  2: 255.2,
  3: 400,
  4: 549.2,
  5: 678.3
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
