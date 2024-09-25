// project.jsx
// Xuan Tri Nguyen 
// 3013888576
// Duedate: Sep 26, 2024
export default function Project() {
        return (
          <>
            <div className="introContent" >
            <h2 className="center">My Projects</h2>
     <div id="intro" className="intro">
     <div id="contact-form" className="align">
     <section class="projects">
        <div class="project">
        <a href="../src/assets/GUI.rar" download><img src="../src/assets/calculatorProject.png" alt="Project 1"></img></a>
            <div class="project-description">
                <h3>Scientific Calculator </h3>
                <p>Created a calculator app that converts units and solves basic math as well as scientific math.</p>
            </div>
        </div>
        <div class="project">
        <a href="../src/assets/Group Project.rar" download><img src="../src/assets/sqlProject.jpg" alt="Project 2"></img></a>
            <div class="project-description">
                <h3>E-commerce Database</h3>
                <p>A database that Co-developed allows business to view, update and edit the products in warehouse as well as the shipment status of online customers.</p>
            </div>
        </div>
        <div class="project">
        <a href="../src/assets/individualProject.rar" download><img src="../src/assets/retailPageProject.png" alt="Project 3"></img></a>
            <div class="project-description">
                <h3>Electronic Store Web Design</h3>
                <p>Designed a responsive, user-interactable, friendly UI for a bussines retailing electronics products.</p>
            </div>
        </div>
    </section>
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
    