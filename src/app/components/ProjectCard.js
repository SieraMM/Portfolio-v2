import styles from "../page.module.css";
import Image from 'next/image'

export default function ProjectCard({image, title, subtitle}){
    return(
        <div className={`card mb-3 p-3 w-50 rounded-1 ${styles.pCard}`}>
        <div className="row g-0">
          <div className="col-md-4 align-content-center ">
            <img src={image} class={`img-fluid rounded `} alt="..." height="25vh" />
          </div>
          <div className="col-md-8  justify-content-center align-content-center ">
          
            <div className="card-body text-center ">
              <h5 className="card-title ">{title}</h5>
              <p className="card-text py-2">{subtitle}</p>
              {/* <p> gonna have to make a small link thing</p> */}
              <div className = "container">
                <a href = "#" className="mx-3"><Image src="/github.svg" alt="Github" width="16" height ="16"/></a>
                <a href = "#"><Image src="/exLink.svg" alt="External link" width="16" height ="16"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}