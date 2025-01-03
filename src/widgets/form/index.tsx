import React, { useState } from 'react';
import styles from './form.module.css'

interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

interface FormData {
  email: string;
  password: string;
}

export const Form: React.FC<FormProps> = ({title, handleClick}) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClick(formData.email, formData.password);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        name="email"
        type="email"
        value={formData.email}
        placeholder="Email"
        onChange={handleChange}
        className={styles.input}
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        placeholder="Password"
        onChange={handleChange}
        className={styles.input}
      />
      <button type={'submit'} className={styles.formButton}>{title}</button>
    </form>
  );
};