const addItem = () => {
    
    // locate the document elements
    let textBox = document.getElementById('add-todo-text');
    let taskList = document.getElementById('todo-list');
    let newTask = document.createElement("LI");
    
    // create new list element
    newTask.innerText = textBox.value;
    taskList.appendChild(newTask);
    
    // clear the text box
    textBox.value = "";
};