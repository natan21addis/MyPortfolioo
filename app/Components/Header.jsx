"use client";
import Link from "next/link";
import { BsPerson } from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose,AiOutlineMail,AiOutlineFundProjectionScreen, AiOutlineHome} from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "../styles/header.module.css";
const Header = () => {
  const router =useRouter()
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.header}>


      <div className={styles.logo}>
        <Link href={`/`} aria-label="Go to home page">
          <h1>NATHAN.</h1>
        </Link>
      </div>

      <div className={styles.navLinks} aria-label="Go to home page">
        <Link href={`/`}>
          <AiOutlineHome />
          Home
        </Link>

        <Link href={`/about`} aria-label="Go to about page">
          <BsPerson />
          About
        </Link>

        <Link href={`/projects`} aria-label="Go to projects page">
          <AiOutlineFundProjectionScreen />
          Projects
        </Link>

        <Link href={`/contact`} aria-label="go to contact page">
          <AiOutlineMail />
          Contact
        </Link>

      </div>

      <div className={styles.menu}>

        <div className={styles.menuButton}>
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu?<AiOutlineClose />:<GiHamburgerMenu />}
          </button>
        </div>

        
      {toggleMenu ? (
        <div className={styles.menuItems}>
         <Link href={`/`}>
          <AiOutlineHome />
          Home
        </Link>

        <Link href={`/about`}>
          <BsPerson />
          About
        </Link>

        <Link href={`/projects`}>
          <AiOutlineFundProjectionScreen />
          Projects
        </Link>

        <Link href={`/contact`}>
          <AiOutlineMail />
          Contact
        </Link>

        </div>
      ) : (
        ""
      )}
        
      </div>

    </div>
  );
};

export default Header;
