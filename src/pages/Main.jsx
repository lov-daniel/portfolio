import './pages-style/Main.css';
import ProjectCarousel from '../components/ProjectCarousel.jsx';

function Main() {
  return (
    <div className="main-container">
      {/* Left Side: Image + Social Media */}
      <div className="left-side">
        <div>
            <img src="profile-photo.jpg" alt="Daniel Lov" className="profile-image" />
        </div>
        <h1>Daniel Lov</h1>
        <h2>Computer Science</h2>
        <div className="social-links">
        <a href="https://github.com/lov-daniel" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="GitHub" className="social-logo" /> GitHub 
            <p className='invisible'>____________________</p>
        </a>
        <a href="https://www.linkedin.com/in/daniel-lov-512bb7292/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="LinkedIn" className="social-logo" /> LinkedIn
            <p className='invisible'>____________________</p>
        </a>
          <a href="mailto:lovdaniel11@gmail.com">
            <img src="email.png" alt="Email" className="social-logo-mail"/> Email
            <p className='invisible'>____________________</p>
          </a>
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="middle-side">
        <h1 className='typewriter-animated'>Hello there!</h1>
        <h2>About me</h2>
        <p>
            Hello! I'm Daniel Lov, I am currently a second year computer science major here at UC San Diego.
            Currently seeking a software engineering internship to contribute to innovative development projects and solve complex problems, while expanding coding skills. 
            Proactive and collaborative, with a passion for refining code bases and leveraging academic knowledge to deliver impactful solutions in a dynamic, forward-thinking environment.
        </p>
        <br/>
        <h2>Current Projects</h2>
        <div>
            <ProjectCarousel/>
        </div>
        <br/>
        <h2>Personal Interests</h2>
      </div>
    </div>
  );
}

export default Main;
