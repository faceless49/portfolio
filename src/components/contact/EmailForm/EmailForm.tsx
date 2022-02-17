import s from './EmailForm.module.scss'
import {Btn} from '../../../ui/btn/Btn';

export const EmailForm = () => {

  return (
    <div className={s.contactsBlock}>
      <form className={s.contactForm}>

        <label title={'name'} className={s.inputLabel}><input type="text" className={`${s.inputField}`} placeholder={'Name'} id={'name'}/></label>
        <label className={s.inputLabel}><input type="text" className={s.inputField} placeholder={'Subject'}/></label>
        <label className={s.inputLabel}><input type="text" className={s.inputField} placeholder={'Email'}/></label>
        <textarea placeholder={'Message'}/>
        <Btn value={'Send message'}/>
      </form>
    </div>
  );
};
