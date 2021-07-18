import { fireEvent, getByText } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import "regenerator-runtime/runtime";
import { displayTasks, updateLocalStorage } from "./test_files/index";

const fs = require("fs");
var jsdom = require("jsdom");
const { JSDOM } = jsdom;

displayTasks();

describe("Functions for testing text inputs", () => {
  const textInputs = global.document.getElementsByClassName("description");
  Array.from(textInputs).forEach((textInput) => {
    test("renders an Input Text element", () => {
      expect(textInput).not.toBeNull();
      expect(textInput).toBeInTheDocument();
    });
    test("focus In , inputs a text then focus Out  ", async () => {
      const oldText = textInput.value;
      fireEvent.focusIn(textInput);
      textInput.value = "The test text";
      fireEvent.input(textInput);
      fireEvent.focusOut(textInput);
      expect(textInput.value).not.toBe(oldText);
    });
  });
});

describe("Functions for testing checkbox inputs", () => {
  const checkInputs = global.document.getElementsByTagName("input");
  Array.from(checkInputs).forEach((checkInput) => {
    if (checkInput.type === "checkbox") {
      test("renders all the Input Checkbox element", () => {
        expect(checkInput).not.toBeNull();
      });
      test("tests all Input Checkbox element ", async () => {
        const oldState = checkInput.checked;
        fireEvent.click(checkInput);
        expect(checkInput.checked).not.toBe(oldState);
      });
    }
  });
});
