# Pre-work - *Majestic Memory Match*

**Majestic Memory Match** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Mohammed Islam**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/edit/#!/furious-5-memory-match

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] Endurance Mode
- [ ] Time Trial Mode
- [ ] Scoreboard
- [ ] Easy, Medium, Hard Modes
- [ ] Toggle Optional Features

## Video Walkthrough

Here's a walkthrough of implemented user stories:

GIF of winning Furious Five Memory Match Game

![](https://github.com/Slizero/Furious-Five-Memory-Match/blob/main/Screen%20Recording%202021-03-25%20at%201.29.37%20AM.gif)

GIF of losing after 3 mistakes.

![](https://i.imgur.com/9Thgwjl.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used w3schools.com for all of my outside resources. One reason to find different color names  so that I could set alternate button colors. I also used this site to figure out how to fit the activated image across the entire dimensions of the button. Lastly, I used w3schools.com to understand the usage of the Math.random() function and how to select a random number between 1-5, such that it creates a random pattern in every game.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One of the biggest challenges I faced in creating this submission is figuring out how to make the computer pick a different pattern in every run through the game. At first, I looked at the guide which recommended looking into the Math.random() function so that it generates a new challenge every time. However, reading the documentation for it definitely had a steep learning curve. I knew that I needed a random number between 1 and 5 which correspond to the buttons, but the Math.random() function gives floating point values between 0 and 1. To solve this, I multiplied by 5, so that I would get results that are larger than 1 but less than 5. Realizing that it still could receive a less than 1 value, I added 1 to my result and took the floor of it, so that the minimum value I can get is 1 and the maximum would be 5. The easiest part of this challenge was creating the for loop to cycle through each item in the list and set it to a random value. I wanted to make sure that the for loop adjusts for any length pattern, so I made the for loop run until the last element in the list rather than a constant number.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

When it comes to web development I have seen so many modern sites that have so much complex functionality but are HTML, CSS, and JavaScript the core skills needed to create web pages? Would it be possible that in the upcoming years that there would be tons of more technologies that reach the level of importance of HTML, CSS, and JavaScript, thus meaning a lot more research would have to be done by programmers to ensure they stay up to date? Furthermore, I haven noticed that the syntax of other programming languages are quite similar to JavaScript, so would that mean that JavaScript can be used universally rather than for just web pages?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time, I would make it so that users can toggle the various settings and optional features that I have implemented. Another idea I had for this project is to allow for different game modes, such as time trial and endurance mode. Time trial would give a set amount of time to get as many sequences done as possible within a given time frame, while allowing for mistakes, but giving the user time penalties for such errors. Endurance mode would test the limits of the user's memory by continuously increasing the sequence until the user fails 3 times, encouraging the user to reach a new record in every run. As for the regular sequence game mode however, I wanted to keep a record of wins and losses that a user has across all games, so that they could see their progression. Lastly, I wanted to create easy, medium, and hard modes, where the sound holds for varied amounts of time depending on difficulty and patterns would be lengthened as well.



## License

    Copyright Mohammed Islam

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
