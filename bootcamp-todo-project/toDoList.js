
const getInformation = document.getElementById("toDoList");
console.log(getInformation);

const daysTask = document.getElementById("days");
console.log(daysTask);


const handler = () => {
  console.log("Clicked on days div");
};

daysTask.addEventListener("click", handler);
