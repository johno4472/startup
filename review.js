//pull from habit array habits and days of consistency and convert string back into object "JSON.parse"
//insert html
habitArray = JSON.parse(localStorage.getItem("arrayOfHabits")) ?? [];

for (let i = 0; i < habitArray.length; i++) {
    console.log("Hey");
    const habitElement = document.createElement("li");
//  probably useless      const myHabit = {element: habitElement, habit: habitArray[i].value, daysProgress: 0};
      
    // Insert the order into the HTML list
    habitElement.innerHTML = `<div>
    <label for="select">${habitArray[i][0]}</label>
    <br/>
    <li>
    <progress id="progress" max="31" value="21"></progress>
    <div>Progress: 21 days!</div>
    </li>
    </div>
  
  <br/>`;
    const habitList = document.getElementById("habitReview");
    habitList.appendChild(habitElement);
}