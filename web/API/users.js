//vite-project\web\api\users.js

export function getUsers() {
  const users = localStorage.getItem("users");
  if (users) {
    return JSON.parse(users);
  } 
  return [];
}

export function setUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}