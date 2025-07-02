# Hunt The Mole

Hunt The Mole is an arcade game where the player must hit a mole that moves randomly between holes to gain points. This game is developed using HTML, CSS, and JavaScript. During development, challenges included managing the mole’s random movement, handling clicks on empty holes to reduce hearts, and implementing difficulty levels without causing interval conflicts.

# Table of Contents

- How to Run the Project
- Technologies Used
- Game Structure and Mechanism
  - Extra Ideas got added later
- Challenges Faced
- Demo
- Author

# How to Run the Project

1. Fork or Clone this Repository You can either fork it to your account or clone it locally.
2. Make Sure index.html is in the Root Folder GitHub Pages needs an index.html file in the main directory.
3. Enable GitHub Pages :
   - Go to the repository's Settings
   - Scroll down to Pages (in the left sidebar)
   - Under "Source", select the main branch and set the folder to / (root)
   - Click Save
4. Wait a Few Seconds GitHub will generate a link like: https://your-username.github.io/HUNT-THE-MOLE

5. Open the Link in Your Browser Your project should now be live!

# Technologies Used

- `HTML`
- `CSS`
- `JavaScript`

# Game Structure and Mechanism

![Game Structure](https://i.imgur.com/T4VM26g.jpeg)
_Figure 1: Hunt The Mole game wireframe_

- The main ideas:

  The player hits the mole, which randomly moves between holes. Each successful hit earns points. The game continues indefinitely (hypothetically) until the player either loses or resets the game.

- Heart mechanism :

  Every time the player misses (clicks without scoring), they lose one heart. The player starts with 3 hearts, and the game ends when all hearts are lost.

- Reset button : The reset button serves two purposes:

  1. Restart the game after losing.

  2. Allow the player to reset the game at any time.
     Pressing reset restores the hearts back to 3 and resets the score to zero.

### Extra Ideas got added later

 <!-- Hammer Cursor Animation: The mouse cursor changes to a hammer that swings when the player clicks, adding a fun visual effect to each hit attempt. -->

- Difficulty Levels: Three modes added — Easy, Normal, and Hard — which control how fast the mole appears and disappears. This gives players a challenge based on their skill level.

<!-- Make the cursor look like a hammer that swing during hitting
Add 3 difficulties [ easy / mormal / hard ] only the speed will be increased -->

# Challenges Faced

- One of the first challenges during development was figuring out how to make the mole appear and disappear randomly between the holes.

  This was solved by storing the indexes of empty holes in an array and tracking the current mole's index in a separate variable.

  A random index is selected from the array to place the mole, while the previous mole image is removed using its stored index from a separate variable.

- The second challenge was making the losing-heart function work correctly when the player clicks on an empty hole.

  Although the solution was simple, it was frustrating during development. The issue was that images with an empty `src` had a size of `0px`, making them unclickable.

  This was solved by giving all mole image elements a fixed height and width therow CSS, even when their `src` was empty, allowing clicks to be detected properly.

- The most difficult issue was implementing the difficulty levels without creating multiple overlapping intervals, which caused the game to behave unpredictably.

  The solution was to store the interval ID in a variable inside a function. Whenever a new difficulty level is selected, the function clears the previous interval using `clearInterval()` and starts a new one based on the selected speed.

  This approach kept the game logic clean and ensured that only one active interval was running at any given time.

<!-- Problems encountered during development and how you solved them. -->

# Demo

..

<!-- Visual preview or link to live demo. -->

# Author

..

<!-- How to reach you or link to your profile. -->
