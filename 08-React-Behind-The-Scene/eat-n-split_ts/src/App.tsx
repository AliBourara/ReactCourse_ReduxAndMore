import { useState } from "react";
import { FriendsType, initialFriends } from "./data";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  const [friends, setFriends] = useState<FriendsType[]>(initialFriends);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedFriend, setSelectedFriend] = useState<FriendsType | null>(
    null
  );
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handleAddFriend(friend: FriendsType) {
    setFriends((friends) => [...friends, friend]);
    setIsOpen(false);
  }
  function handleSelection(friend: FriendsType) {
    setSelectedFriend((currSelected) =>
      currSelected?.id === friend.id ? null : friend
    );
    setIsOpen(false);
  }
  function handleSplitBill(value: number) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {isOpen && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleToggle}>
          {isOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
