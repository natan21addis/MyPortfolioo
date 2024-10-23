/* eslint-disable react/jsx-key */
import Project from "./Project";
import Stars from "../Stars";
import styles from "../../styles/projects.module.css";
import projectsData from "@/app/data/ProjectsData";

const Projects = () => {
  return (
    <div>
      <Stars />
      <div className={styles.projects}>
        <div className={styles.projectsTop}>
          <h2>
            My recent <b className={styles.purple}>work</b>
          </h2>
          {/* <p>Here are a few projects I&apos;ve worked on recently.</p> */}
        </div>
        {
          projectsData.map((project) => (
            <Project
              name={project.title}
              description={
                project.description}
              ImageSrc={project.ImageSrc}
              id={project.id}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))
        }
        {/* <Project
          name={"Amdb"}
          description={
            "Manga Verse is a manga viewing app that utilizes a microservice architecture,integrating the Jikan API for manga data retrieval and Puppeteer for chapter scraping. Developed with technologies like Next.js, Express.js, MongoDB, and Puppeteer, Manga Verse offers a seamless user experience. Its key features include user authentication, manga browsing with genre, popularity, and release date filtering options, and an immersive manga reading experience."
          }
          ImageSrc={`/Assests/Amdb/amdb.png`}
          id={1}
          githubLink={"https://github.com/switch247/amdb"}
          demoLink={"https://"}
        />

        <Project
        
          name={"Blogz"}
          description={
            "Blogz is a web application designed for bloggers to create and share their content with a wide audience. It provides a user-friendly interface and essential features for managing blog posts. The app is built using modern technologies such as React, Express, MongoDB, and Node.js, ensuring a scalable and efficient platform for bloggers. Blogz includes features like user authentication, post management, search capabilities, and a visually appealing user interface. "
          }
          ImageSrc={`/Assests/blogz/Screenshot 2023-08-18 135956.png`}
          id={2}
          githubLink={"https://github.com/switch247/Blog-App-MERN-frontend/tree/back"}
          demoLink={"https://bloghub-lcpx.onrender.com/"}
        />

        <Project
          name={"Bookio"}
          description={
            "Book Finder is a React application that leverages the Google Books API.The key feature of this app is its search functionality, allowing users to search for books by title, author, or publishing date. When a book is selected, detailed information about the book is displayed. Moreover, Book Finder is designed to be fully responsive, ensuring a seamless experience across various devices."
          }
          ImageSrc={`/Assests/bookio.booikio.png`}
          id={3}
          githubLink={"https://github.com/switch247/Bookio"}
          demoLink={"https://"}
        /> */}
      </div>
    </div>
  );
};

export default Projects;
