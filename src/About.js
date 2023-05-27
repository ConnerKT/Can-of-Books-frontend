import React from "react";
import JaredPNG from "./assets/jaredpng.png";
import ConnerPNG from "./assets/conner.jpg";
import "./About.css";
import Github from "./assets/github-logo.png"
import Linkedin from "./assets/linkedin-logo.png"

export default function About() {
    return (
        <div id="aboutContainer">
          {/* Personal information for Jared */}
          <div style={{ display: 'flex', alignItems: 'center' }} id="jaredAbout">
            <img class="personalPhotos" src={JaredPNG} alt="PNG of Jared" />
            <div style={{ marginLeft: '10px' }}>
              <p>Hi! My name is Jared Plummer. I know HTML, CSS, and JavaScript. I'm from Memphis and I play 2 instruments. I am excited to learn more coding languages.</p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href="https://www.linkedin.com/in/jared-plummer-8a9878251/"><img class="socialMedia" src={Linkedin} alt="Linkedin" /></a>
                <a href="https://github.com/JaredPlummer5"><img class="socialMedia" src={Github} alt="Github" /></a>
              </div>
            </div>
          </div>
    
          {/* Personal information for Conner */}
          <div style={{ display: 'flex', alignItems: 'center' }} id="connerAbout">
            <img class="personalPhotos" src={ConnerPNG} alt="PNG of Conner" />
            <div style={{ marginLeft: '10px' }}>
              <p>Hey! My name is Conner Thompson, I'm a Programmer who loves programming, I'm from Memphis and I play videos games from time to time. I'm looking forward to my growth!</p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href="https://www.linkedin.com/in/connerkt/"><img class="socialMedia" src={Linkedin} alt="Linkedin" /></a>
                <a href="https://github.com/ConnerKT"><img class="socialMedia" src={Github} alt="Github" /></a>
              </div>
            </div>
          </div>
        </div>
      );
    }
