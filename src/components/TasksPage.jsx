import Tasks from "./Tasks";
import AddTask from "./AddTask";

const TasksPage = ({ tasks, showAdd, onAdd, onToggle, onDelete }) => {
  return (
    <>
      {showAdd ? <AddTask onAdd={onAdd} /> : null}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
      ) : (
        <h3>No Tasks to show. Please add one</h3>
      )}
    </>
  );
};

export default TasksPage;
