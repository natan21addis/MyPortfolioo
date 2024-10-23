// "use client";
// import Link from "next/link";
// import styles from "../../styles/intro.module.css";
// import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
// import { GrLinkedinOption } from "react-icons/gr";
// import { BiLogoGmail } from "react-icons/bi";
// import { BsTwitter } from "react-icons/bs";

// import Image from "public/Assests/avatar-dark-purple.png";
// import { ImageComponent } from "../ImageComponent";
// import Tilt from "react-parallax-tilt";

// const Intro = () => {
//   const openInNewTab = (url) => {
//     window.open(url, "_blank", "noreferrer");
//   };
//   return (
//     <div className={styles.intro}>
//       <div className={styles.introMain}>
//         <div>
//           <h1>
//             Let me <span className={styles.purple}>introduce</span> myself
//           </h1>
//           <p>I somehow ended up coding and so far I enjoy it quite alot.</p>
//           <p>
//             The languages I use are
//             <b className={styles.purple}> JavaScript, HTML and CSS. </b>
//           </p>

//           <p>
//             In addition to that, the libraries and frameworks I use include{" "}
//             <b className={styles.purple}>
//               React.js, Next.js, Node.js and Express.js .
//             </b>
//           </p>

//           <p>
//             I prefer back-end over front-end, until I am two days deep into
//             solving a new to me express error and then somehow React is the best
//             thing ever 😆
//           </p>
//         </div>
//         <Tilt>
//           <ImageComponent
//             src={Image}
//             height={250}
//             width={250}
//             alt={"Main home page image"}
//           />
//         </Tilt>
//       </div>

//       <div className={styles.socials}>
//         <h2>Find me on</h2>
//         <p>
//           Feel free to <b className={styles.purple}>connect</b> with me.
//         </p>
//         <div className={styles.icons}>
//           <div>
//             <i onClick={() => openInNewTab("https://github.com/Ree-m")}>
//               <AiFillGithub />
//             </i>
//           </div>

//           <div>
//             <i
//               onClick={() =>
//                 openInNewTab("https://www.linkedin.com/in/reembsrat/")
//               }
//             >
//               <GrLinkedinOption />
//             </i>
//           </div>

//           {/* <div>
//             <i
//               onClick={() =>
//                 openInNewTab("https://twitter.com/Reem_Dev")
//               }
//             >
//               <BsTwitter />
//             </i>
//           </div> */}

//           <div>
//             <i onClick={() => (window.location = "mailto:reembsrat@gmail.com")}>
//               <BiLogoGmail />
//             </i>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Intro;
