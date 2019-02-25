const addItem = () => {
    let textBox = document.getElementById('add-todo-text');
    let taskList = document.getElementById('todo-list');
    let newTask = document.createElement("LI");
    newTask.innerText = textBox.nodeValue;
    taskList.appendChild(newTask);
};