// Selecting elements from the DOM
const form = document.getElementById("todo-form"); // Form element
const input = document.getElementById("todo-input"); // Input field for adding tasks
const todoList = document.getElementById("todo-list"); // UL element to hold the list of tasks
const deleteAllBtn = document.getElementById("delete-all-btn"); // Button to delete all tasks

// Event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const todoText = input.value.trim(); // Get trimmed value from the input field

  // Check if input field is not empty
  if (todoText !== "") {
    // Create a new list item for the task
    const todoItem = document.createElement("li");
    todoItem.textContent = todoText; // Set text content of the list item
    todoList.appendChild(todoItem); // Append the list item to the UL
    input.value = ""; // Clear the input field after adding the task

    // Create edit button for the task
    const editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fas fa-edit"></i>'; // Edit button icon
    editButton.classList.add("edit-btn"); // Add edit-btn class for styling
    todoItem.appendChild(editButton); // Append edit button to the list item

    // Create delete button for the task
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Delete button icon
    deleteButton.classList.add("delete-btn"); // Add delete-btn class for styling
    todoItem.appendChild(deleteButton); // Append delete button to the list item

    // Event listener for editing the task
    editButton.addEventListener("click", function () {
      const newText = prompt(
        "Edit task:",
        todoItem.firstChild.textContent.trim()
      ); // Prompt for new task text
      if (newText !== null && newText.trim() !== "") {
        todoItem.firstChild.textContent = newText.trim(); // Update task text if new text is not empty
      }
    });

    // Event listener for deleting the task
    deleteButton.addEventListener("click", function () {
      todoList.removeChild(todoItem); // Remove the list item from the UL
    });

    // Event listener for marking task as completed
    todoItem.addEventListener("click", function () {
      todoItem.classList.toggle("completed"); // Toggle the 'completed' class for visual indication
    });
  }
});

// Event listener for deleting all tasks
deleteAllBtn.addEventListener("click", function () {
  const confirmDelete = confirm("Are you sure you want to delete all tasks?"); // Confirmation dialog
  if (confirmDelete) {
    while (todoList.firstChild) {
      todoList.removeChild(todoList.firstChild); // Remove each child (task) from the UL
    }
  }
});
