/**      A function for editing the task description.       */
import { addTask, removeTask } from "./test_files/add_remove";
import { displayTasks, tasks } from "./test_files/index";

jest.mock("./test_files/add_remove");

displayTasks();

describe("Test task manager ->", () => {
  test("add 1 li element to the ul", () => {
    const input = global.document.getElementById("description");
    input.value = "Do stuff";
    const task = { id: 4, index: 4, description: "Do stuff", completed: true };

    const listBefore = global.document.getElementsByTagName("li");
    const lenB = listBefore.length;
    addTask(tasks);
    setTimeout(500, () => {
      const listAfter = global.document.getElementsByTagName("li");
      const lenA = listAfter.length;

      expect(lenA).toBe(lenB + 1);
    });
  });

  test("remove the li element from the ul", () => {
    const listBefore = global.document.getElementsByTagName("li");
    const lenB = listBefore.length;
    removeTask("div2", tasks);
    setTimeout(500, () => {
      const listAfter = global.document.getElementsByTagName("li");
      const lenA = listAfter.length;
      expect(lenB - 1).toBe(lenA);
    });
  });
});

//describe("Testing update tasks functions", () => {
//  const textInputs = global.document.getElementsByClassName("description");
//  const descriptions = ["Hunt one star", "Jump a river"];
//  let oldDescritions = [];
//  textInputs.forEach((input) => {
//    const description = input.value;
//    oldDescritions.push(description);
//  });

//  editTask = test("Input a description in the input text", () => {
//    expect(textInputs[0].get(0).props.value).toEqual("something");
//  });
//});
