import React from 'react';
import { MathDisplay } from './MathDisplay';

export const EquationSystem = ({ equations }): JSX.Element => {
  const inlineStyles = {
    fontSize: "1.4rem",
    padding: "5px"
  }
  
  return (
    <ul>
      {equations?.map((equation: string) => {
        return (
          <li key={equation} style={inlineStyles}>
              <MathDisplay math={equation} />
          </li>
        );
      })}
    </ul>
  );
}