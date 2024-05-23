"use client";
import Image from "next/image";
import styles from "../page.module.css";
import InnerNav from "../components/InnerNav";
import ProjectCard from "../components/ProjectCard";
import React, { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <main>
      <InnerNav />
      <div className="container p-5 mb-4  rounded-3">
        <div className="container-fluid py-5">
          <img src="/portfolio/16.svg" className={`img-fluid ${styles.imgWidth} `} />
        </div>
      </div>

  
      <div className="mx-5 px-5 py-5 my-5 text-center">
        <div  className=" container border-bottom border-black border-2">
          <h2>My Portfolio: From Zero to Hero</h2>

          <div className="d-flex justify-content-center ">
            <div className="d-flex flex-column mt-3 me-3 w-75">
              <h3> Overview</h3>
              <p>
               This is an look into ths design and build process of my full-stack developer portfolio.
              </p>
            </div>
            <div className="d-flex flex-column role ms-2 mt-3">
              <h3> Role</h3>
              <p> UX/UI Designer and Full-stack Developer</p>
        
              <div className = "container">
                <a href = "https://github.com/SieraMM/kindful" target="_blank" className="mx-3"><Image src="/github.svg" alt="Github" width="32" height ="32"/></a>
                <a href = "https://sieramm.github.io/kindful/" target="_blank"><Image src="/exLink.svg" alt="External link" width="32" height ="32"/></a>
              </div>
            </div>
          </div>
        </div>
     
      
   
    

        <div >

            <h2>Round 1: Brainstorming </h2>

            <p>My first assignment was to garner inspiration from already existing UX portfolios. I used Pinterest, Awwwards.com, Dribble, 
                and Behance mainly. Below is a picture of my original styleguide.  </p>
        </div>

        <div className="d-flex flex-column justify-contents-center">
            <img src="/portfolio/styleguide1.svg" className={`img-fluid ${styles.imgWidth} `}/>
        </div>
        <div className="container">

            <p>I designed a lo-fi prototype with the above images in mind. I wanted to keep my portfolio clean and simple.  I planned to illustrate a drawing of myself to put in 
                 the upper square next to the “About Me” blurb. Then three case study mockup pics would follow with alternating alignment to take up more space. The case studies would have photos interspered between short text blurbs. Here are the lo-fi and hi-fi versions.</p>
                 <div id="interviewCarousel" className="carousel carousel-dark  slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/portfolio/Portfolio homepage v2.svg"
                className={`d-block w-100 ${styles.imgWidth}`}
                alt="userResponse1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/portfolio/lofi2.svg"
                className={`d-block w-100 ${styles.imgWidth}`}
                alt="userResponse2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/portfolio/blueGreenMid.svg"
                className={`d-block w-100 ${styles.imgWidth}`}
                alt="userResponse3"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/portfolio/blueGreenMid2.svg"
                className={`d-block w-100 ${styles.imgWidth}`}
                alt="userResponse4"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#interviewCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#interviewCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
<h2> Iteration #2 </h2>
      <p> After seeing the full color portfolio I decided I needed more color and playful. I mean, this portfolio is supposed to show my personality. This design inclues a marquee and a visually stimulating card design with a horizontal scroll. </p>      
<div className="row mb-3">
  <div className="col">
          <img src="/portfolio/my be fav-1.svg" className={`img-fluid ${styles.imgWidth} `}/></div>
          <div className="col">
            <img src="/portfolio/my be fav-2.svg" className={`img-fluid ${styles.imgWidth} `}/> </div>
            </div>
            <div className="row">  
            <div className="col">       
            <img src="/portfolio/my be fav-3.svg" className={`img-fluid ${styles.imgWidth} `}/> </div>
            <div className="col">
            <img src="/portfolio/my be fav.svg" className={`img-fluid ${styles.imgWidth} `}/>  </div>
</div>
       <p> I built this version out quickly with Bootstrap 4 and some Javascript. I created many custom classes to create the look I wanted. </p>

       <h2> Iteration 3: Mobile First</h2>
       <p> I showed my homepage design to multiple potential users and recevied feedback that the color choices were too bold. So I moved forward with a simple design. I redesigned my style guide to clarify the color scheme and deisgn choices. </p>
       <img src="/portfolio/Style Tile 2.png" className={`img-fluid ${styles.imgWidth} `}/>
     <div className = "row">
     <div className = "col">
      <img src="/portfolio/iPhone 14 Plus - 2.svg" className={`img-fluid ${styles.imgWidth} `}/>
      </div>
      <div className = "col">
      <img src="/portfolio/Desktop - 10.svg" className={`img-fluid ${styles.imgWidth} `}/>
      </div>
      <div className = "col">
      <img src="/portfolio/WF Desktop Device Frame 3.svg" className={`img-fluid ${styles.imgWidth} `}/>
      </div>
     
      </div>

      <button class={`btn me-2 ${styles.cButton}`} type="button" >Github Repository</button>
      <button class={`btn me-2 ${styles.cButton}`} type="button" >View Site</button>

      <h2> But Wait There's More</h2>
      <p> THat is not the design of the portfolio you are on. And that's becuase after months of looking at that portfolio I wanted to change the design and update the infrastucre to Next.js. So I decided to change the design <i>again</i>.</p>

    </div> 
    </div>
      </main>
      )
      }