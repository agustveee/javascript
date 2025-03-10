document.querySelector(".add-task").addEventListener("click", addTask);

function addTask() {
    let taskInput = document.querySelector("input");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.querySelector(".task-list");

    // create new list of item
    let li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="remove-btn" onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
