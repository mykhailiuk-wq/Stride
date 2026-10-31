export function getHabits() {
  const habits = localStorage.getItem("habits");
  if (habits) {
    return JSON.parse(habits);
  }
  return [];
}

export function setHabits(habits) {
  localStorage.setItem("habits", JSON.stringify(habits));
}