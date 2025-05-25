import { Contact } from '../Contact/Contact.tsx';
import css from './ContactList.module.css';

export interface ContactListProps {
  contacts: { id: string; name: string; phone: string }[];
  onDelete: (id: string) => void;
}

export const ContactList = ({ contacts, onDelete }: ContactListProps) => {
  return (
    <>
      <div className={css.container}>
        {contacts.length > 0 &&
          contacts.map((contact, index) => (
            <Contact
              key={index}
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
              onDelete={onDelete}
            />
          ))}
      </div>
    </>
  );
};
