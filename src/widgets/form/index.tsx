import React, { useState } from 'react';

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
    <form onSubmit={onSubmit}>
      <input
        name="email"
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handleClick(email, password)}>{title}</button>
    </form>
  );
};
