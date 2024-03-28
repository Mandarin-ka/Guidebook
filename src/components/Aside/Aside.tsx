import React, { useCallback, useState } from 'react';

import Burger from '@UI/Burger/Burger';
import TextInput from '@UI/TextInput/TextInput';

import styles from './Aside.module.css';

function Aside() {
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const toggleMenu = useCallback(() => {
    setActive((prevState) => !prevState);
  }, []);

  return (
    <aside className={`${styles.aside} ${active && styles.active}`}>
      <Burger onClick={toggleMenu} />
      <TextInput value={value} onChange={onChange} />
    </aside>
  );
}

export default Aside;
