import styles from "../page.module.css";

export default function NavBar (){
    return(
        <nav className= "navbar sticky-top navbar-expand-lg navbar-light mb-5"   style={{ backgroundColor: "#C4D6FB",  boxShadow: " 4px 4px 6px #888888"}}>
  <div className="container-fluid">
  <span class="navbar-brand mb-0 h1">Portfolio</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="navbar-nav justify-content-end me-auto mb-2 mb-lg-0 ">
      <a class="nav-link active" aria-current="page" href="#">About</a>
        <a class="nav-link" href="#">Work</a>
        <form class="container-fluid justify-content-start">
    <button class="btn btn-outline-success me-2" type="button" style ={{color: "#FF807C", borderColor:"#FF807C" }}>Resume</button>
    </form>
        
       
      </div>
     
    </div>
  </div>
</nav>
    );
}