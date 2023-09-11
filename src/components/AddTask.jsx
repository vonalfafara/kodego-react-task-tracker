import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  function addTask(e) {
    e.preventDefault();

    if (!text) {
      alert("Please add a text for task name");
      return;
    }

    const newTask = {
      text,
      day,
      reminder,
    };

    onAdd(newTask);

    setText("");
    setDay("");
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={addTask}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Task Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add day and time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Add Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
