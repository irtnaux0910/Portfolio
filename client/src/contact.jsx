// contact.jsx
// Xuan Tri Nguyen 
// 3013888576
// Duedate: Sep 26, 2024
export default function Contact() {

     return (
     <>
     
     <div className="introContent" >
     <h2 className="center">Contact Me</h2>
     <div id="intro" className="intro">
     <form id="contact-form" className="align">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required></input>
      <label for="email">Email:</label> 

      <input type="email" id="email" name="email" required></input>
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea> 
        <div class="centerbtn">
        <button  type="submit" >Contact Me</button>
        </div>      
    </form>
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
    