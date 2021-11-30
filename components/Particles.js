import Particles from 'react-tsparticles'

export const ParticlesComponent = () => {
  function particlesInit(main) {
    console.log(main)

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  const particlesLoaded = (container) => {
    console.log(container)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      canvasClassName="particles"
      options={{
        background: {
          color: {
            value: 'none',
          },
        },
        fullScreen: {
          zIndex: -1,
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'repulse',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0,
              size: 0,
            },
            grab: {
              distance: 400,
            },
            repulse: {
              distance: 400,
            },
          },
        },
        particles: {
          color: {
            value: '#ffc700',
          },
          links: {
            color: {
              value: '#ffffff',
            },
            distance: 150,
            opacity: 0.4,
          },
          number: {
            density: {
              enable: true,
            },
            value: 100,
          },
          opacity: {
            random: {
              enable: true,
            },
            value: {
              min: 0,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0,
            },
          },
          size: {
            random: {
              enable: true,
            },
            value: {
              min: 0.5,
              max: 1.5,
            },
            animation: {
              speed: 1,
              minimumValue: 0.3,
            },
          },
        },
      }}
    />
  )
}
