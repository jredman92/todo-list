const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

input.addEventListener("keypress", function (event) {
   if (event.key === "Enter" && input.value.trim() !== "") {
      const newItem = document.createElement("li");

      const taskText = document.createElement("span");
      taskText.textContent = input.value;
      taskText.classList.add("task-text");

      const checkMark = document.createElement("span");
      checkMark.textContent = "✔";
      checkMark.classList.add("checkmark");

      // Toggle completed on click (show checkmark and strike through text)
      newItem.addEventListener("click", () => {
         newItem.classList.toggle("completed");
      });

      // Right-click to remove item
      newItem.addEventListener("contextmenu", (e) => {
         e.preventDefault();
         list.removeChild(newItem);
      });

      newItem.appendChild(taskText);
      newItem.appendChild(checkMark);
      list.appendChild(newItem);
      input.value = "";
   }
});
