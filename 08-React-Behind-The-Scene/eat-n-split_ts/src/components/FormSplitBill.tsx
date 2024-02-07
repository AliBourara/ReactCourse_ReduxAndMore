import { useState } from "react";
import { FriendsType } from "../data";
import Button from "./Button";

interface FormSplitBillViewProp {
  selectedFriend: FriendsType;
  onSplitBill: (value: number) => void;
}
type Users = "user" | "friend";
export default function FormSplitBill({
  selectedFriend,
  onSplitBill,
}: FormSplitBillViewProp) {
  const [bill, setBill] = useState<number>(0);
  const [paidByUser, setPaidByUser] = useState<number>(0);
  const paidByFriend: number = bill - paidByUser;
  const [whoIsPaying, setWhoIsPaying] = useState<Users | string>("user");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!bill || !paidByFriend) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💵 Bill Value</label>
      <input
        type="text"
        value={bill === 0 ? undefined : bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🕴️ Your Expence</label>
      <input
        type="text"
        value={paidByUser === 0 ? undefined : paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s Expense</label>
      <input
        type="text"
        disabled
        value={paidByFriend === 0 ? undefined : paidByFriend}
      />

      <label>🤑 Who is Paying The Bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
