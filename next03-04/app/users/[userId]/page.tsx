/* eslint-disable func-style */
/* eslint-disable no-undef */
//folder named after prop that will be used name after parameter. get from param in url
import getUser from "@/lib/getUser";
import React from "react";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react"; //allows components to be viewed while others load
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId }
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;
  //console.log(user.name);

  //had to change this to user === undefined to make it work
  if (user === undefined) {
    return {
      title: "User not Found"
    };
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const usersData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  //const [user, userPosts] = await Promise.all([usersData, userPostsData]); valid but not current code
  const user = await usersData;

  if (user === undefined) {
    return notFound();
  }

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

//generate static parameters
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({
    userId: user.id.toString()
  }));
}
