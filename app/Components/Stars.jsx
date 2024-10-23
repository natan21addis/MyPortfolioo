"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

import styles from "app/styles/stars.module.css";

const Stars = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div className={styles.container}>
      <Particles
        className={styles.stars}
        init={particlesInit}
        loaded={particlesLoaded}
        params={{
          particles: {
            number: {
              value: 600, // Increased number of stars
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            color: {
              value: "#fff", // Light yellow color for stars
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 3, // Increased star size
              random: true,
              anim: {
                enable: true,
                speed: 20,
                size_min: 1,
                sync: false,
              },
            },
            opacity: {
              value: 0.8,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.1,
              direction: "none",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className={styles.moon}></div>
    </div>
  );
};

export default Stars;
