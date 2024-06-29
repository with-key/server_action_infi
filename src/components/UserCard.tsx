import { User } from "../types/User";

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  return (
    <div style={{ border: "1px solid red" }}>
      <div>{user.id}</div>
      <div>{user.first_name}</div>
      <div>{user.last_name}</div>
      <div>{user.phone}</div>
      <div>{user.email}</div>
    </div>
  );
}
