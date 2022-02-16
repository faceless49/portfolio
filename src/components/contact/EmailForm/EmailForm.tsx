import s from './EmailForm.module.scss'
export const EmailForm = () => {
  return (
    <div className={s.contactsBlock}>
      <form className={s.contactForm}>
        <input type="text"/>
        <input type="text"/>
        <textarea/>
        <button type="submit" className={s.submitBtn}>Send message</button>
      </form>
    </div>
  );
};
