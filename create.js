//Create array of objects -> new habits (stored locally)
habitArray = [];
//When making new habit, push to that array (stringified "JSON.stringify" in local storage)
function addNewHabit() {
    const newHabit = document.querySelector("#habit");
    localStorage.setItem("personalHabit", newHabit.value);
//    window.location.href = "create.html";
    // Make the order and associate it with a new HTML element
    const habitElement = document.createElement("li");
    const myHabit = {element: habitElement, habit: newHabit.value, daysProgress: 0};
  
    // Insert the order into the HTML list
    habitElement.innerHTML = `<span>New Habit: ${newHabit.value}</span>`;
    const habitList = document.getElementById("habitReview");
    habitList.appendChild(habitElement);
  
    return myHabit;/*
    const newElement = document.createElement("li");
    orderElement.innerHTML = <span>Hello is this test working?</span>*/
}

function createOrder() {
    
  }