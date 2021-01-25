import React, { Component } from "react";
import Particles from "react-particles-js";
import "../../styles/App.css"

class Canvas extends Component {
  state = { width: "0px", height: "0px" };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`
    });
  };
  render() {
    const { width, height } = this.state;
    console.log(width, height);
    return (
        <section className='animatedBg' >
      <Particles id="particle-canvas"
        {...this.state}
        params={{
          particles: {
            number: {
              value: 38,
              
            },
            color: {
             'value': ['#ff223e', '#5d1eb2', '#ff7300']
            },
            shape: {
              type: "circle",
             
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable:false,
                
              }
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              
              
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false
              },
              onclick: {
                enable: false
              },
              resize: true
            }
          },
          retina_detect: true
        }}
      />
   </section> );
  }
}

export default Canvas;
