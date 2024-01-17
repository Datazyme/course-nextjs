import React from "react";
import Link from "next/link";

//creates route and page at the same time
export default function About() {
  //throw new Error("not today");
  return (
    <>
      <h1>About</h1>
      <Link href="/">Link to Home Page</Link>
    </>
  );
}
