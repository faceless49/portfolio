import s from "./EmailForm.module.scss";
import { ChangeEvent, MouseEvent, useState } from "react";
import axios from "axios";
import { Success } from "../../../ui/success/Success";

export const EmailForm = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);

  const getName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const getSubject = (e: ChangeEvent<HTMLInputElement>) => {
    setSubject(e.currentTarget.value);
  };
  const getContact = (e: ChangeEvent<HTMLInputElement>) => {
    setContact(e.currentTarget.value);
  };
  const getMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const sendMessage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (name && subject && contact && message) {
      axios
        .post("https://nodejs-server-portfolio.herokuapp.com/sendMessage", {
          name,
          subject,
          contact,
          message,
        })
        .then(() => {
          setIsSubmited(true);
        });
    }
  };

  if (isSubmited) {
    return <Success />;
  }

  return (
    <div className={s.contactsBlock}>
      <form className={s.contactForm}>
        <label title={"name"} className={s.inputLabel}>
          <input
            value={name}
            onChange={getName}
            type="text"
            className={`${s.inputField}`}
            placeholder={"Name"}
            id={"name"}
            required
          />
        </label>
        <label className={s.inputLabel}>
          <input
            onChange={getSubject}
            value={subject}
            type="text"
            className={s.inputField}
            placeholder={"Subject"}
            required
            id={"subject"}
          />
        </label>
        <label className={s.inputLabel}>
          <input
            onChange={getContact}
            value={contact}
            type="text"
            className={s.inputField}
            placeholder={"Email"}
            required
          />
        </label>
        <textarea
          placeholder={"Message"}
          value={message}
          onChange={getMessage}
        />
        <button className={s.email_btn} onClick={sendMessage}>
          Send message
        </button>
      </form>
    </div>
  );
};
