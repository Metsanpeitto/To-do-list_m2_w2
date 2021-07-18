import updateTasks from "./status";
import { addTask, removeTask, editTask } from "./add_remove";
import { storageMock } from "./storageMock";
const fs = require("fs");
var jsdom = require("jsdom");
const { JSDOM } = jsdom;

window.document.body.innerHTML = fs.readFileSync("src/index.html");

// mock the localStorage
window.localStorage = storageMock();
// mock the sessionStorage
window.sessionStorage = storageMock();
/**    The code from index starts here       */
let tasks = [
  { id: 2, index: 2, description: "Do things", completed: true },
  { id: 3, index: 3, description: "Do more things", completed: false },
];

/**       Saves and retrieves from local storage       */
window.updateLocalStorage = function updateLocalStorage(retrieve) {
  if (retrieve === true) {
    if (tasks === null) {
      // tasks = JSON.parse(window.localStorage.getItem("tasks"));
    }
  } else {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  window.displayTasks();
};

/**       Handler for calling a task from and inline declared listener */
window.callAddTask = function callAddTask() {
  addTask(tasks);
};

/**       Update the state of the tasks            */
window.update = function update(data) {
  if (!data) {
    const response = updateTasks();
    tasks = response;
  } else {
    tasks = data;
  }

  window.updateLocalStorage(false);
};

/**       Display tasks is used to show the Task collection      */
window.displayTasks = function displayTasks() {
  const container = window.document.getElementById("container");
  const list = window.document.createElement("ul");
  list.id = "list";
  const EnterImg = "&#8629";

  if (tasks) {
    tasks.forEach((task, index) => {
      const { description, id } = task;
      const li = window.document.createElement("li");
      li.id = index;
      li.addEventListener("drop", (EventTarget) => {
        li.classList.remove("dragging");
        drop(EventTarget);
      });

      li.addEventListener("dragover", (EventTarget) => {
        allowDrop(EventTarget);
      });

      const div = window.document.createElement("div");
      const divId = `div${task.index}`;

      div.classList.add("task");
      div.id = divId;
      div.classList.add("drag-div");
      div.draggable = true;
      div.addEventListener("click", () => editTask(divId, tasks));
      div.data = index;
      div.addEventListener("dragstart", (EventTarget) => {
        div.classList.add("dragging");
        drag(EventTarget);
      });

      const inputCheckbox = window.document.createElement("input");
      inputCheckbox.addEventListener("click", () => {
        window.update();
      });
      inputCheckbox.type = "checkbox";
      inputCheckbox.name = task.id;
      inputCheckbox.id = `input-check-${id}`;
      inputCheckbox.checked = task.completed;

      const inputTask = window.document.createElement("input");
      inputTask.id = `li-description-${id}`;
      inputTask.type = "text";
      inputTask.classList.add("description");
      inputTask.placeholder = description;
      inputTask.value = description || null;
      inputTask.data = task.index;
      inputTask.addEventListener("change", () => {
        window.update();
      });

      const button = document.createElement("button");
      button.classList.add("edit-btn");
      button.id = `edit-btn-${id}`;
      button.type = "button";

      const img = document.createElement("img");
      img.alt = "image";
      img.classList.add("add-btn-img");

      button.appendChild(img);
      div.appendChild(inputCheckbox);
      div.appendChild(inputTask);
      div.appendChild(button);
      li.appendChild(div);
      list.appendChild(li);
    });
  }
  const template = `
  <div class="top">
  <h1 class="title">Today's To Do</h1>
           <button id="refresh-btn" type="button" 
            onclick="window.restart()"
            type="button"> 
            <img class="add-btn-img" src="null" alt="" /> 
            </button>
  </div>       
          <form onsubmit="window.callAddTask()" id="task-form">
            <input
              id="description"
              type="text"
              class="text"
              placeholder="Add to your list ..."
            />
            <button id="add-btn" type="submit" 
            type="button"> 
         
            </button>
          </form>       
          `;

  container.innerHTML = template;
  const buttonHtml = window.document.createElement("button");

  buttonHtml.id = "clear-btn";
  buttonHtml.addEventListener("click", () => {
    clear(tasks);
  });
  buttonHtml.textContent = "Clear completed tasks.";
  container.insertAdjacentElement("beforeend", list);
  container.insertAdjacentElement("beforeend", buttonHtml);
};

window.updateLocalStorage(true);
window.displayTasks();

module.exports = { displayTasks, updateLocalStorage };
//    a function for editing the task description.

//describe("Test task manager ->", () => {
//  test("add 1 li element to the ul", () => {
//    const input = window.document.getElementById("description");
//    input.value = "Do stuff";
//    const task = { id: 4, index: 4, description: "Do stuff", completed: true };

//    const listBefore = window.document.getElementsByTagName("li");
//    const lenB = listBefore.length;
//    addTask(tasks);
//    const listAfter = window.document.getElementsByTagName("li");
//    const lenA = listAfter.length;

//    expect(lenA).toBe(lenB + 1);
//  });

//  test("remove the li element from the ul", () => {
//    const listBefore = window.document.getElementsByTagName("li");
//    const lenB = listBefore.length;
//    removeTask("div2", tasks);
//    const listAfter = window.document.getElementsByTagName("li");
//    const lenA = listAfter.length;

//    expect(lenB - 1).toBe(lenA);
//  });
//});