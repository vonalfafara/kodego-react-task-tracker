const Task = ({ task, onDelete, onToggle }) => {
  let styles = "task";

  if (task.reminder) {
    styles += " reminder";
  }

  function deleteTask() {
    onDelete(task.id);
  }

  function toggleTask() {
    onToggle(task.id);
  }

  return (
    <div className={styles} onDoubleClick={toggleTask}>
      <h3>
        {task.text}
        <box-icon name="x-circle" color="red" onClick={deleteTask}></box-icon>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
