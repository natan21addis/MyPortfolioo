"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Stars from "../Stars";
import styles from "../../styles/contact.module.css";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent");
          e.target.reset();
        },
        (error) => {
          toast.error("Message not sent");
          console.log(error.text);
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className={styles.contact}>
      <Stars />
      <div className={styles.contactContainer}>
        <div className={styles.text}>
          <h2>Contact.</h2>
          <p>
            Get in touch or shoot me an email directly on{" "}
            <span
              onClick={() =>
                (window.location = "mailto:abelbeworking245@gmail.com")
              }
            >
              abelbeworking245@gmail.com
            </span>
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className={styles.input}
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows="5"
          />
          <div className={styles.btnContainer}>
            <input
              type="submit"
              value="Send Message"
              className={styles.btn}
              disabled={sending}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
