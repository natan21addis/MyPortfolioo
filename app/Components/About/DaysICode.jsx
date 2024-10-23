"use client"
import GitHubCalendar from "react-github-calendar"
import styles from "../../styles/daysICode.module.css"

const DaysICode = () => {
  const theme = {
    light:["#fff", "#c084f5", "#b27be4","#79549d","#422e58"]
  };

  return (
    <div className={styles.container}>
        <h2>Days I <b className={styles.green}>code</b></h2>

        <GitHubCalendar
        username="natan21addis"
        blockSize={15} 
        blockMargin={5}
        colorScheme='light' 
        theme={theme}
        fontSize={16}
        className={styles.github}

      />
    </div>
  )
}

export default DaysICode