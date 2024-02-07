import { FriendsType } from "../data";
import Friend from "./FriendView";

interface FriendsViewProps {
  friends: FriendsType[];
  selectedFriend: FriendsType | null;
  onSelection: (friend: FriendsType) => void;
}
export default function FriendsList({
  friends,
  onSelection,
  selectedFriend,
}: FriendsViewProps) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
