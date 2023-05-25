import { FC } from "react";
import styles from "../styles/Matrix.module.sass";
import { MathDisplay } from "./MathDisplay";
import { useFractions } from "../hooks/useFractions";

interface Props {
  matrix: number[][];
}

export const Matrix: FC<Props> = ({ matrix }): JSX.Element => {
  const inlineStyles = {
    display: "grid",
    gridTemplateColumns: `repeat(${matrix[0].length}, 1fr)`,
  };

  const [convertedValue] = useFractions();

  return (
    <div className={styles.MatrixContainer} style={inlineStyles}>
      {matrix.map((vector: number[], rowIndex: number) => {
        return (
          <>
            {vector.map((value: number, colIndex: number) => {
              const isLastColumn = colIndex === matrix[0].length - 1;
              const className = `${isLastColumn ? styles.LastColumn : ""}`;

              return (
                <p key={`${rowIndex}-${colIndex}`} className={className}>
                  <MathDisplay math={convertedValue(value).toString()} />
                </p>
              );
            })}
          </>
        );
      })}
    </div>
  );
};
