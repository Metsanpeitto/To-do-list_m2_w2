import _ from "lodash";
import "./style.css";

class ToDoList {
  constructor() {
    this.tasks = null;
  }

  /**       AddTask adds tasks to the tasks list      */
  addtask() {
    const description = document.getElementById("description").value;
    const completed = false;
    const date = new Date();
    const id = date.getMilliseconds();

    if (!this.tasks) {
      this.tasks = [];
    }

    const position = this.tasks.length + 1;

    if (this.tasks && description !== "") {
      const task = {
        description,
        completed,
        position,
        id,
      };
      console.log("add task");
      console.log(task);
      this.tasks.push(task);
      this.tasks.sort((taskA, taskB) => {
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

      this.updateLocalStorage(false);
      const frm = document.getElementById("task-form");
      frm.reset(); // Reset all form data
    }
  }

  removetask(data) {
    let id;
    if (!data.id) {
      id = data;
    } else {
      id = data.id;
    }
    const temp = [];
    this.tasks.forEach((task) => {
      if (task.id !== id) {
        temp.push(task);
      }
    });
    this.tasks = temp;
    this.updateLocalStorage(true);
  }

  clear() {
    const temp = [];
    this.tasks.forEach((task) => {
      if (task.completed !== true) {
        temp.push(task);
      }
    });
    this.tasks = temp;
    this.updateLocalStorage(true);
  }

  markcompleted(id) {
    console.log("Mark completed");
    console.log(id);
    this.tasks.find((task) => task.id === id).completed = true;
    console.log(this.tasks);
  }

  /**       UpdateLocalStorage saves and retrieves from local storage       */
  updateLocalStorage(remove) {
    if (remove !== true) {
      if (this.tasks === null) {
        this.tasks = JSON.parse(window.localStorage.getItem("tasks"));
        console.log("Get local storage");
        console.log(this.tasks);
      }
    }

    window.localStorage.setItem("tasks", JSON.stringify(this.tasks));
    console.log(this.tasks);
    this.displayTasks();
  }

  /**       Display tasks is used to show the Task collection      */
  displayTasks() {
    const container = document.getElementById("container");
    const list = document.createElement("ul");
    if (this.tasks) {
      list.id = "list";
      console.log(list);
      this.tasks.forEach((task, index) => {
        const { description, id, completed } = task;
        const liId = `li${index}`;
        const taskCard = `<li id=${liId} >
              <div class="task">     
              <h6>${description}</h6>          
              </div>
             </li>`;
        list.insertAdjacentHTML("beforeend", taskCard);
      });
    }

    const template = `
       <h1>Today's To Do</h1>
          <di id="task-form">
            <input
              id="description"
              type="text"
              class="text"
              placeholder="Add to your list ..."
            />
            <button id="add-btn" type="button" ><div class="circle"></div></button>
          </di>  `;

    container.innerHTML = template;

    container.insertAdjacentElement("beforeend", list);
    console.log(container);
  }
}

/**       Initialize the class before calling its methods       */
const toDoList = new ToDoList();
toDoList.displayTasks();
// This first function ensures that the document has being already created
document.addEventListener("DOMContentLoaded", () => {
  const btnAdd = document.getElementById("add-btn");
  btnAdd.addEventListener(
    "click",
    () => {
      toDoList.addtask();
    },
    false
  );
  console.log("btnd adder");
  const removeBtn = document.getElementsByClassName("remove-btn");
  if (removeBtn.length !== 0) {
    removeBtn.forEach((button) => {
      button.addEventListener("click", toDoList.removetask(), false);
    });
  }
});

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
