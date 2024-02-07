import { FriendsType } from "../data";
import Button from "./Button";

interface FriendViewProps {
  friend: FriendsType;
  selectedFriend: FriendsType | null;
  onSelection: (friend: FriendsType) => void;
}
export default function Friend({
  friend,
  onSelection,
  selectedFriend,
}: FriendViewProps) {
  const isSelected: boolean = selectedFriend?.id === friend.id;

  const renderHeader = () => {
    return (
      <>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
      </>
    );
  };

  const renderBalanceState = () => {
    return (
      <>
        {friend.balance < 0 && (
          <p className="red">
            You Owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} Owe You ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} Are Even</p>}
      </>
    );
  };

  const renderButton = () => {
    return (
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    );
  };

  return (
    <li>
      {renderHeader()}
      {renderBalanceState()}
      {renderButton()}
    </li>
  );
}
