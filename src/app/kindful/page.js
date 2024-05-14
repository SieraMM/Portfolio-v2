"use client";
import Image from "next/image";
import styles from "../page.module.css";
import InnerNav from "../components/InnerNav";
import ProjectCard from "../components/ProjectCard";
import React, { useEffect } from "react";

export default function Kindful() {
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
          <img src="/kindful/AP HOME.svg" className="img-fluid" />
        </div>
      </div>
      {/* end Jumbo--> */}
      <section className="body mx-5 px-5 py-3 text-center">
        <div className=" container border-bottom border-black border-2">
          <h2>Kindful: Spreading Kindness and Community</h2>

          <div className="d-flex justify-content-center ">
            <div className="d-flex flex-column mt-3 me-3 w-75">
              <h3> Overview</h3>
              <p>
                As the culmination of our bootcamp experience, my team of three
                other designers and I were tasked with creating a landing page,
                mobile app,and watch interface for any project we want. Let me
                introduce you to <i>Kindful</i>, an innovative platform designed
                to foster kindness and community engagement by asking for help.
                Our goal is to bolster mutual aid.
              </p>
            </div>
            <div className="d-flex flex-column role ms-2 mt-3">
              <h3> Role</h3>
              <p> User Research, Survey Design, Prototyping, Developing</p>
              <h3> Timeframe</h3>
              <p> 3 Weeks</p>
              <div className = "container">
                <a href = "https://github.com/SieraMM/kindful" target="_blank" className="mx-3"><Image src="/github.svg" alt="Github" width="32" height ="32"/></a>
                <a href = "https://sieramm.github.io/kindful/" target="_blank"><Image src="/exLink.svg" alt="External link" width="32" height ="32"/></a>
              </div>
            </div>
          </div>
        </div>

        <div className=" container mt-5 text-center">
          <h2>Brainstorming </h2>

          <p>
            Our instructors allowed us free reign ont his project. The only
            rules were that we needed to create a project that was compatible on
            two interfaces. So we kicked off this project with a brainstorming
            session. What app ideas do we have that we want to move forward
            with?{" "}
          </p>
        </div>

        <div className="d-flex flex-column justify-contents-center mx-auto w-50">
          <img src="/kindful/brainstorm.svg" className={styles.imgWidth} />
        </div>
        <div className="container">
          <p>
            We chose a mindfulness app, but decided that ours would be different
            from other apps by incorporating a points and rewards system. But
            that wasn’t enough. After explaining our idea to our teacher she
            suggested we don’t focus on mindfulness and instead maybe explore
            gratitude or kindness.
          </p>
          <p>
            {" "}
            So we created a proto-persona to have someone in mind while we
            crafted our survery and interview questions.
          </p>

          <h2> Meet Mara</h2>

          <p>
            {" "}
            Mara is a busy young professional who feels overwhelmed in her daily
            life. She wants to find a community to share the joy and struggles
            of life with.
          </p>
        </div>
        <div className="d-flex flex-column justify-contents-center">
          <img src="/kindful/meetMara.svg" className={styles.imgWidth} />
        </div>

        <div className="container">
          <p>
            So our next step was designing an <b>interview and survey </b>. We
            asked participants about their history with mindfulness apps, what
            they got out of them, and how/if they were still using the app. We
            also asked participants how they go about being kind in their daily
            life, how does it feel, and what stops them from being kind.
          </p>
          <p>
            I designed the survey on typeform. There were 10 responses. The
            following are some of the questions and their results.
          </p>
        </div>

        {/* Carousel */}
        <div id="interviewCarousel" className="carousel carousel-dark  slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/kindful/interview2.svg"
                className={`d-block w-100 ${styles.imgWidth}`}
                alt="userResponse1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/kindful/interview3.svg"
                className={`d-block w-100 ${styles.imgWidth}`}
                alt="userResponse2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/kindful/interview4.svg"
                className={`d-block w-100 ${styles.imgWidth}`}
                alt="userResponse3"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/kindful/interview5.svg"
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

        {/* End Carousel */}

        <div className=" container">
          <p>
            Our interviews gave us a lot of data. So we broke it up further into
            an affinity diagram.
          </p>
        </div>
        <div className="d-flex flex-column justify-contents-center imgWidth">
          <img
            src="/kindful/affinityDiagramOrdered.svg"
            className={styles.imgWidth}
            alt=" Final Affinity Diagram"
          />
          <small> Affinity Diagram</small>
        </div>

        <div className=" container ">
          <p>
            {" "}
            Using this data we crafted a user insight statement. Our user, who
            is concerned with people around her, needs a{" "}
            <b>simple and consistent</b>
            way to be kind to herself and others because she enjoys the feeling
            she gets from helping other people.
          </p>
          <h2> Meet Margaret Short</h2>
        </div>

        <div className="d-flex flex-column justify-contents-center imgWidth">
          <img
            src="/kindful/protoPersona.svg"
            alt="proto-persona"
            className={styles.imgWidth}
          />
        </div>
        <div className=" container ">
          <h2> Competitor Analysis</h2>
          <p>
            Before brainstorming the features for our app we conducted a
            competitor analysis to see what other successful apps are doing. Our
            direct competitors, <i>Calm</i> and <i>Headspace</i>, came from our
            interviews. Both <i>Calm</i> and <i>Headspace</i> have guided
            meditations and soundscapes to help with sleep and relaxation.{" "}
            <i>Calm</i> is the mindfulness app of choice for parents due to ease
            of use and sleep stories for kids.
            <i>Headspace</i> offers a structured path to mindfulness. Both apps
            are well-known, but several users (in our interviews, survey
            responses and even app reviews) mentioned not using either app
            beyond the free trial as they did not see the value in paying for
            the subscription. {" "}
          </p>

          <p>
            {" "}
            We used <i>Craigslist</i> and <i>Nextdoor</i> as indirect
            competitors. Though neither app was created with the intention of
            spreading kindness, they are both apps that people use to connect
            with their neighbors for various purposes, including
            buying/selling/trading items, sharing news, information and
            recommendations.
          </p>

          <h2> What Does Margaret Want?</h2>
          <p>
            {" "}
            With our user persona and competitor analysis in hand we
            brainstormed features that Margaret might want. Some of these ideas
            came straight from our interviews. Then we implemented dot voting to
            identify our favorite concepts that would best serve our users.
          </p>
        </div>
        <div className="d-flex flex-column justify-contents-center imgWidth">
          <img
            src="/kindful/featureList.svg"
            className={styles.imgWidth}
            alt=" Feature Analysis"
          />
          <small> Feature Analysis</small>
        </div>
        <div className=" container ">
          <p>
            Then came the <b>Feature Prioritization Matrix </b> to narrow down
            our ideas. From this, we decided the primary feature of our app
            would be facilitating opportunities for users to do kind acts for
            others in their community. Other features would be points, badges,
            and closing daily rings in order to encourage retention.
          </p>
        </div>
        <div className="d-flex flex-column justify-contents-center imgWidth">
          <img
            src="/kindful/featureAnalysis.svg"
            className={styles.imgWidth}
            alt=" Feature Prioritization matrix"
          />
          <small> Feature Prioritization matrix</small>
        </div>

        <div className="container">
          <h2> Margaret's Story</h2>
          <p>
            {" "}
            We developed a storyboard to further clarify our solution and how
            users would interact with our app.
          </p>
        </div>
        {/* <!--storyboard--> */}
        <div className="d-flex flex-column justify-contents-center imgWidth">
          <img
            src="/kindful/storyboard.svg"
            className={styles.imgWidth}
            alt=" Story Board"
          />
        </div>
        {/* <!--end storyboard--> */}

        <div className="container justify-content-center">
          <h2> Task Flows!</h2>
          <p>
            The Storyboard allowed us to create 4 main task flows for Margaret.{" "}
          </p>
        
        <div className="row justify-content-center">
          <div className="col">
            <div className="card mb-3">
              <img
                src="/kindful/taskFlow1.svg"
                className={styles.imgWidth}
                alt="task 1"
              />
              <div className="card-body">
                <h5 className="card-title">
                  1. Sign up for Kindful and view the tutorial onboarding
                  screens
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <div className="card mb-3">
              <img
                src="/kindful/taskFlow2.svg"
                className="card-img-top"
                alt="task 2"
              />
              <div className="card-body">
                <h5 className="card-title">
                  2. Complete an act of kindness for a neighbor
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <div className="card mb-3">
              <img
                src="/kindful/taskFlow3.svg"
                className="card-img-top"
                alt="task 3"
              />
              <div className="card-body">
                <h5 className="card-title">3. Request an act of Kindness</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <div className="card mb-3">
              <img
                src="/kindful/taskFlow4.svg"
                className="card-img-top"
                alt="task 4"
              />
              <div className="card-body">
                <h5 className="card-title">
                  4. View weekly Kindful status on an smartwatch
                </h5>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="container">
          <h2> Prototyping & Testing: Round 1</h2>
          <p>
            At this point we had a good idea of what our app was about. So now
            for the fun part -- 
            <b> Prototyping!</b>
          </p>
          <p>  Here are our <b>lo-fi wireframes</b>.
          </p>
        </div>
        <div className="d-flex flex-column justify-contents-center">
          <img
            src="/kindful/lo-fi wireframe.svg"
            alt="Lo-fi prototypes"
            className={styles.imgWidth}
          />
        </div>

        <div className="container">
          <p>
            {" "}
            Time for the first round of usability testing on our 4 tasks. We had
            4 different people test our lo-fi prototype. These were the goals:
          </p>
          <ol className="list-group list-group-numbered list-group-flush ">
            <li class="list-group-item">Sign up for the app </li>
            <li class="list-group-item">Complete an act of kindness</li>
            <li class="list-group-item">Request an act of kindness</li>
            <li class="list-group-item">Check weekly status on the apple watch app </li>
          </ol>
          <p>
            Though each user was able to sign up for the app, that task wasn’t
            without its hiccups. At this point in the prototyping process, we
            hadn’t added iOS UI so some users hesitated for a moment expecting
            keyboards to popup. We discovered we should rename our “task” page
            for user understanding so it was later renamed to “available acts of
            kindness.” Additionally there were opportunities to make our concept
            more clear by adding copy and images to our onboarding, home, and
            available acts of kindness screens.
          </p>
        </div>
    
    <div className="container w-50">

        <div className="row g-1 ">
            <div className="col m-2 p-2 rounded-3" style={{backgroundColor: "#CA68EC"}}>
                <h4 className="mt-3"> Task 1 </h4>
                <p> 100% success </p>
            </div>
            <div className="col m-2 p-2 rounded-3" style={{backgroundColor: "#CA68EC"}}>
                <h4 className="mt-3"> Task 2 </h4>
                <p> 62.5% success </p>
            </div>
        </div>
        <div className="row g-1">
            <div className="col m-2 p-2 rounded-3" style={{backgroundColor: "#CA68EC"}}>
                
                     <h4 className="mt-3"> Task 3 </h4>
                <p> 75% success </p>
               
            </div>
            <div className="col m-2 p-2 rounded-3" style={{backgroundColor: "#CA68EC"}}>
                <h4 className="mt-3"> Task 4 </h4>
                <p> 87.5% success </p>
            </div>

        </div>





    </div>


    <div className="container">
        <h2> Moodboard & Style Guide</h2>
        <p> We used Pinterest to collaborate on a mood board as a team. We wanted our app to feel bright and
            joyful. We selected imagery with colorful
            characters, expressive faces, highly saturated colors, and geometric shapes. We then placed our
            inspiration images together in a grid in Figma
            to refer to during our design process. </p>
    </div>
    <div className="d-flex justify-contents-center ">
        <img src="/kindful/moodboard.svg" className={styles.imgWidth}/>
        <small> Moodboard</small>
    </div>

    <div className="container">

        <p>We then selected the images from our Mood Board that best exemplified the design direction for our
            app. The UI for our app would be energetic,
            playful and neo-brutalist with high contrast and defined edges. We selected Baloo as our main Header
            font as it was playful and bold and used Inter for
            other text for balance. We picked some key shapes, applied an distinct shadow and created some high
            contrast black and white buttons to match.  </p>
    </div>

    <div className="d-flex flex-column justify-contents-center">
        <img src="/kindful/styleguide.svg" className={styles.imgWidth}/>
        <small> Styleguide</small>
    </div>

    <div className="container">
        <h2> Prototyping and Testing: Round 2 </h2>
        <p>We returned to our mid-fi prototype and applied the changes to create a hi-fi prototype. </p>
    </div>

    <div className="d-flex flex-column justify-contents-center w-50 ">
        <img src="/kindful/hi-fi screenshots.svg" className={styles.imgWidth}/>
        <small> Hi-fi prototype</small>
    </div>
    <div className="container">

        <p>To view our high fidelity mobile prototypes: <a
                href="https://www.figma.com/proto/Ar4otkCZgkdwC8ZXRtFXV4/Kindful?page-id=68%3A345&type=design&node-id=161-465&viewport=555%2C-127%2C1&t=OeTn2gkYlMIX7tHs-1&scaling=scale-down&starting-point-node-id=181%3A269&show-proto-sidebar=1&mode=design"
                target="_blank" className="bodyLink">click here</a>.</p>
        <p>To view our high fidelity Apple Watch prototypes: <a
                href="https://www.figma.com/proto/Ar4otkCZgkdwC8ZXRtFXV4/Kindful?page-id=297%3A2528&type=design&node-id=298-2645&viewport=344%2C543%2C0.78&t=JK1gyjqdG0McLy8q-1&scaling=scale-down&starting-point-node-id=298%3A2645&show-proto-sidebar=1&mode=design"
                target="_blank" className="bodyLink">click here</a>.</p>

        <p>After we iterated to high fidelity, we revisited <b>usability testing</b> to ensure the changes we made
            improved the function of our app.
            Again, we tested 4 subjects using the same objectives from our original round of testing. This time
            we had a 100% success rate for all participants for all 4 tasks!</p>
            <p>
            A huge improvement from the first round of testing. Again, the test wasn’t without tiny hiccups. We
            originally missed connecting some frames that lived outside of
            our task flows. We made the necessary adjustments and fixed things like ensuring the iOS Home
            Indicator remained in view at the bottom of each screen. </p>
    </div>

    <div className={`d-flex flex-column justify-contents-center ${styles.imgWidth} `}>
        <video src="/pages/KindfulCS/videos/artpride-finalV.mov" controls></video>
    </div>

    <div className="container">
        <h2> Marketing Landing Page</h2>
        <p>My teammate used our style guide to design our <a href="https://sieramm.github.io/kindful/" target="_blank"
                className="bodyLink">landing page </a>. Then I translated her design to code
            using Visual Studio Code and GitHub.
             I used Bootstrap to format the page, and HTML and CSS to customize the
            framework. The most
            difficult part for me was formatting the images. At first I used the position property, but quickly
            realized that was not
            responsive. After instructor feedback, I decided to use the margin property to scatter the images
            while maintaining responsiveness. </p>
     
     
    </div>

    <div className="container">
        <h2> What I Learned</h2>
        <p> Throughout this process, I learned how to incorporate new interactions and animations in Figma with the
            purpose
            of adding more fun and interest to our prototype. I also deepened our knowledge of Bootstrap to code our
            marketing
            landing page. Due to the time constraints, I had to work smarter. Utilizing Bootstrap, leveraging media
            queries, and
            adjusting CSS allowed me to achieve our desired interactions and responsiveness in a shorter timeframe. 
        </p>

        <p>
            Scope Creep was in issue with this project. Even with a feature list carefully chosen, we realized while
            creating our wireframes,
            there were narrative gaps in our prototype. We almost started building our app larger, but a faculty
            member assisted us in clarifying
            our task flow, and reminded us this was a beginning iteration.
        </p>
        <p>For future iterations we would incorporate the following features: </p>
        <ul className="list-group">
            <li class="list-group-item" > Bring the messaging piece into the app, so that we could regulate the communication between users
            </li>
            <li class="list-group-item" > Expand the rewards and badging for acquired points </li>
            <li class="list-group-item" > Partner with local organizations and stores to offer discounts or coupons as rewards for points
            </li>
            <li class="list-group-item" >A community section that could have blogs about ideas on how to do good locally, volunteering
                opportunities</li>
            <li class="list-group-item" >Donation opportunities as rewards. For example 500 points could equal a $50 donation to a charity of
                your choice in your name</li>
        </ul>
    </div>

   
    {/* <!-- other work section--> */}
    <div className= "border-bottom border-black border-2">
    <h2> Want More?</h2>
    <div className="card-deck">
        <div className="card cardColor">
            <div className="d-flex flex-column justify-contents-center tinyImgWidth ">
                <img className={styles.imgWidth} src="/pages/NjArtCS/Images/AP HOME.svg" alt="Project NJ Artpridenj"/>
            </div>
            <div className="card-body">
                <h5 className="card-title">NJ Art Pride Redesign</h5>
                <p className="card-text">A redeisgn of a well-loved community organization</p>
                <a href="/pages/NjArtCS/index.html" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div className="card cardColor">
            <div className="d-flex flex-column justify-contents-center tinyImgWidth ">
                <img className="card-img-top img-fluid" src="/kindful/Group 36.png" alt="Project Portfolio"/>
            </div>
            <div className="card-body">
                <h5 className="card-title">My Portfolio</h5>
                <p className="card-text">Find out how I built this website</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
</div>
</div>
    </div> 
      </section>
    </main>
  );
}
