"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { newFunction } from "./newFunction";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    return await newFunction({ engine });
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: "#0d0d0d", // hoặc đổi thành 'transparent'
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ff914d",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outMode: "out",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;

