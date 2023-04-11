// App.js or any other parent component
import React from "react";
import ContactForm from "../components/ContactForm.js";
import styles from "../styles/contact-us.module.css";

const App = () => {
  return (
    <div className={styles.main}>
      <h1>Contact Us</h1>
      <div className={styles.form}>
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
