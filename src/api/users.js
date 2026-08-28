//vite-project\src\api\users.js

export async function loadUsers() {
  try {
    const response = await fetch("/data.json");;
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = (await response.json())["users"];
    return users;   
    
  } catch (error) {
    console.error("Error:", error);
  }
}