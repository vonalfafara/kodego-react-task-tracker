import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TasksPage from "./components/TasksPage";
import About from "./components/About";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasksFromServer();
    return () => {};
  }, []);

  async function getTasksFromServer() {
    const data = await getTasks();
    setTasks(data);
  }

  async function getTasks() {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();
    return data;
  }

  async function getTask(id) {
    const response = await fetch("http://localhost:3000/tasks/" + id);
    const data = await response.json();
    return data;
  }

  async function addTask(task) {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await response.json();
    console.log(data);

    getTasksFromServer();
  }

  async function deleteTask(id) {
    await fetch("http://localhost:3000/tasks/" + id, {
      method: "DELETE",
    });

    getTasksFromServer();
  }

  async function toggleReminder(id) {
    const taskToUpdate = await getTask(id);
    taskToUpdate.reminder = !taskToUpdate.reminder;

    await fetch("http://localhost:3000/tasks/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(taskToUpdate),
    });

    getTasksFromServer();
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header
          title="Task Manager"
          onShowAdd={() => setShowAddForm(!showAddForm)}
          showAdd={showAddForm}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <TasksPage
                tasks={tasks}
                showAdd={showAddForm}
                onAdd={addTask}
                onToggle={toggleReminder}
                onDelete={deleteTask}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
