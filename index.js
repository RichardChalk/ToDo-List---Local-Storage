// Model - Model - Model - Model - Model - Model - Model - Model - Model
// Model - Model - Model - Model - Model - Model - Model - Model - Model
// Model - Model - Model - Model - Model - Model - Model - Model - Model
// Model - Model - Model - Model - Model - Model - Model - Model - Model

// If local storage has a todos array use it....
// Otherwise use demo array
let todos;

// Collect from local storage (parse string to array)

// If you wish to empty local storage run this command
// localStorage.clear();

const savedToDos = JSON.parse(localStorage.getItem("todos"));
if (Array.isArray(savedToDos)) {
  todos = savedToDos;
} else {
  todos = [
    {
      title: "Todo example #1",
      dueDate: "2022-08-21",
      id: "ex1",
    },
    {
      title: "Todo example #2",
      dueDate: "2022-09-28",
      id: "ex2",
    },
    {
      title: "Todo example #3",
      dueDate: "2022-11-11",
      id: "ex3",
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

// Deletes a todo
const removeTodo = (idToDelete) => {
  todos = todos.filter((todo) => {
    // If the id of this todo matches idToDelete, return false
    // For everything else, return true
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
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

  createTodo(title, dueDate);
  render();
};

const deleteToDo = (event) => {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  removeTodo(idToDelete);
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

    // Add delete functionality
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="bi bi-trash3"></i>';
    deleteButton.classList = "btn btn-danger";
    deleteButton.onclick = deleteToDo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);

    const todoList = document.getElementById("todo-list");
    todoList.appendChild(element);
  });
};

// Called to display todo list in html
render();
