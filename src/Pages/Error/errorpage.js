import './errorpage.css'
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid} from '@material-ui/core'
import { useState, useEffect } from 'react'
import {FaExclamationCircle} from 'react-icons/fa'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import LoadingIcons from 'react-loading-icons'
import Particles from "react-tsparticles";


const ErrorPage =()=>{
     
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

    return <Grid className='errorpage' container>
       <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000"
          },
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        },
        fullScreen: {
          zIndex: -1
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            onDiv: {
              selectors: "#repulse-div",
              mode: "repulse"
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                force: 60
              }
            }
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            grab: {
              distance: 400
            },
            slow: {
              factor: 1,
              radius: 0
            }
          }
        },
        particles: {
          color: {
            value: "#ffffff"
          },
          links: {
            color: {
              value: "#ffffff"
            },
            distance: 150,
            enable: true,
            opacity: 0.4,
            shadow: {
              color: {
                value: "lime"
              }
            }
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200
              }
            },
            enable: true,
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out"
            }
          },
          number: {
            density: {
              enable: true
            },
            value: 80
          },
          opacity: {
            value: {
              min: 0.1,
              max: 0.5
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1
            }
          },
          shape: {
            options: {
              character: [
                {
                  fill: true,
                  font: "Font Awesome 5 Brands",
                  style: "",
                  value: [
                    ""
                  ],
                  weight: "400"
                },
                {
                  fill: true,
                  font: "Font Awesome 5 Free",
                  style: "",
                  value: [
                    ""
                  ],
                  weight: "900"
                }
              ],
              char: [
                {
                  fill: true,
                  font: "Font Awesome 5 Brands",
                  style: "",
                  value: [
                    ""
                  ],
                  weight: "400"
                },
                {
                  fill: true,
                  font: "Font Awesome 5 Free",
                  style: "",
                  value: [
                    ""
                  ],
                  weight: "900"
                }
              ],
              polygon: {
                sides: 5
              },
              star: {
                sides: 5
              },
              image: {
                height: 100,
                replaceColor: true,
                src: "https://particles.js.org/images/github.svg",
                width: 100
              },
              images: {
                height: 100,
                replaceColor: true,
                src: "https://particles.js.org/images/github.svg",
                width: 100
              }
            },
            type: "char"
          },
          size: {
            value: 16,
            animation: {
              speed: 10,
              minimumValue: 10
            }
          },
          stroke: {
            width: 1,
            color: {
              value: "#ffffff",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true
                }
              }
            }
          }
        }
      }}
    />
    <Grid className='errorpage-left' item xs={12} sm={6} >
        <div className='title'>Smart Connect</div>
    </Grid>
    <Grid className='errorpage-right' item xs={12} sm={6} >
        <h1 className='errorpage-title'>404</h1>
        <h1 className='errorpage-subtitle'>Page Not Found</h1>
        <div className='errorpage-options'>
            <Link to='/' className='errorpage-link'>
              <Button style={{color:"var(--color3)", border: "1px solid var(--color3)", fontSize:"0.8rem",  padding: "var(--btn-padding)"}}>
                Return to Home Page
              </Button>
            </Link>
            <Link to='/login' className='errorpage-link'>
              <Button style={{color:"var(--color3)", border: "1px solid var(--color3)", fontSize:"0.8rem", padding: "var(--btn-padding)"}}>
                Login
              </Button>
            </Link>
        </div>
    </Grid>
</Grid>
}

export default ErrorPage