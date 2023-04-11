// ContactForm.js
import React, { useState } from "react";
import styles from "../styles/contact-us.module.css";
import emailjs from "emailjs-com";

const emailjsUserID = "GDqNUj-4NBt4hQzSB";
const emailjsServiceID = "service_wcqmeyy";
const emailjsTemplateID = "template_qlkuhii";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the email using EmailJS
    emailjs
      .sendForm(
        emailjsServiceID,
        emailjsTemplateID,
        event.target,
        emailjsUserID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result);
        },
        (error) => {
          console.error("Email failed to send: ", error);
        }
      );

    // Clear the form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // ...

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className={`${styles.input} ${styles.textarea}`}
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
