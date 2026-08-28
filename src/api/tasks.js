const STORAGE_KEY = "tasks";

export function loadTasks() {
    const storedTasks = localStorage.getItem(STORAGE_KEY);

    if (storedTasks) {
        return JSON.parse(storedTasks);
    }

    const tasks = storedTasks.map(task => ({
        id: task.taskId ?? task.id,
        name: task.name,
        deadline: task.deadline,
        isDone: Boolean(task.isDone),
        completedAt: task.completedAt ?? null,
    }));

    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));

    return tasks;
}

export function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function toggleTask(tasks, id) {
    const updatedTasks = tasks.map(task => {
        if (task.id !== id) return task;

        const isDone = !task.isDone;

        return {
            ...task,
            isDone,
            completedAt: isDone ? new Date().toISOString() : null,
        };
    });

    saveTasks(updatedTasks);

    return updatedTasks;
}