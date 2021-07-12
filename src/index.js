import './style.css';
import RecycleImg from './recycle.svg';
import MoreImg from './more.svg';
import TrashImg from './delete.svg';

let tasks = null;

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

  const position = tasks.length + 1;

  if (tasks && description !== '') {
    const task = {
      description,
      completed,
      position,
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

window.editTask = function editTask(data) {
  const list = document.getElementsByTagName('li');

  Array.from(list).forEach((li) => {
    if (li.id === data.id) {
      li.style.backgroundColor = '#fff59c78';
      const img = li.getElementsByTagName('img')[0];

      img.src = TrashImg;
    } else {
      li.style.backgroundColor = 'white';
      const img = li.getElementsByTagName('img')[0];
      img.src = MoreImg;
    }
  });
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
  window.updateLocalStorage(true);
};

window.markcompleted = function markcompleted(id) {
  tasks.find((task) => task.id === id).completed = true;
};

/**       UpdateLocalStorage saves and retrieves from local storage       */
window.updateLocalStorage = function updateLocalStorage(remove) {
  if (remove !== true) {
    if (tasks === null) {
      tasks = JSON.parse(window.localStorage.getItem('tasks'));
    }
  }

  window.localStorage.setItem('tasks', JSON.stringify(tasks));
  window.displayTasks();
};

/**       Display tasks is used to show the Task collection      */
window.displayTasks = function displayTasks() {
  const container = document.getElementById('container');
  const list = document.createElement('ul');
  const EnterImg = '&#8629';
  if (tasks) {
    list.id = 'list';
    tasks.forEach((task, index) => {
      const { description, id } = task;
      const liId = `li${index}`;
      const taskCard = `<li id=${liId} onclick="window.editTask(${liId})" >
              <div class="task"> 
                 <input  type="checkbox" name=${id}   id=${id} />               
                     <input
                      id="li-description-${id}"
                      type="text"
                      class="description"
                      placeholder=${description}
                    />
                 <button class="edit-btn" id="edit-btn-${id}" type="button"> 
                  <img class="add-btn-img" src=${MoreImg} alt="" /> 
                 </button>
                </div>             
              </div>
             </li>`;
      list.insertAdjacentHTML('beforeend', taskCard);
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
  /// `<button id="clear-btn" class="clear-btn" onclick="window.clear()"></button>`;
  buttonHtml.id = 'clear-btn';
  buttonHtml.classList.add('clear-btn');
  buttonHtml.onclick = 'window.clear()';
  buttonHtml.textContent = 'Clear completed tasks.';
  container.insertAdjacentElement('beforeend', list);
  container.insertAdjacentElement('beforeend', buttonHtml);
};

window.updateLocalStorage();
window.displayTasks();
