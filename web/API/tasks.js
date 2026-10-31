export function getTasks() {
  const tasks = localStorage.getItem("tasks");
  if (tasks) {
    return JSON.parse(tasks);
  }
  return [];
}

export function setTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}