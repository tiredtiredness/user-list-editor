import styles from './input.module.css';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  setValue: (value: string) => void;
  variant?: 'base' | 'big';
  placeholder?: string;
}

export const Input = ({
  label,
  value,
  setValue,
  variant = 'base',
  placeholder = 'Не указано',
}: IInput) => {
  return (
    <label className={styles.wrapper} htmlFor=''>
      {label && <p className={styles.label}>{label}</p>}
      <input
        className={styles[`input-${variant}`]}
        type='text'
        value={value}
        placeholder={placeholder}
        onChange={e => setValue(e.target.value)}
      />
    </label>
  );
};
