"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { getUsers } from "@/app/todos/_actions/getUsers";
import { User } from "@/types/User";

import UserCard from "./UserCard";

type UserListProps = {
  initialUsers: User[];
};

/**
 * @description
 * 더 불러올 갯수
 */
const NUMBER_OF_USERS_TO_FETCH = 10;

export default function UserList({ initialUsers }: UserListProps) {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [offset, setOffset] = useState(NUMBER_OF_USERS_TO_FETCH);

  /**
   * @description
   * Intersection Observer
   */
  const { ref, inView } = useInView();

  const loadMoreUsers = async () => {
    /**
     * @description
     * Server action 으로 추가 fetching.
     * 서버에서 실행됨. 터미널 로그 확인
     */
    const apiUsers = await getUsers(offset, NUMBER_OF_USERS_TO_FETCH);

    // 서버에서 불러온 데이터로 상태 변경 -> 리렌더링
    setUsers([...users, ...apiUsers]);
    setOffset(offset + NUMBER_OF_USERS_TO_FETCH);
  };

  useEffect(() => {
    if (inView) {
      loadMoreUsers();
    }
  }, [inView]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <div ref={ref}>Loading...</div>
      {/* <button onClick={loadMoreUsers}>Load more</button> */}
    </div>
  );
}
