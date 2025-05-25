import { useId } from 'react';
import css from './SearchBox.module.css';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  const inputId = useId();
  return (
    <>
      <div className={css.container}>
        <label htmlFor={inputId}>Find contacts by name</label>
        <input
          id={inputId}
          type="text"
          placeholder="Search contacts by name"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </>
  );
};
