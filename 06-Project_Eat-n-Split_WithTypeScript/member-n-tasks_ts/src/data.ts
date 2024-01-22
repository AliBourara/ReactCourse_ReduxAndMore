export interface MembersType {
  id: string;
  name: string;
  image: string;
  task: { [key: string]: { id: string; content: string; state: boolean } };
}

export const initialMembers: MembersType[] = [
  {
    id: "118836",
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    task: {},
  },
  {
    id: "933372",
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    task: {},
  },
  {
    id: "499476",
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    task: {},
  },
];
