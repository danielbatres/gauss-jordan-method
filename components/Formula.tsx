import React from "react";
import { MathDisplay } from "./MathDisplay";
import styles from "../styles/Formula.module.sass";
import { useFractions } from "../hooks/useFractions";

interface Props {
  oppositeElements: number[];
  pivotRow: number;
}

const Formula: React.FC<Props> = ({ oppositeElements, pivotRow }): JSX.Element => {
  const calculateRows = (): number[] => {
    const rows: number[] = [];

    for (let i = 1; i <= oppositeElements.length + 1; i++) {
      if (i === pivotRow) continue;

      rows.push(i);
    }

    return rows;
  };

  const rows = calculateRows();

  const [convertedValue] = useFractions();

  return (
    <div className={styles.Formula}>
      {rows.map((row) => {
        const oppositeElement = oppositeElements[rows.indexOf(row)];

        const formula: string = `F_${row} = ${convertedValue(oppositeElement).toString()}F_${pivotRow} + F_${row}`;

        return <MathDisplay key={formula} math={formula} />;
      })}
    </div>
  );
};

export { Formula };
