//Create array of objects -> new habits (stored locally)
habitArray = JSON.parse(localStorage.getItem("arrayOfHabits")) ?? [];
console.log(habitArray);
//When making new habit, push to that array (stringified "JSON.stringify" in local storage) JSON.parse
function addNewHabit() {
    const habitInput = document.querySelector("#habit");

    localStorage.setItem("personalHabit", habitInput.value);
//  take array from local storage, parse it, then push my newHabit.value onto the array
    date = "2/28/24"
    habitArray.push([habitInput.value, date]);
    localStorage.setItem("arrayOfHabits", JSON.stringify(habitArray));
    habitInput.value="";
//  window.location.href = "create.html";
}

function seeHabits() {
    habitArray=JSON.parse(localStorage.getItem("arrayOfHabits"));
    console.log(habitArray);
    for (let i = 0; i < habitArray.length; i++) {
        const habitElement = document.createElement("li");
//  probably useless      const myHabit = {element: habitElement, habit: habitArray[i].value, daysProgress: 0};
      
        // Insert the order into the HTML list
        habitElement.innerHTML = `<span>New Habit: ${habitArray[i][0]} - Date Begun: ${habitArray[i][1]}</span>`;
        const habitList = document.getElementById("habitReview");
        habitList.appendChild(habitElement);
    }
  }