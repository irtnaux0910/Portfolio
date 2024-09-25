// about.jsx
// Xuan Tri Nguyen 
// 3013888576
// Duedate: Sep 26, 2024
import React from 'react';
export default function About() {

      return (
        <>       
        <div className="introContent" >
        <h2 className="center">About Me</h2>
     <div id="intro" className="intro">
     <div id="contact-form" className="align">
         
         <div class="about-container">
        <section class="about-image">
          
        
        <img src='../src/assets/avatar.jpg' alt="profile"  width="200px" height="300px" align="right" />
        </section>
        <section class="about-text">
            <h2>My name is Xuan Tri Nguyen</h2>
            <p>I am a Software Engineering Technology student passionate about developing applications<br></br> that are both functional and visually appealing, with strengths in interface design, debugging/QA and Agile practices .</p>
            <a href="../src/assets/Xuan Tri Nguyen - Resume.pdf" class="download-resume-btn">Download Resume</a>
        </section>
    </div>
    </div>
      </div>
      </div>
     
             <footer>
        <hr/>
    <ul class="social-media">
    <li><a href="https://www.linkedin.com/in/xuan-tri-nguyen-253046309/"><img src="../src/assets/LinkedIn_icon.jpg" alt="LinkedIn"></img></a></li>
    <li><a href="https://github.com/irtnaux0910"><img src="../src/assets/GitHub_icon.png" alt="LinkedIn"></img></a></li>
  </ul>
  <p>&copy; 2024 Xuan Tri Nguyen. All rights reserved.</p>
</footer>
        </>
      );
    }
    