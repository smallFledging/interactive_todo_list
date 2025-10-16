let taskInput = document.getElementById("taskFormEl");

let submitBtn = document.getElementById("submit");
let taskArray = ['code'];
let buttonNum = 0;


submitBtn.addEventListener("click", () => {
    
    if(taskInput.value.trim() === "" || taskArray.includes(taskInput.value.toLowerCase()) ) {}
    else {
        buttonNum++;
        let newListItem = document.createElement("li");
        newListItem.id = `li-${buttonNum}`;
        newListItem.textContent = taskInput.value;
        newListItem.innerHTML = `
        <span>${taskInput.value} </span>
        <button id="edit" onclick=editListItem(this)><img src="./assets/pencil.png" width="20px"></button>
        <button id="delete" onclick=deleteListItem(this)><img src="./assets/task.png" width="20px"></button>
        `;
        let list = document.getElementById("taskList");
        list.appendChild(newListItem);
        taskArray.push(taskInput.value.toLowerCase());
        taskInput.value = "";
    }

});

function deleteListItem(e) {
    if(confirm("Are you sure you want to delete the task?")) {
        let spanText = e.parentElement.children[0].innerText.trim();
        let inputText = e.parentElement.children[0].lastChild.value;
        let deleteVal = spanText === "" ? inputText.trim() : spanText.trim();
        let deletedValIndex = taskArray.indexOf(deleteVal.toLowerCase());
        if (deletedValIndex > -1) { // only splice array when item is found
            taskArray.splice(deletedValIndex, 1);
            e.parentElement.remove();
        }
    }
}

function editListItem(e) {
    let spanEl = e.parentElement.children[0];
    let parentList = Array.prototype.slice.call(document.getElementById("taskList").children);
    let index = parentList.indexOf(spanEl.parentElement);
    if(spanEl.innerHTML.includes("input")){
        if(spanEl.firstChild.value.trim() === "") {alert("Task name cannot be empty.")}
        else {
            spanEl.innerHTML = `<span> ${spanEl.firstChild.value} </span>`;
            taskArray[index] = e.parentElement.children[0].innerText.trim();
        }
    }
    else {
        spanEl.innerHTML = `<input id="input-${buttonNum}" value="${spanEl.innerText}"></input>`;
    }
} 