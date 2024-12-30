import React, { useState } from 'react';
import styles from './form.module.css'

interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

export const Form: React.FC<FormProps> = ({title, handleClick}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClick(email, password);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        name="email"
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <input
        name="password"
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
      />
      <button className={styles.formButton} onClick={() => handleClick(email, password)}>{title}</button>
    </form>
  );
};
