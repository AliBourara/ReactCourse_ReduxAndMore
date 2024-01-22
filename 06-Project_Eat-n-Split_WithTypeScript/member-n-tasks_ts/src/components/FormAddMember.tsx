import { useState } from "react";
import { MembersType } from "../data";
import Button from "./Button";

interface FormAddMemberViewProp {
  onAddMember: (member: MembersType) => void;
}

const FormAddMember = ({ onAddMember }: FormAddMemberViewProp) => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>(
    "https://i.pravatar.cc/48?u=118836"
  );

  function handleSubmitMember(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newMember: MembersType = {
      name,
      image: `${image}?=${id}`,
      task: {},
      id,
    };
    onAddMember(newMember);
    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmitMember}>
      <label>🧑‍🤝‍🧑Member Name</label>
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
};

export default FormAddMember;
