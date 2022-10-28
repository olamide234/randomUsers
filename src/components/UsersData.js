import React from "react";
import { useQuery } from "react-query";
import Api from "../api/Api";
import PreLoader from './PreLoader'
import ErrorPage from './ErrorPage'

//api call
export const getUsers = async () => {
  try {
    const response = await Api.get("/api/");
    return response;
  } catch (error) {
    return error;
  }
};

export default function UsersData() {
  const { data: usersData, isLoading: usersLoading, isError } = useQuery(
    ["view-students"],
    getUsers
  );
  const usersInfo = JSON.stringify(usersData)
  console.log(usersData);
  return <>{usersLoading ? <PreLoader /> : <div>Users are available: {usersInfo}</div>}</>;
}
