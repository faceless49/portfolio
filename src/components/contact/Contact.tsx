import s from './Contact.module.scss';
import React from 'react';
import {Title} from '../../ui/title/Title';

export const Contact = (props: any) => {
  return (
    <section className={s.contact}>
      <div className={s.contact_inner}>
        <Title value={'Contact me'}/>
        <p className={s.contact_descr}>
          I'm looking for a full-time job.
        </p>
        <div className={s.contact_form}>
          <form action="">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </form>
        </div>
      </div>
      <div className={s.contact_map}></div>
    </section>
  );
};
