document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task-button");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    li.classList.add("completed");
                } else {
                    li.classList.remove("completed");
                }
            });

            const taskLabel = document.createElement("span");
            taskLabel.textContent = taskText;

            const deleteButton = document.createElement("span");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete");
            deleteButton.addEventListener("click", () => {
                taskList.removeChild(li);
            });

            li.appendChild(checkbox);
            li.appendChild(taskLabel);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });
});
