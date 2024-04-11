//I need to store user habits on the server
    //Should be an array of arrays that contains habit value, habit start date, habit progress, and displayhabit (T/F)
    //Get method upon sign in to display habits correctly
    //Post method to post the array of habits upon creation of new habit or update of habit progress
    //The habit array is stored according to the username
//have a function upon creating new account that gets the usernames, and checks if the new username is already present in the usernames on the server
//

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static('public'));

const apiRouter = express.Router();
app.use(`/api`, apiRouter);

let habits = []; // Initialize habits array
let scores = []; // Initialize scores array

// Get habits
apiRouter.get('/habits', (_req, res) => {
  res.send(habits);
});

// Get scores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// Submit new habit
apiRouter.post('/habits', (req, res) => {
  const newHabit = req.body;
  habits.push(newHabit);
  res.send(habits);
});

// Update habit progress
apiRouter.post('/habits/update', (req, res) => {
  const { habitId, progress } = req.body;
  const habitIndex = habits.findIndex(habit => habit.id === habitId);
  if (habitIndex !== -1) {
    habits[habitIndex].progress = progress;
    res.send(habits);
  } else {
    res.status(404).send("Habit not found");
  }
});

// Submit score
apiRouter.post('/scores', (req, res) => {
  const newScore = req.body;
  scores.push(newScore);
  res.send(scores);
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});