let taskInput = document.getElementById("taskFormEl");

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {

    let taskInputVal = taskInput.value;
    if(taskInputVal.trim() === "") {}
    else {
        console.log(taskInputVal);
        let newListItem = document.createElement("li");
        newListItem.textContent = taskInputVal;
        newListItem.innerHTML = `
        ${taskInputVal}
        <button><img src="./assets/pencil.png" width="20px"></button>
        <button><img src="./assets/task.png" width="20px"></button>
        `;
        let list = document.getElementById("taskList");
        list.appendChild(newListItem);
    }


})