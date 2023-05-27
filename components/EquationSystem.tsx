import React from 'react';
import { MathDisplay } from './MathDisplay';
import styles from '../styles/EquationSystem.module.sass'

export const EquationSystem = ({ equations }): JSX.Element => {
  return (
    <ul>
      {equations?.map((equation: string) => {
        return (
          <li key={equation} className={styles.Style}>
              <MathDisplay math={equation} />
          </li>
        );
      })}
    </ul>
  );
}