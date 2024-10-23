"use client";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { BiLogoGmail } from "react-icons/bi";
import {BsTwitter} from "react-icons/bs"

import styles from "app/styles/footer.module.css";
const Footer = () => {
  
  return (
    <div className={styles.footer}>
      <span className={styles.footerDetails}>Developed by Abel Bekele Meaza</span>
      <span>Copyright © 2023 switch247</span>
      <div className={styles.footerIcons}>
       
        <a target="_blank" href="https://github.com/switch247" aria-label="See my GitHub account">
        <AiFillGithub />
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/abel-bekele-meaza/" aria-label="See my LinkedIn account">
        <GrLinkedinOption />
        </a>

        <a target="_blank" href="mailto:izzyabenabrown@gmail.com" aria-label="Email me">
        <BiLogoGmail/>
        </a>


      </div>
    </div>
  );
};

export default Footer;
