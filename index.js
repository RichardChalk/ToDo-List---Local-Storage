// Model - Model - Model - Model - Model - Model - Model - Model - Model
// Model - Model - Model - Model - Model - Model - Model - Model - Model
// Model - Model - Model - Model - Model - Model - Model - Model - Model
// Model - Model - Model - Model - Model - Model - Model - Model - Model

// If local storage has a todos array use it....
// Otherwise use demo array
let todos;

// Collect from local storage (parse string to array)
const savedToDos = JSON.parse(localStorage.getItem("todos"));
if (Array.isArray(savedToDos)) {
  todos = savedToDos;
} else {
  todos = [
    {
      title: "Todo example #1",
      dueDate: "2022-08-21",
      id: ex1,
    },
    {
      title: "Todo example #2",
      dueDate: "2022-09-28",
      id: ex2,
    },
    {
      title: "Todo example #3",
      dueDate: "2022-11-11",
      id: ex3,
    },
  ];
}

const createTodo = (title, dueDate) => {
  const id = "" + new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id,
  });

  saveToDos();
};

// parses array to string and saves to local storage
const saveToDos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Controller - Controller - Controller - Controller - Controller
// Controller - Controller - Controller - Controller - Controller
// Controller - Controller - Controller - Controller - Controller
// Controller - Controller - Controller - Controller - Controller

const addTodo = () => {
  const textbox = document.getElementById("todo-title");
  const title = textbox.value;

  const datePicker = document.getElementById("date-picker");
  const dueDate = datePicker.value;

  createToDo(title, dueDate);
  render();
};

// View - View - View - View - View - View - View - View - View - View
// View - View - View - View - View - View - View - View - View - View
// View - View - View - View - View - View - View - View - View - View
// View - View - View - View - View - View - View - View - View - View

const render = () => {
  // empty the list
  document.getElementById("todo-list").innerHTML = "";

  todos.forEach((todo) => {
    const element = document.createElement("div");
    element.innerText = todo.title + " (" + todo.dueDate + ")";

    const todoList = document.getElementById("todo-list");
    todoList.appendChild(element);
  });

  render();
};
