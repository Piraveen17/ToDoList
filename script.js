const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list_container");

function handleChange() {
  localStorage.setItem("userInput", inputBox.value);
}
inputBox.addEventListener("change", handleChange);
window.addEventListener("load", function () {
  const storedValue = localStorage.getItem("userInput");
  if (storedValue) {
    inputBox.value = storedValue;
  }
});

function addTask() {
  if (inputBox.value === "") {
    alert("Write something in the Text box...");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
//localStorage.clear();
