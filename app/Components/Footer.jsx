"use client";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { BiLogoGmail } from "react-icons/bi";
import {BsTwitter} from "react-icons/bs"

import styles from "app/styles/footer.module.css";
const Footer = () => {
  
  return (
    <div className={styles.footer}>
      <span className={styles.footerDetails}>Developed by Natan addis abebe</span>
      <span>Copyright © 2023 @natan_A</span>
      <div className={styles.footerIcons}>
       
        <a target="_blank" href="https://github.com/natan21addis" aria-label="See my GitHub account">
        <AiFillGithub />
        </a>

        <a target="_blank" href="@A_natan" aria-label="Contact me via Telegram">
        <GrLinkedinOption />
        </a>

        <a target="_blank" href="mailto:natan21@gmail.com.com" aria-label="Email me">
        <BiLogoGmail/>
        </a>


      </div>
    </div>
  );
};

export default Footer;
