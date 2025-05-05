// Mock API for Expo Snack - api.js

// Initial sample data (add IDs)
let mockTasks = [
  {
    "id": 1,
    "title": "قراءة كتاب",
    "description": "قراءة فصل من كتاب تطوير الذات",
    "done": false,
    "user": "user1@example.com"
  },
  {
    "id": 2,
    "title": "مذاكرة برمجة",
    "description": "حل تمارين React Native",
    "done": true,
    "user": "user2@example.com"
  }
];

let nextId = 3; // Next ID to assign

// Simulate network delay
const simulateDelay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions
export const getTasks = async () => {
  await simulateDelay();
  console.log("[Mock API] getTasks called");
  // Return a copy to prevent direct modification
  return Promise.resolve([...mockTasks]);
};

export const addTask = async (task) => {
  await simulateDelay();
  if (!task || typeof task.title !== "string") {
    console.error("[Mock API] addTask failed: Invalid task data", task);
    return Promise.reject({ message: "Invalid task data" });
  }
  const newTask = {
    ...task,
    id: nextId++,
    done: task.done || false, // Ensure done status exists
  };
  mockTasks.push(newTask);
  console.log("[Mock API] addTask called, added:", newTask);
  return Promise.resolve(newTask);
};

export const deleteTask = async (id) => {
  await simulateDelay();
  const taskId = parseInt(id, 10);
  const initialLength = mockTasks.length;
  mockTasks = mockTasks.filter(t => t.id !== taskId);

  if (mockTasks.length < initialLength) {
    console.log(`[Mock API] deleteTask called for id: ${taskId}, task deleted.`);
    return Promise.resolve({ message: "Task deleted successfully", id: taskId });
  } else {
    console.error(`[Mock API] deleteTask failed: Task with id ${taskId} not found.`);
    return Promise.reject({ message: "Task not found" });
  }
};

export const updateTask = async (id, updatedTaskData) => {
  await simulateDelay();
  const taskId = parseInt(id, 10);
  const taskIndex = mockTasks.findIndex(t => t.id === taskId);

  if (taskIndex === -1) {
    console.error(`[Mock API] updateTask failed: Task with id ${taskId} not found.`);
    return Promise.reject({ message: "Task not found" });
  }

  // Update only provided fields, keep original id
  mockTasks[taskIndex] = { ...mockTasks[taskIndex], ...updatedTaskData, id: taskId };
  console.log(`[Mock API] updateTask called for id: ${taskId}, updated task:`, mockTasks[taskIndex]);
  return Promise.resolve(mockTasks[taskIndex]);
};

console.log("[Mock API] Initialized with sample data.");

