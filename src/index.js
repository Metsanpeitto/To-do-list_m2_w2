import './style.css';
import RecycleImg from './recycle.svg';
import MoreImg from './more.svg';
import TrashImg from './delete.svg';
import { drag, drop, allowDrop } from './drag_drop.js';
import updateTasks from './status.js';

let tasks = null;

/**       Saves and retrieves from local storage       */
window.updateLocalStorage = function updateLocalStorage(retrieve) {
  if (retrieve === true) {
    if (tasks === null) {
      tasks = JSON.parse(window.localStorage.getItem('tasks'));
    }
  } else {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  window.displayTasks();
};

/**       Update the state of the tasks            */
window.update = function update() {
  const response = updateTasks();
  tasks = response;
};

/**       AddTask adds tasks to the tasks list      */
window.addTask = function addTask() {
  const str = document.getElementById('description').value;
  const firstLetter = str.charAt(0).toUpperCase();
  str.replace(str.charAt(0), firstLetter);
  const description = str;
  const completed = false;
  const date = new Date();
  const id = date.getMilliseconds();

  if (!tasks) {
    tasks = [];
  }

  const index = tasks.length + 1;

  if (tasks && description !== '') {
    const task = {
      description,
      completed,
      index,
      id,
    };
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
  }
};

function editTask(e) {
  const list = document.getElementsByClassName('drag-div');
  Array.from(list).forEach((li) => {
    if (li.id === e.currentTarget.id) {
      li.style.backgroundColor = '#fff59c78';
      const img = li.getElementsByTagName('img')[0];
      img.src = TrashImg;
    } else {
      li.style.backgroundColor = 'white';
      const img = li.getElementsByTagName('img')[0];
      img.src = MoreImg;
    }
  });
  window.updateLocalStorage(false);
}

window.clear = function clear() {
  const temp = [];
  tasks.forEach((task) => {
    if (task.completed !== true) {
      temp.push(task);
    }
  });
  tasks = temp;
  window.updateLocalStorage(false);
};

/**       Display tasks is used to show the Task collection      */
window.displayTasks = function displayTasks() {
  const container = document.getElementById('container');
  const list = document.createElement('ul');
  list.id = 'list';
  const EnterImg = '&#8629';

  if (tasks) {
    tasks.forEach((task, index) => {
      const { description, id } = task;
      // const taskCard = `<li id=${liId} onclick="window.editTask(${liId})" draggable="true" >
      const li = document.createElement('li');
      li.id = index;
      li.addEventListener('drop', (EventTarget) => {
        li.classList.remove('dragging');
        drop(EventTarget);
      });

      li.addEventListener('dragover', (EventTarget) => {
        allowDrop(EventTarget);
      });

      const div = document.createElement('div');
      const divId = `div${task.index}`;
      div.classList.add('task');
      div.id = divId;
      div.classList.add('drag-div');
      div.draggable = true;
      div.addEventListener('click', (divId) => editTask(divId));
      div.data = index;
      div.addEventListener('dragstart', (EventTarget) => {
        div.classList.add('dragging');
        drag(EventTarget);
      });

      const inputCheckbox = document.createElement('input');
      inputCheckbox.addEventListener('click', () => {
        window.update();
      });
      inputCheckbox.type = 'checkbox';
      inputCheckbox.name = task.id;
      inputCheckbox.id = `input-check-${id}`;
      inputCheckbox.checked = task.completed;

      const inputTask = document.createElement('input');
      inputTask.id = `li-description-${id}`;
      inputTask.type = 'text';
      inputTask.classList.add('description');
      inputTask.placeholder = description;
      inputTask.data = task.index;

      const button = document.createElement('button');
      button.classList.add('edit-btn');
      button.id = `edit-btn-${id}`;
      button.type = 'button';

      const img = document.createElement('img');
      img.src = MoreImg;
      img.alt = 'image';
      img.classList.add('add-btn-img');

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
  const buttonHtml = document.createElement('button');
  buttonHtml.id = 'clear-btn';
  buttonHtml.classList.add('clear-btn');
  buttonHtml.onclick = 'window.clear()';
  buttonHtml.textContent = 'Clear completed tasks.';
  container.insertAdjacentElement('beforeend', list);
  container.insertAdjacentElement('beforeend', buttonHtml);
};

window.updateLocalStorage(true);
window.displayTasks();
