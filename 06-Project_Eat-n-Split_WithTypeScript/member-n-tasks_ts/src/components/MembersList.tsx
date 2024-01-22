import { MembersType } from "../data";
import Member from "./Member";

interface MembersListViewProp {
  members: MembersType[];
  onSelectMember: (member: MembersType) => void;
  selectedMember: MembersType | null;
}

const MembersList = ({
  members,
  onSelectMember,
  selectedMember,
}: MembersListViewProp) => {
  return (
    <ul>
      {members.map((member) => (
        <Member
          member={member}
          key={member.id}
          onSelectMember={onSelectMember}
          selectedMember={selectedMember}
        />
      ))}
    </ul>
  );
};

export default MembersList;
