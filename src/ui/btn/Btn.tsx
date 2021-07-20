import {NavLink} from 'react-router-dom';
import s from './Btn.module.scss';

type BtnPropsType = {
  value: string;
};

export const Btn = (props: BtnPropsType) => {
  return (
    <NavLink to={'/contact'} className={s.btn}>
      <span>{props.value}</span>
    </NavLink>
  );
};
