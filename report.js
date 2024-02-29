//Pull from habit array to insert html
//Based on response, update days of consistency in habit, and store locally
habitArray = JSON.parse(localStorage.getItem("arrayOfHabits")) ?? [];

for (let i = 0; i < habitArray.length; i++) {
    console.log("Hey");
    const habitElement = document.createElement("li");
//  probably useless      const myHabit = {element: habitElement, habit: habitArray[i].value, daysProgress: 0};
      
    // Insert the order into the HTML list
    habitElement.innerHTML = `
    <div>
    <label for="select">${habitArray[i][0]} </label>
    <br/>
    <select id="selector-${i}" name="varSelect">
      <option selected>Yes</option>
      <option>No</option>
      <option>NA</option>
    </select>
    <button type="Submit" id="button-${i}" onclick="increment(${i})">Submit</button>
    </div>
    <br/>`;
    const habitList = document.getElementById("habitReport");
    habitList.appendChild(habitElement);
}

function increment(i) {
    const habitSelector = document.getElementById(`selector-${i}`)
    if (habitSelector.value === "Yes" || habitArray[i][2] === 0) {
        habitArray[i][2] += 1;
    }
    else if (habitSelector.value === "No"){
        habitArray[i][2] -= 1;
    }
    
    console.log(habitArray[i][2]);
    localStorage.setItem("arrayOfHabits", JSON.stringify(habitArray));
}