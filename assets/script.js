let taskInput = document.getElementById("taskFormEl");

let submitBtn = document.getElementById("submit");
let taskArray = [];
let buttonNum = 0;


submitBtn.addEventListener("click", () => {
    
    if(taskInput.value.trim() === ""  ) {} //|| taskArray.includes(taskInput.value)
    else {
        buttonNum++;
        let newListItem = document.createElement("li");
        newListItem.id = `li-${buttonNum}`;
        newListItem.textContent = taskInput.value;
        // newListItem.innerHTML = `
        // ${taskInput.value}
        // <button id="edit-${buttonNum}"><img src="./assets/pencil.png" width="20px"></button>
        // <button id="delete-${buttonNum}"> <img src="./assets/task.png" width="20px"></button>
        // `;
        newListItem.innerHTML = `
        <span>${taskInput.value} </span>
        <button id="edit" onclick=editListItem(this)>Edit</button>
        <button id="delete" onclick=deleteListItem(this)>Delete</button>
        `;
        
        
        let list = document.getElementById("taskList");
        list.appendChild(newListItem);
        // taskArray.push(taskInput.value);
        taskInput.value = "";
        // console.log("taskArray is", taskArray);

    
    
        // let editBtn = document.getElementById("edit");
        // editBtn.addEventListener("click", (e) => {
        //     let spanEl = e.target.parentElement.children[0];
        //     console.log("spanel", spanEl);
        //     if(spanEl.innerHTML.includes("input")){
        //         spanEl.innerHTML = `<span> ${spanEl.firstChild.value} </span>`
                
        //     }
        //     else {
        //         spanEl.innerHTML = `<input id="input-${buttonNum}" value=${spanEl.innerText}></input>
        //         `;
        //     }
        // });


                        // parent.innerHTML = `<input id="input-${buttonNum}" value="${parent.innerText}"></input>
            // <button id="edit-btn"><img src="./assets/pencil.png" width="20px"></button>
            // <button id="delete-btn"> <img src="./assets/task.png" width="20px"></button>
            // `;
    
        // editBtn.addEventListener("click", () => {
        //     let parent = document.getElementById(`li-${buttonNum}`);
        //     let editableInput = document.getElementById(`input-${buttonNum}`);
        //     if(editableInput) {
        //         parent.innerHTML = `
        //         <li>
        //         ${editableInput.value}
        //         <button id="edit-${buttonNum}"><img src="./assets/pencil.png" width="20px"></button>
        //         <button id="delete-${buttonNum}"> <img src="./assets/task.png" width="20px"></button>
        //         </li>
        //         `
        //     }
        //     else {
        //         parent.innerHTML = `<input id="input-${buttonNum}"></input>
        //         <button id="edit-${buttonNum}"><img src="./assets/pencil.png" width="20px"></button>
        //         <button id="delete-${buttonNum}"> <img src="./assets/task.png" width="20px"></button>
        //         `;
        //     }
        // });

    

        
        // let deleteBtn = document.getElementById("delete");
        // deleteBtn.addEventListener("click", (e) => {
            
        // });
    }

});

function deleteListItem(e) {
    console.log(e.parentElement.children[0]);
    e.parentElement.remove();
            // let element = e.target.parentElement;
            // element.remove();
            // console.log(e.target.parentElement.children[0].outerText.trim());
            // let test = e.target.parentElement.children[0].outerText.trim();
            // taskArray = taskArray.filter(x => !x.includes(test));
            // console.log("taskArrayafter", taskArray);
}

function editListItem(e) {
    console.log(e);
    let spanEl = e.parentElement.children[0];
    console.log("spanel", spanEl);
    if(spanEl.innerHTML.includes("input")){
        spanEl.innerHTML = `<span> ${spanEl.firstChild.value} </span>`
        
    }
    else {
        spanEl.innerHTML = `<input id="input-${buttonNum}" value=${spanEl.innerText}></input>
        `;
    }

} 
// editBtn.addEventListener("click", (e) => {
//             let parent = e.parentElement;
//             // parent.innerHTML = `<input id="input-${buttonNum}"></input>
//             // <button id="edit-btn"><img src="./assets/pencil.png" width="20px"></button>
//             // <button id="delete-btn"> <img src="./assets/task.png" width="20px"></button>
//             // `;
//             let editableInput = document.getElementById("edit");
//             console.log("click");
//             if(typeof editableInput === "object"){
//                 console.log("object");
//             }
//             else {
//                 parent.innerHTML = `<input id="input-${buttonNum}" value=${parent.innerText}></input>
//                 <button id="edit-${buttonNum}"> Edit </button>
//                 <button id="delete-${buttonNum}"> Delete </button>
//                 `;
//             }
// });



// let edit1 = document.getElementById("edit0");
// let delete1 = document.getElementById("delete0");

// edit1.addEventListener("click", () => {
//     let task1 = document.getElementById("task1");
//     console.log(task1.value);
//     if(!task1.value === 0 || !task1.value === "") {
//         task1.innerHTML = `<input></input>`;
//     }
//     else {
//         task1.innerHTML = `<li>${task1.value}</li>`
//     }
// });


// after delete delete taskArray
// delete1.addEventListener("click", (e) => {
//     console.log(e);
//     let parent = document.getElementById("taskList");
//     for(i = 0; i < parent.children.length; i++) {
//         parent.removeChild(parent.children[i]);
//     }
    // let deletedValIndex = taskArray.indexOf(parent.innerText);
    // if (deletedValIndex > -1) { // only splice array when item is found
    //     taskArray.splice(deletedValIndex, 1);
    // }
// });