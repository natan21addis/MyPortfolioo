"use client"
import Link from "next/link"
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import styles from "../../styles/projectBtns.module.css"

const ProjectBtns = ({githubLink,demoLink}) => {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };


  return (
    <div className={styles.btns}>
            <button onClick={() => openInNewTab(githubLink)}>
              <AiFillGithub />
              Github
            </button>

            <button onClick={() => openInNewTab(demoLink)}>
              <CgWebsite />
              Live
            </button>
    </div>
  )
}

export default ProjectBtns