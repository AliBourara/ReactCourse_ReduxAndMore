import FormAddTasks from "./FormAddTasks";
import Button from "./Button";
import { useState } from "react";
import { MembersType } from "../data";

interface MemberTasksViewProp {
  selectedMember: MembersType;
  onNewTask: (newTask: string) => void;
  onCheckTasks: (id: string) => void;
}

const MemberTasksView = ({
  selectedMember,
  onNewTask,
  onCheckTasks,
}: MemberTasksViewProp) => {
  const [showAddTaskForm, setShowAddTaskForm] = useState<boolean>(false);
  function handleShowAddTaskForm() {
    setShowAddTaskForm((showAddTaskForm) => !showAddTaskForm);
  }
  return (
    <div className="col-12 p-5" style={{ backgroundColor: "#E6F1FF" }}>
      <div className="card p-3 mb-3" style={{ backgroundColor: "#FFF4E6" }}>
        <h2 className="text-center">{selectedMember.name}'s Tasks</h2>
        <ul>
          {Object.keys(selectedMember.task).length === 0 ? (
            <h3 className="text-danger text-center my-4">No Task Assigned</h3>
          ) : (
            Object.values(selectedMember.task).map((task, index) => (
              <li className="h3 my-4 text-primary d-flex gap-4" key={index}>
                <input
                  type="checkbox"
                  value={task.state}
                  onChange={() => onCheckTasks(task.id)}
                />
                {task.content} {task.state}
                <span>❌</span>
              </li>
            ))
          )}
        </ul>
      </div>
      {showAddTaskForm && <FormAddTasks onNewTask={onNewTask} />}
      <Button onClick={handleShowAddTaskForm}>
        {showAddTaskForm ? "Close" : "Add Task"}
      </Button>
    </div>
  );
};

export default MemberTasksView;
