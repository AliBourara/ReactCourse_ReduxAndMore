import { useState } from "react";
import { FriendsType } from "../data";
import Button from "./Button";

interface FormAddFriendViewProps {
  onAddFriend: (friend: FriendsType) => void;
}
export default function FormAddFriend({ onAddFriend }: FormAddFriendViewProps) {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>(
    "https://i.pravatar.cc/48?u=118836"
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend: FriendsType = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>📷 Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
