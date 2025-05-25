import 'material-icons/iconfont/material-icons.css';
import css from './Contact.module.css';

interface ContactProps {
  id: string
  phone: string;
  name: string;
  onDelete: (id: string) => void;
}

export const Contact = ({id, phone, name, onDelete} : ContactProps) => {
  return <>
    <div className={css.container}>
      <div className={css.contact_info}>
        <p className={css.name}>{name}</p>
        <p className={css.phone}>{phone}</p>
      </div>
      <div className={css.actions}>
        <button className={css.delete_button} onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  </>;
};
