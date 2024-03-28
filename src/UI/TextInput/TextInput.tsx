import React from 'react';

import style from './TextInput.module.css';

function TextInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type='text'
      placeholder='Место, адрес...'
      value={value}
      onChange={onChange}
      className={style.input}
    />
  );
}

export default TextInput;
