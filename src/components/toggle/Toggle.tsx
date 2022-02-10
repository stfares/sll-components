import React, { FC } from 'react';
import styles from './Toggle.module.css';

export type ToggleType = {
  isOn: boolean;
  handleChange: () => void;
};

const Toggle: FC<ToggleType> = ({ isOn, handleChange }) => {
  return (
    <label className={styles.switch} data-testid="Toggle-label">
      <input checked={isOn} onChange={handleChange} type="checkbox" data-testid="Toggle" />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

export default Toggle;