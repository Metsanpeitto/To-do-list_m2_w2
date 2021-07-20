/* --- This file contains the functions required to test the add and  remove tasks
*/

function addTask(tasks) {
  const str = global.document.getElementById("description").value;
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
  if (tasks && description !== "") {
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
    window.update(tasks);
  }
}

function removeTask(data, tasks) {
  const str = data.replace("div", "");
  const newTasks = [];
  tasks.forEach((task) => {
    if (task.index !== parseInt(str, 10)) {
      newTasks.push(task);
    }
  });
  global.update(newTasks);
}

/**   This is the module export required by Jest test      */

module.exports = { addTask, removeTask };
