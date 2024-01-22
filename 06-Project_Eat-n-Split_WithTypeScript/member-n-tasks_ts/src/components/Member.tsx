import { MembersType } from "../data";
import Button from "./Button";

interface MemberViewProps {
  member: MembersType;
  onSelectMember: (member: MembersType) => void;
  selectedMember: MembersType | null;
}

const Member = ({
  member,
  onSelectMember,
  selectedMember,
}: MemberViewProps) => {
  const isSelected: boolean = selectedMember?.id === member.id;
  const renderHeader = () => {
    return (
      <>
        <img src={member.image} alt={member.name} />
        <h3>{member.name}</h3>
      </>
    );
  };
  const renderTasksNumber = () => {
    return (
      <>
        {Object.keys(member.task).length <= 0 && (
          <p className="red">No Tasks Assigned</p>
        )}
        {Object.keys(member.task).length > 0 && (
          <p className="green">Have {Object.keys(member.task).length} Tasks</p>
        )}
      </>
    );
  };
  const renderButton = () => {
    return (
      <Button onClick={() => onSelectMember(member)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    );
  };

  return (
    <li>
      {renderHeader()}
      {renderTasksNumber()}
      {renderButton()}
    </li>
  );
};

export default Member;
