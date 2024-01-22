import { useState } from "react";
import MembersList from "./components/MembersList";
import { MembersType, initialMembers } from "./data";
import Button from "./components/Button";
import FormAddMember from "./components/FormAddMember";
import MemberTasksView from "./components/MemberTasksView";

function App() {
  const [members, setMembers] = useState<MembersType[]>(initialMembers);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedMember, setSelectedMember] = useState<MembersType | null>(
    null
  );

  function handleAddMember(member: MembersType) {
    setMembers((members) => [...members, member]);
    setIsOpen(false);
  }
  function handleToggleButton() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handelSelectMember(member: MembersType) {
    setSelectedMember((currSelected) =>
      currSelected?.id === member.id ? null : member
    );
    setIsOpen(false);
  }
  function handleNewTask(newTask: string) {
    const id = crypto.randomUUID();
    setMembers((members) =>
      members.map((member) =>
        member.id === selectedMember?.id
          ? {
              ...member,
              task: {
                ...member.task,
                [id]: { id: id, content: newTask, state: false },
              },
            }
          : member
      )
    );
    setSelectedMember(null);
  }
  function handleCheckTasks(id: string) {
    if (selectedMember) {
      selectedMember.task[id].state = !selectedMember.task[id].state;
    }

    setMembers((members) =>
      members.map((member) =>
        member.id === selectedMember?.id ? selectedMember : member
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <MembersList
          members={members}
          onSelectMember={handelSelectMember}
          selectedMember={selectedMember}
        />
        {isOpen && <FormAddMember onAddMember={handleAddMember} />}
        <Button onClick={handleToggleButton}>
          {isOpen ? "Close" : "Add Member"}
        </Button>
      </div>
      {selectedMember && (
        <MemberTasksView
          onCheckTasks={handleCheckTasks}
          onNewTask={handleNewTask}
          selectedMember={selectedMember}
        />
      )}
    </div>
  );
}

export default App;
