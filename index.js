const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

input.addEventListener("keypress", function (event) {
   if (event.key === "Enter" && input.value.trim() !== "") {
      const newItem = document.createElement("li");
      newItem.textContent = input.value;
      list.appendChild(newItem);
      input.value = "";
   }
});

console.log("console is working!");
