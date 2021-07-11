import _ from "lodash";
import "./style.css";
import RecycleImg from "./recycle.svg";
import MoreImg from "./more.svg";

let tasks = null;

/**       AddTask adds tasks to the tasks list      */
window.addTask = function addTask() {
  console.log("task adding");
  const description = document.getElementById("description").value;
  const completed = false;
  const date = new Date();
  const id = date.getMilliseconds();

  if (!tasks) {
    tasks = [];
  }

  const position = tasks.length + 1;

  if (tasks && description !== "") {
    const task = {
      description,
      completed,
      position,
      id,
    };
    console.log("add task");
    console.log(task);
    tasks.push(task);
    tasks.sort((taskA, taskB) => {
      const indexA = taskA.position;
      const indexB = taskB.position;
      if (indexA < indexB) {
        return -1;
      }
      if (indexA > indexB) {
        return 1;
      }
      return 0;
    });

    window.updateLocalStorage(false);
    // const frm = document.getElementById("task-form");
    // frm.reset(); // Reset all form data
  }
};

window.removeTask = function removetask(data) {
  let id;
  if (!data.id) {
    id = data;
  } else {
    id = data.id;
  }
  const temp = [];
  tasks.forEach((task) => {
    if (task.id !== id) {
      temp.push(task);
    }
  });
  tasks = temp;
  window.updateLocalStorage(true);
};

window.clear = function clear() {
  const temp = [];
  tasks.forEach((task) => {
    if (task.completed !== true) {
      temp.push(task);
    }
  });
  tasks = temp;
  updateLocalStorage(true);
};

window.markcompleted = function markcompleted(id) {
  console.log("Mark completed");
  console.log(id);
  tasks.find((task) => task.id === id).completed = true;
  console.log(tasks);
};

/**       UpdateLocalStorage saves and retrieves from local storage       */
window.updateLocalStorage = function updateLocalStorage(remove) {
  if (remove !== true) {
    if (tasks === null) {
      tasks = JSON.parse(window.localStorage.getItem("tasks"));
      console.log("Get local storage");
      console.log(tasks);
    }
  }

  window.localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log("local storage: ");
  console.log(tasks);
  displayTasks();
};

/**       Display tasks is used to show the Task collection      */
function displayTasks() {
  const container = document.getElementById("container");
  const list = document.createElement("ul");
  const EnterImg = "&#8629";
  if (tasks) {
    list.id = "list";
    console.log(list);

    tasks.forEach((task, index) => {
      const { description, id, completed } = task;
      const liId = `li${index}`;
      const taskCard = `<li id=${liId} >
              <div class="task"> 
                 <input  type="checkbox" name=${id}   id=${id} />   
                 <h6 class="description">${description}</h6> 
                 <button class="refresh-btn" id="refresh-btn" type="button"> 
                  <img class="add-btn-img" src=${MoreImg} alt="" /> 
                 </button>
                </div>             
              </div>
             </li>`;
      list.insertAdjacentHTML("beforeend", taskCard);
    });
  }

  const template = `
  <div class="top">
  <h1 class="title">Today's To Do</h1>
           <button id="refresh-btn" type="button" 
            type="button"> 
            <img class="add-btn-img" src=${RecycleImg} alt="" /> 
            </button>
  </div>       
          <form onsubmit="window.addTask()" id="task-form">
            <input
              id="description"
              type="text"
              class="text"
              placeholder="Add to your list ..."
            />
            <button id="add-btn" type="submit" 
            type="button"> 
          ${EnterImg}
            </button>
          </form>       
          `;

  container.innerHTML = template;
  const buttonHtml = document.createElement("button");
  /// `<button id="clear-btn" class="clear-btn" onclick="window.clear()"></button>`;
  buttonHtml.id = "clear-btn";
  buttonHtml.classList.add("clear-btn");
  buttonHtml.onclick = "window.clear()";
  buttonHtml.textContent = "Clear completed tasks.";
  container.insertAdjacentElement("beforeend", list);
  container.insertAdjacentElement("beforeend", buttonHtml);
  console.log(container);
}

// This first function ensures that the document has being already created
document.addEventListener("DOMContentLoaded", () => {
  // const addBtn = document.getElementById("add-btn");
  // addBtn.addEventListener("click", addtask(), false);
  // console.log(addBtn);
});

updateLocalStorage();
displayTasks();

/**
 *
 *     <div class="task">
                <input type="checkbox" checked=${completed} name="check" id=${id} onclick="toDoList.markcompleted(${id})" />
                <h6>${description}</h6>
                    <button id="move${id}" onclick="toDoList.moveTask(${id})">
                    <div class="dots">
                     <div class="dot"></div>
                     <div class="dot"></div>
                     <div class="dot"></div>
                    </div>
                   </button>
              </div>
             </li>

                 const template = `
       <h1>Today's To Do</h1>
          <form id="task-form">
            <input
              id="description"
              type="text"
              class="text"
              placeholder="Add to your list ..."
            />
            <button id="add-btn" type="submit" onclick="toDoList.addTask()"><div class="circle"></div></button>
          </form>

        <button id="clearBtn" onclick="toDoList.clear()" >Clear all completed tasks.</button>`;

 */
