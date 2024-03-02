//Pull from habit array to insert html
//Based on response, update days of consistency in habit, and store locally
habitArray = JSON.parse(localStorage.getItem("arrayOfHabits")) ?? [];

if (habitArray.length === 0) {
    const habitElement = document.createElement("li");
    habitElement.innerHTML = `<div>Looks like you ain't got nothin'... Go to the create page<div>`;
    const habitList = document.getElementById("habitReport");
    habitList.appendChild(habitElement);
}
else {

    for (let i = 0; i < habitArray.length; i++) {
        console.log("Hey");
        const habitElement = document.createElement("li");
    //  probably useless      const myHabit = {element: habitElement, habit: habitArray[i].value, daysProgress: 0};
        if (habitArray[i][3] === 1) {  
        // Insert the order into the HTML list
            console.log("Good job!!")
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
        }

        else if (habitArray[i][3] === 2) {
            habitElement.innerHTML = `
            <div>
            <img src="mySweetheart.jpg" width="260">
            </div>
            <br/>
            <br/>
            <iframe src="alyssaText.txt"></iframe>
            `
        }

        else { 
            console.log(habitArray[i][3])
            habitElement.innerHTML = `
            <div>
            Habit: -->${habitArray[i][0]}<-- Successfully recorded for today!
            </div>
            <br/>`;
        }

        const habitList = document.getElementById("habitReport");
        habitList.appendChild(habitElement);
    }
}

function increment(i) {
    const habitSelector = document.getElementById(`selector-${i}`)
    if (habitSelector.value === "Yes") {
        habitArray[i][2] += 1;
    }
    else if (habitSelector.value === "No"){
        if (habitSelector.value >= 1){
            habitArray[i][2] -= 1;
        }
    }
    habitArray[i][3] = 0;
    if (habitArray[i][0] === "snugglewuggle") {
        habitArray[i][3] = 2;
    }
    console.log(habitArray[i][3]);
    localStorage.setItem("arrayOfHabits", JSON.stringify(habitArray))
    window.location.href = "report.html";
}