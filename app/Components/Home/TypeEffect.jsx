"use client"
import Typewriter from 'typewriter-effect';
import styles from "../../styles/typeEffect.module.css"

const TypeEffect = () => {
  return (
    <div className={styles.typeEffect}>
      <Typewriter
      options={{
        strings: ["Software Developer", "Full-Stack Developer","Software Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed:45

      }}
    />
    </div>
    
  );
};

export default TypeEffect;
