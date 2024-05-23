import styles from "../page.module.css";

export default function InnerNav (){
    return(
        <nav className= {` navbar sticky-top navbar-expand-lg navbar-light mb-5 ${styles.navBar}`}  >
  <div className="container-fluid d-flex flex-row justify-content-between">
  <a class="navbar-brand" href='/'>Portfolio</a>
   
   
    <button class={`btn me-2 ${styles.cButton}`} type="button" >Resume</button>

        
       
      </div>
     

</nav>
    );
}