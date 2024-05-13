import styles from "../page.module.css";

export default function Footer (){
    return(
        <div className="card  w-50 bg-transparent mt-5">
  <div className="card-body">
    <h5 className="card-title">Get In Touch</h5>
    <p className="card-text">I'm currently looking for new opportunities to create meaningful user experiences. 
    If you have any leads, want to talk food, or just say hi, I'll get back to you.  </p>
    <a href="#" className={`btn ${styles.cButton}`}>Say Hi</a>
  </div>
</div>
    )}