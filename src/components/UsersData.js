import React, { useState } from "react";
import { useQuery } from "react-query";
import Api from "../api/Api";
import PreLoader from "./PreLoader";
import "../App.css";

//api call
export const getUsers = async ({ queryKey }) => {
  const { pageParam } = queryKey[1];
  try {
    const response = await Api.get(`/api/?page=${pageParam}&results=10`);
    return response;
  } catch (error) {
    return error;
  }
};

export default function UsersData() {
  const totalPages = 9;
  const [page, setPage] = useState(1);
  const pagesArray= []
  for (let i=1; i<=totalPages; i++){
    pagesArray.push(i)
  }
  console.log(pagesArray)
  const {
    data: usersData,
    isLoading: usersLoading,
    isError,
  } = useQuery(["view-students", { page: page }], getUsers);
  const usersInfo = usersData?.data?.results;
  return (
    <>
      {usersLoading ? (
        <PreLoader />
      ) : usersInfo?.length != 0 ? (
        <div className="article">
          {usersInfo?.map((user, index) => (
            <div className="article-box">
                <div className='image-container'><div><img src={user?.picture?.large} alt="profile_picture" /></div></div>
              
              <div className="article-content">
                <h4 className="article-author u-mb-small">
                  {user.name.title} {user.name.first} {user.name.last}
                </h4>
                <p className="article-excerpt ">
                  A {user.dob.age} years old {user.gender}, living in{" "}
                  {user.location.state}, {user.location.country}. You can reach
                  me via email at {user.email} and also {user.phone} on cell
                  phone.
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No available members</div>
      )}
      <div className="page-navigation">
        <button
          style={{
            backgroundColor: "#909877",
            padding: "0.5rem 2rem",
            borderRadius: "8px",
            marginRight: "0.3rem",
          }}
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          {" "}
          Prev
        </button>
        {pagesArray.map((pageNum)=><button
          style={{
            backgroundColor: "#909877",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            marginRight: "0.3rem",
          }}
          disabled={page === pageNum}
          onClick={() => {
            setPage(pageNum);
          }}
        >
          {pageNum}
        </button>)}
        {/* <span>
          Pages: {page} of {totalPages}
        </span> */}
        <button
          style={{
            backgroundColor: "#909877",
            padding: "0.5rem 2rem",
            borderRadius: "8px",
            // marginLeft: "1rem",
          }}
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          {" "}
          Next
        </button>
      </div>
    </>
  );
}

// ) : (
//     state?.lessons?.map((lesson) => {
//       return (
//         <LessonCardCreation lesson_title={lesson.lesson_title} lesson_contents={lesson.lesson_contents} />
//       )
//     })
//   )}
