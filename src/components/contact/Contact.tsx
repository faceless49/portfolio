import s from "./Contact.module.scss";
import React from "react";
import { Title } from "../../ui/title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { EmailForm } from "./EmailForm/EmailForm";
import { Letter } from "../../ui/letter/Letter";

export const Contact = (props: any) => {
  const contact = ["C", "o", "n", "t", "a", "c", "t", "\u00A0", "m", "e"];

  library.add(fab);
  library.add(far);
  return (
    <section className={s.contact} id="contact">
      <div className={"container"}>
        <div className={s.contact_inner}>
          <Title>
            {contact.map((item, i) => (
              <Letter key={i}>{item}</Letter>
            ))}
          </Title>
          <p className={s.contact_descr}>
            I'm looking for a full-time job. Open to your suggestions.
          </p>
        </div>
        <EmailForm />
        <div className={s.contact_form}>
          <a className={s.social_link} href={"https://t.me/faceless49"}>
            <FontAwesomeIcon icon={["fab", "telegram"]} size={"2x"} />
          </a>
          <a
            className={s.social_link}
            href={"https://www.linkedin.com/in/egor-kolesnikov"}
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size={"2x"} />
          </a>
          <a
            className={s.social_link}
            href={"https://join.skype.com/invite/gAuhYur2ltk2"}
          >
            <FontAwesomeIcon icon={["fab", "skype"]} size={"2x"} />
          </a>
          <a className={s.social_link} href={"mailto:kolesnikov49r@gmail.com"}>
            <FontAwesomeIcon icon={["far", "envelope"]} size={"2x"} />
          </a>
        </div>
      </div>
    </section>
  );
};
