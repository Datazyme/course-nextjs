import React from "react";
import styles from "./styles.module.css";

export default function Aboutlayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    //displays global navbar and About nav bar beneath global
    <>
      <nav>About Nav Bar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
