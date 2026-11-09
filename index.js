let tasks = [];

function addTask() {

    let input = document.getElementById("taskInput");

    let taskName = input.value.trim();

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    let task = {
        name: taskName,
        completed: false
    };

    tasks.push(task);

    input.value = "";

    displayTasks();
}

function displayTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        let li = document.createElement("li");

        let span = document.createElement("span");

        span.textContent = task.name;

        if (task.completed) {
            span.classList.add("completed");
        }

        span.onclick = function() {
            task.completed = !task.completed;
            displayTasks();
        };

        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        deleteButton.onclick = function() {
            tasks.splice(index, 1);
            displayTasks();
        };

        li.appendChild(span);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });

    document.getElementById("totalTasks").textContent = tasks.length;
}