"use server";
import { UserAPIResponse } from "@/types/User";

export const getUsers = async (offset: number, limit: number) => {
  /**
   * @description
   * 서버 실행 여부 확인
   */
  console.log("server에서 실행됨");
  try {
    const url = `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${limit}`;
    const response = await fetch(url);
    const data = (await response.json()) as UserAPIResponse;
    return data.users;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error happened: ${error}`);
  }
};
