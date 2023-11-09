let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoUserInputEl = document.getElementById("todoUserInput");
let addBtnEl = document.getElementById("addBtn");
let saveBtnEl = document.getElementById("saveBtn")



function getElementsFromLocalStorage() {
  let getElementsFromLocalStoragee  = localStorage.getItem("todoList");
  let parsedTodo = JSON.parse(getElementsFromLocalStoragee);

  if ( parsedTodo === null ) {
    return []
  }

  else {
    return parsedTodo;
  }
}

let todoList = getElementsFromLocalStorage()
let lastArrayindex = todoList.length;

function onSaveButton(){
  let stringifyiedTodo = JSON.stringify(todoList)
  let setItemsToLocalStorage = localStorage.setItem("todoList",stringifyiedTodo);
  return setItemsToLocalStorage;
}

saveBtnEl.addEventListener("click",onSaveButton)


function onAddButton(){
  let inputValue = todoUserInputEl.value ;

  if (inputValue === "") {
    alert("Enter a Valid Input");
    return;
  }

  let indexNoofnext = lastArrayindex + 1 ;

  let newTodo = {
    task : inputValue,
    uniqueNo : indexNoofnext
  }

  todoList.push(newTodo);
  createAndAppendTodo(newTodo)
  todoUserInputEl.value = "";

}

addBtnEl.addEventListener("click",onAddButton);

function onDeleteTodo(todoId) {
  let deleteTaskFromUI = document.getElementById(todoId);
  todoItemsContainer.removeChild(deleteTaskFromUI);

  let deleteItemIndex = todoList.findIndex(function(eachTodo){
    let eachTodoId = "todo" + eachTodo.uniqueNo;
    if (eachTodo === todoId) {
      return true
    }
    else {
      return false
    }
  })
  todoList.splice(deleteItemIndex,1)
}




function createAndAppendTodo(todo) {

  let todoId = "todo" + todo.uniqueNo;
  let checkboxId = "todo" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;


  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.id = labelId;
  labelElement.setAttribute("for", "checkboxInput");
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.task;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

  deleteIcon.onclick = function() {
    onDeleteTodo(todoId)
  }
  deleteIconContainer.appendChild(deleteIcon);
}



for (let todo of todoList) {
  createAndAppendTodo(todo);
}
