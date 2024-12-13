"use client";
import Link from "next/link";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";

import getRouteTitle from "@/app/utils/GetRouteTitle";

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const pageTitle = getRouteTitle(pathname);

  return (
    <nav className={styles.navbar}>
      <Link key={"home"} href={"/"} className={styles.pageTitle}>
        {pageTitle.icon}
        <h1>{pageTitle.title}</h1>
      </Link>
      <button className={styles.menuButton}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </button>
    </nav>
  );
};

export default NavBar;
