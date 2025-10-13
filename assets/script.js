let taskInput = document.getElementById("taskFormEl");

let submitBtn = document.getElementById("submit");
let taskArray = ['Code'];
let buttonNum = 0;


submitBtn.addEventListener("click", () => {
    
    if(taskInput.value.trim() === "" || taskArray.includes(taskInput.value) ) {}
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
        taskArray.push(taskInput.value);
        taskInput.value = "";
    }

});

function deleteListItem(e) {
    if(confirm("Are you sure you want to delete the task?")) {
        e.parentElement.remove();
        let deletedValIndex = taskArray.indexOf(e.parentElement.children[0].innerText.trim());
        if (deletedValIndex > -1) { // only splice array when item is found
            taskArray.splice(deletedValIndex, 1);
        }
    }
}

function editListItem(e) {
    let spanEl = e.parentElement.children[0];
    let parentList = Array.prototype.slice.call(document.getElementById("taskList").children);
    let index = parentList.indexOf(spanEl.parentElement);
    if(spanEl.innerHTML.includes("input")){
        spanEl.innerHTML = `<span> ${spanEl.firstChild.value} </span>`;
        taskArray[index] = e.parentElement.children[0].innerText.trim();
    }
    else {
        spanEl.innerHTML = `<input id="input-${buttonNum}" value="${spanEl.innerText}"></input>
        `;
    }
} 