import AboutMe from "./AboutMe"
import Stars from "../Stars"
import Tech from "./Tech"
import DaysICode from "./DaysICode"
import styles from "../../styles/about.module.css"

const About = () => {
  return (
    <div className={styles.about}>
        <Stars/>
        <AboutMe/>
        <Tech/>
        <DaysICode/>
    </div>
  )
}




export default About