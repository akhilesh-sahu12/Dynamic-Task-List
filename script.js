const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", () => {
      const taskText = taskInput.value;
      if (taskText.trim() !== "") {
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const taskLabel = document.createElement("label");
        taskLabel.textContent = taskText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        listItem.appendChild(checkbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
          taskList.removeChild(listItem);
        });

        checkbox.addEventListener("change", () => {
          if (checkbox.checked) {
            taskLabel.classList.add("completed");
          } else {
            taskLabel.classList.remove("completed");
          }
        });

        taskList.appendChild(listItem);
        taskInput.value = "";
      }
    });