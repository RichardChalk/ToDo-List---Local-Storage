// Model - Model - Model - Model - Model - Model - Model - Model - Model
// Model - Model - Model - Model - Model - Model - Model - Model - Model
// Model - Model - Model - Model - Model - Model - Model - Model - Model
// Model - Model - Model - Model - Model - Model - Model - Model - Model

// If local storage has a todos array use it....
// Otherwise use demo array
let todos;

// Collect from local storage
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
