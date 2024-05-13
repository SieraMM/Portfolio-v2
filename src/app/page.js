import Image from "next/image";
import styles from "./page.module.css";
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
export default function Home() {
  return (
    <main className={styles.main} >
     < Navbar/>
     {/* "position-absolute top-50 start-50 translate-middle" */}
<section className="body mx-3 px-5 py-3">
<div className = " py-5 my-5 text-left">
  <div className="row">
    <div className = "col-8">
<h4 style={{color: "#FF807C"}}> Hi, my name is,</h4>
<h1> Siera Meaux. <br/> I'm a Full-Stack Developer</h1>
<p>who doubles as a UX designer. I enjoy in building accessible projects that make life more fun.
   I am currently  volunteering at Code for Philly, working with the non-profit Vote Wise in updating their site. </p>
   </div>
{/* add a link ot my vote wise github contributions */}
<div className="col text-center align-content-center"> this is an image placeholder</div>
</div>
</div>
<section className="aboutMe">
  <h4> About Me</h4>
  <p>I became interested in software development while taking a certificate for UX/UI design Nov 2022. There I was introduced
     to CSS, HTML, Bootstrap, and Javascript. After the certificate, I decided to study software development to make websites,
      and use my UX/UI skills to improve my work. Since learning full-stack development, I’ve created two full-stack websites 
      (including the one you’re on), multiple pull requests for volunteer projects, and many different personal projects.

<br/>
I am familiar with Agile methodologies as well as the following technologies:</p>
{/* this is the ever updating tool matrix */}
<div class="container text-center w-50 my-5" style={{fontWeight:"bold"}}>
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
    Bootstrap
  </div><div class="col">
   Next.JS
  </div>
</div>
</div>
</section>
 

    <h4> Some Projects I've Worked On Recently</h4>
    <div className = "parentProject d-flex justify-content-center  ">
      <ProjectCard 
      image = "../public/next.svg"
      title = "Portfolio Website"
      subtitle = "The process of designing and creating this website following the UX Design lifecycle
       and through the multiple iterations. This process also includes coding the website as a full stack 
       developer. This website aims to represent my work as a designer and engineer so far!" 
       />
      {/* <ProjectCard />
      <ProjectCard />
    <Callback /> */}
    </div>
    <p> Designed & Build by Siera Meaux</p>
    </section>
    </main>
  );
}
