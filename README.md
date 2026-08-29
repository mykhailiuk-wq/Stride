# Stride — Frontend

**Stride** is a personal productivity web application designed to help users manage daily tasks, build habits, capture thoughts, and track their productivity over time.

The frontend is built with **React**, **JavaScript**, **Vite**, and **Tailwind CSS**, with a focus on a clean, distraction-free interface and responsive user experience.

---

## ✨ Features

* **Task Management** — create, complete, and organize daily tasks.
* **Habit Tracking** — track recurring habits and monitor consistency.
* **Notes & Journaling** — capture thoughts, notes, and daily reflections.
* **Productivity Dashboard** — view tasks, habits, and productivity statistics in one place.
* **Calendar** — navigate through dates and organize daily activities.
* **Analytics** — visualize productivity and task completion data.
* **Responsive UI** — designed to work across desktop and mobile screen sizes.
* **Reusable Components** — shared UI components for consistent design and behavior.

---

## 🎨 Design Principles

### Zero-Friction Interaction

Common actions should require as few steps as possible. Tasks and habits can be updated directly from the interface without unnecessary navigation or dialogs.

### Clear Visual Hierarchy

The interface separates different types of activity:

* **Tasks & Habits** — daily execution
* **Notes & Journal** — reflection and thoughts
* **Analytics** — long-term productivity overview

### Consistent Design System

Reusable components and Tailwind CSS utility classes are used to maintain consistent spacing, typography, colors, and interaction states throughout the application.

### Responsive Experience

The interface is designed to adapt to different screen sizes while keeping the main workflow simple and accessible.

---

## 🛠 Tech Stack

| Technology           | Purpose                           |
| -------------------- | --------------------------------- |
| **React**            | UI library                        |
| **JavaScript**       | Programming language              |
| **Vite**             | Development server and build tool |
| **Tailwind CSS**     | Styling and responsive design     |
| **React Router**     | Client-side routing               |
| **Chart.js**         | Productivity data visualization   |
| **React Chart.js 2** | React integration for Chart.js    |
| **LocalStorage**     | Client-side persistence           |

---

## 📁 Project Structure

```text
src/
├── api/                    # API and data-loading functions
│
├── components/             # Reusable React components
│   ├── Calendar.jsx        # Calendar component
│   ├── CustomButton.jsx    # Reusable button component
│   ├── CustomInput.jsx     # Reusable input component
│   ├── Form.jsx            # Form components
│   ├── Habits.jsx          # Habit tracking
│   ├── Histogram.jsx       # Productivity histogram
│   ├── PieChart.jsx        # Task statistics
│   ├── Task.jsx            # Individual task
│   └── Tasks.jsx           # Task list
│
├── pages/                  # Application pages
│   ├── Dashboard.jsx
│   └── ...
│
├── App.jsx                 # Root application component
├── main.jsx                # Application entry point
│
├── data.json               # Development data
└── ...
```

> The structure may evolve as the application grows and new features are introduced.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) 18+
* npm

### 1. Clone the repository

```bash
git clone https://github.com/your-username/stride-frontend.git
cd stride-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

---

## 📊 Main Modules

### Tasks

The task management system allows users to:

* Create tasks
* Mark tasks as completed
* Track task status
* Organize daily activities
* Display tasks in a centralized dashboard

### Habits

The habit tracker is designed for recurring activities and long-term consistency.

Planned functionality includes:

* Habit creation
* Daily habit completion
* Streak tracking
* Habit history

### Calendar

The calendar provides a visual representation of dates and allows users to navigate between months.

### Analytics

Productivity data is represented using charts to make progress easier to understand.

Current visualizations include:

* Task completion statistics
* Productivity histograms
* Progress overview

### Dashboard

The dashboard combines the main productivity tools into a single workspace:

```text
┌─────────────────────────────────────────────┐
│                   Dashboard                 │
├─────────────────┬───────────────────────────┤
│     Tasks       │        Calendar           │
│                 │                           │
├─────────────────┼───────────────────────────┤
│     Habits      │       Analytics           │
│                 │                           │
└─────────────────┴───────────────────────────┘
```

---

## 🧩 Component Architecture

Stride follows a component-based architecture where UI elements are split into small, reusable React components.

For example:

```text
Dashboard
├── Tasks
│   └── Task
├── Calendar
├── Habits
├── PieChart
└── Histogram
```

This approach makes individual components easier to:

* Reuse
* Test
* Maintain
* Extend

---

## 🔮 Future Improvements

Planned improvements may include:

* User authentication
* Backend API integration
* Persistent database storage
* Advanced habit statistics
* Task priorities and categories
* Drag-and-drop task organization
* Dark mode
* Notifications and reminders
* More detailed productivity analytics
* Improved mobile experience

---

## 📄 License

This project is currently intended for educational and development purposes.

If the project is released as open source, the license will be specified here.
