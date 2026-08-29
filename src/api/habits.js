const STORAGE_KEY = "habits";

export function loadHabits() {
    const storedHabits = localStorage.getItem(STORAGE_KEY);

    if (storedHabits) {
        return JSON.parse(storedHabits);
    }

    const habits = storedHabits.map(habit => ({
        id: habit.habitId ?? habit.id,
        name: habit.name,
        deadline: habit.deadline,
        isDone: Boolean(habit.isDone),
        completedAt: habit.completedAt ?? null,
    }));

    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));

    return habits;
}

export function saveHabits(habits) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
}

export function toggleHabit(habits, id) {
    const updatedHabits = habits.map(habit => {
        if (habit.id !== id) return habit;

        const isDone = !habit.isDone;

        return {
            ...habit,
            isDone,
            completedAt: isDone ? new Date().toISOString() : null,
        };
    });

    saveHabits(updatedHabits);

    return updatedHabits;
}