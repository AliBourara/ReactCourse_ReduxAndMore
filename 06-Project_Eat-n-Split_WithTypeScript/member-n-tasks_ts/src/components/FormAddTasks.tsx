import { useState } from "react";
import Button from "./Button";

interface FormAddTasksViewProp {
  onNewTask: (newTask: string) => void;
}

const FormAddTasks = ({ onNewTask }: FormAddTasksViewProp) => {
  const [newtask, setNewTask] = useState<string>();
  function handleSubmitTask(e: React.FormEvent) {
    e.preventDefault();
    if (!newtask) return;
    onNewTask(newtask);
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmitTask}>
      <label>🫡Task</label>
      <input
        type="text"
        value={newtask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddTasks;
