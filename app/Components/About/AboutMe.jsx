import { ImageComponent } from "../ImageComponent";
import Image from "next/image";
import styles from "../../styles/aboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.aboutMeContent}>
        <div>
          <h2>
            {" "}
            Discover Who <b className={styles.purple}>I Am</b>{" "}
          </h2>
          <p>
            {" "}
            Hi  I&apos;m Natan Addis a passionate software engineer with a love
            for coding.{" "}
          </p>
          <p>
            {" "}
            My expertise lies in JavaScript, Node.js, and MongoDB, along with
            various frameworks and libraries such as React, Vue.js, Nuxt.js,
            Next.js, and Express. I&apos;m constantly seeking new challenges and
            opportunities to expand my skill set.{" "}
          </p>
          <p>
            {" "}
            Oh, and I might joke about my coffee habit, but the truth is, I
            thrive on coding and enjoy finding better ways to solve problems.{" "}
          </p>

          <p className={styles.quote}>
            If at First You Don&apos;t Succeed, Call It Version 1.0! 🛠️
          </p>

          <p className={styles.quote}>
            &quot;The only way to do great work is to love what you do&quot;{" "}
            <br /> -Steve Jobs
          </p>
        </div>
        <div className={`${styles.heroImg} ${styles.imgContainer}`}>
          {/* <Image
            src={ImageSrc} 
            height={400}
            width={400}
            alt={`Image of hero`}
            className={styles.img}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
