import React from 'react';
import { MathDisplay } from "./MathDisplay";
import styles from '../styles/Results.module.sass';
import { useFractions } from "../hooks/useFractions";

interface Props {
  variables: string[];
  matrix: number[][];
}

const Results: React.FC<Props> = ({ variables, matrix }): JSX.Element => {
  const values: number[] = [];

  matrix.map((vector: number[]) => {
    vector.map((value: number, index: number) => {
      if (index === matrix[0].length - 1) {
        values.push(value);
      }
    });
  });

  const [convertedValue] = useFractions();
  
  return (
    <div className={styles.ResultsContainer}>
      {variables.map((variable: string, index: number) => {
      
        return (
          <p key={variable}>
            <MathDisplay math={`${variable} = ${convertedValue(values[index])}`}/>
          </p>
        );
      })}
    </div>
  );
}

export { Results }