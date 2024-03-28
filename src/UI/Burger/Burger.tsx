import React from 'react';

import styles from './Burger.module.css';

function Burger({ onClick }: { onClick: () => void }) {
  return (
    <div className={styles.burger} onClick={onClick}>
      <div className={styles.line}></div>
    </div>
  );
}

export default Burger;
