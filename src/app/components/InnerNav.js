import styles from "../page.module.css";

export default function InnerNav (){
    return(
        <nav className= {` navbar sticky-top navbar-expand-lg navbar-light mb-5 ${styles.navBar}`}  >
  <div className="container-fluid">
  <a class="navbar-brand" href='/'>Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <form class="container-fluid d-flex justify-content-end">
    <button class={`btn me-2 ${styles.cButton}`} type="button" >Resume</button>
    </form>
        
       
      </div>
     

</nav>
    );
}