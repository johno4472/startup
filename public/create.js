//Create array of objects -> new habits (stored locally)
habitArray = JSON.parse(localStorage.getItem("arrayOfHabits")) ?? [];
console.log(habitArray);
//When making new habit, push to that array (stringified "JSON.stringify" in local storage) JSON.parse
function addNewHabit() {
    const habitInput = document.querySelector("#habit");

    localStorage.setItem("personalHabit", habitInput.value)
//  take array from local storage, parse it, then push my newHabit.value onto the array
    date = "2/28/24";
    progress = 0;
    displayReport = 1;
    habitArray.push([habitInput.value, date, progress, displayReport]);
    localStorage.setItem("arrayOfHabits", JSON.stringify(habitArray));
    habitInput.value="";
//  window.location.href = "create.html";
}
//to be continued
function addHabit() {
  console.log("am i here");
  const habitInput = document.querySelector("#habit");

  //  take array from local storage, parse it, then push my newHabit.value onto the array
  date = "2/28/24";
  progress = 0;
  displayReport = 1;
  newHabit = [habitInput.value, date, progress, displayReport];
  try {
      const response = fetch('/api/habits', {
          method: 'POST',
          body: JSON.stringify(newHabit),
      })
  }
  catch {
    console.log("Directory not found");
  }
}

async function loadHabits() {
  try {
    const response = await fetch('api/habits');
    habitListThing = response.json();

    localStorage.setItem(('arrayOfHabits'), JSON.stringify(habitListThing));
  }
  catch {
    console.log("maybe no scores found here?");
  }

  seeHabits();
}

async function saveScore(score) {
    const userName = this.getPlayerName();
    const date = new Date().toLocaleDateString();
    const newScore = {name: userName, score: score, date: date};

    try {
      const response = await fetch('/api/score', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newScore),
      });

      // Store what the service gave us as the high scores
      const scores = await response.json();
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch {
      // If there was an error then just track scores locally
      this.updateScoresLocal(newScore);
    }
  }

function seeHabits() {
    habitArray=JSON.parse(localStorage.getItem("arrayOfHabits"));
    console.log(habitArray);
    for (let i = 0; i < habitArray.length; i++) {
        const habitElement = document.createElement("li");
//  probably useless      const myHabit = {element: habitElement, habit: habitArray[i].value, daysProgress: 0};
      
        // Insert the order into the HTML list
        habitElement.innerHTML = `<span>New Habit: ${habitArray[i][0]} - Date Begun: ${habitArray[i][1]}
        Days of progress: ${habitArray[i][2]}
        </span>`;
        const habitList = document.getElementById("habitReview");
        habitList.appendChild(habitElement);
    }
  }