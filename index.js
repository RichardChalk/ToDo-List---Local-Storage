// Model - Model - Model - Model - Model - Model - Model - Model - Model
// Model - Model - Model - Model - Model - Model - Model - Model - Model
// Model - Model - Model - Model - Model - Model - Model - Model - Model
// Model - Model - Model - Model - Model - Model - Model - Model - Model

// If local storage has a todos array use it....
// Otherwise use demo array
let todos;

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
