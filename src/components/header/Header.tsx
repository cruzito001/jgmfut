import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          JGM<span>FUT</span>
        </a>
        <nav className={styles.nav}>
          <a href="/downloads">All Mods</a>
          <a href="/faq">FAQ</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
