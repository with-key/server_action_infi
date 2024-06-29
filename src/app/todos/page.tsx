import UserList from "@/components/UserList";
import { getUsers } from "./_actions/getUsers";

const INITIAL_NUMBER_OF_USERS = 10;

export default async function Home() {
  const initialUsers = await getUsers(0, INITIAL_NUMBER_OF_USERS);
  return <UserList initialUsers={initialUsers} />;
}
