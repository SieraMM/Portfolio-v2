import styles from "../page.module.css";

export default function ProjectCard({image, title, subtitle}){
    return(
        <div className={`card mb-3 p-3 w-75 ${styles.pCard}`}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8 ">
            <div className="card-body text-center">
              <h5 className="card-title pb-3">{title}</h5>
              <p className="card-text py-2">{subtitle}</p>
              {/* <p> gonna hve to make a small link thing</p> */}
            </div>
          </div>
        </div>
      </div>
    );
}