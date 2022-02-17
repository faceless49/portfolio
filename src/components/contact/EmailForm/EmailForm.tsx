import s from "./EmailForm.module.scss";
import { Btn } from "../../../ui/btn/Btn";

export const EmailForm = () => {
  return (
    <div className={s.contactsBlock}>
      <form className={s.contactForm}>
        <label title={"name"} className={s.inputLabel}>
          <input
            type="text"
            className={`${s.inputField}`}
            placeholder={"Name"}
            id={"name"}
            required
          />
        </label>
        <label className={s.inputLabel}>
          <input
            type="text"
            className={s.inputField}
            placeholder={"Subject"}
            required
          />
        </label>
        <label className={s.inputLabel}>
          <input
            type="text"
            className={s.inputField}
            placeholder={"Email"}
            required
          />
        </label>
        <textarea placeholder={"Message"} />
        <Btn value={"Send message"} />
      </form>
    </div>
  );
};
