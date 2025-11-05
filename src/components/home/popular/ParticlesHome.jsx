import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import React, { useCallback } from "react";

export default function ParticlesHome() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  return (
    <Particles
      className="absolute left-0 top-0 w-full h-full z-30"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: { value: "#ffffff" },
          links: {
            enable: true,
            distance: 140,
            color: "#ffffff",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
          opacity: {
            value: 0.5,
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
          },
          modes: {
            repulse: {
              distance: 100,
            },
            push: {
              quantity: 3,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
