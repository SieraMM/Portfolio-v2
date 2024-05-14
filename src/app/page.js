import Image from "next/image";
import styles from "./page.module.css";
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
export default function Home() {
  return (
    <main>
     < Navbar/>
     {/* "position-absolute top-50 start-50 translate-middle" */}
     <div data-bs-spy="scroll" data-bs-target="#navbar-home" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example  p-3 rounded-2 mx-5 px-5 py-5 my-5" tabindex="0">

<div className = " py-5 my-5 text-left">
  <div className="row">
    <div className = "col-8 w-50">
<h5> Hi, my name is</h5>
<h1> Siera Meaux. </h1>
<h1> I'm a Full-Stack Developer</h1>
<p className=" pt-4 fs-4">who doubles as a UX designer. I enjoy building accessible projects that make life simple. My passion for learning and following creative pursuits guides everything I do.
   I am currently volunteering at Code for Philly, working with the non-profit Vote Wise in updating their site. </p>

   </div>
{/* add a link ot my vote wise github contributions */}

<div className="col text-center align-content-center"  style={{color: "#FF807C"}}> this is an image placeholder</div>
</div>
</div>


<section id="scrollspyAbout" className=" text-center justify-content-center mx-5 px-5">
  <div className= "space" style={{height: "10vh"}}> </div>
  <h5 className="pb-4"> About Me</h5>
  <p className="fs-5">I became interested in software development while taking a certificate for UX/UI design in 2022. There I was introduced
     to basic front-end development. After the certificate, I decided to study software development because I was drawn to both the creative and problem-solving aspects of the job.
     Moreover, my UX/UI design background would help me create better projects individually or with teams. Since learning full-stack development, I’ve created websites 
      (including the one you’re on), multiple pull requests for volunteer projects, and various personal projects.</p>
  <p className="fs-5"> When I'm not coding, you can find me reading about fantasy worlds, experimenting with household cuisines,
   and soaking up inspiration from the world around me. I believe that a well-rounded approach to life fuels my creativity and adds depth to my work. </p>


<p className="fs-5">I am familiar with Agile methodologies as well as the following technologies:</p>
{/* this is the ever updating tool matrix */}
<div class="container text-center w-50 my mb-4 pb-4" style={{fontWeight:"bold"}}>
  <div class="row my-3">
    <div class="col">
      Javascript
    </div>
    <div class="col">
      React
    </div>
    <div class="col">
      Express
    </div>
  </div>
  <div class="row my-3">
  
    <div class="col">
      HTML
    </div>
    <div class="col">
      JQuery
    </div><div class="col">
      Mongoose
    </div>
  </div>
  <div class="row my-3">
  
  <div class="col">
    CSS
  </div>
  <div class="col">
    Node.JS
  </div><div class="col">
   MongoDB
  </div>
</div>
<div class="row my-3">
  
  <div class="col">
    Figma
  </div>
  <div class="col">
    Bootstrap 5
  </div><div class="col">
   Next.JS
  </div>
</div>
</div>
</section>
 
<div id="scrollspyWork" className= "space" style={{height: "10vh"}}> </div>
    <h5  className="pb-4 text-center"> Some Projects I've Worked On Recently</h5>
    <div className = "parentProject d-flex flex-column justify-content-center align-items-center my-4 ">
      <ProjectCard 
      image = "/portfolio/originalPortfolioCode.svg"
      title = "Portfolio Website"
      subtitle = "The process of designing and creating this website following the UX Design lifecycle through multiple iterations. This website aims to represent my work as a designer and engineer so far!" 
       />

<ProjectCard 
      image = "/kindful/iphone1 1.png"
      title = "Kindful"
      subtitle ="Spreading Kindness and Community through mutual and local collaboration (aid-giving).  This is a great example of my UX design process."
       />

<ProjectCard 
      image = "/njArt/poppyPattern.svg"
      title = "Expensify"
      subtitle = "A friendly customizable expense tracker that uses authentication to customize user experience." 
       />
     
    </div>
   
    <div className="container text-center w-50  my-5 pt-5">
      
    <Footer/>
  
    <small> Designed & Built by Siera Meaux</small>
    </div>
    </div>
    </main>
  );
}
