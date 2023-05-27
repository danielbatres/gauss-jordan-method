import { EquationSystemProcess } from '../components/EquationSystemProcess';
import { EquationSystem } from '../components/EquationSystem';
import { useGaussJordanMethod } from '../hooks/useGaussJordanMethod';
import { Matrix } from '../components/Matrix';
import { Formula } from '../components/Formula';
import { ProcessMatrix } from '../hooks/types';
import { Results } from '../components/Results';
import styles from './Process.module.sass'

export const Process = (props: any): JSX.Element => {
   const { aumentedMatrix } = useGaussJordanMethod(props.equations);

  const GetProcess = () => {
    const {
      modifiedMatrix,
      variables
    } = useGaussJordanMethod(props.equations);

    return (
      <div>
        <h4>Operaciones</h4>
        <div className={styles.MatrixProcess}>
          {modifiedMatrix.map(
            (processedMatrix: ProcessMatrix, index: number) => {
              return (
                <div key={index} className={styles.FormulaMatrix}>
                  <Formula
                    oppositeElements={processedMatrix.oppositeElements}
                    pivotRow={processedMatrix.pivotRow}
                  />
                  <Matrix matrix={processedMatrix.matrix} />
                </div>
              );
            }
          )}
          <Results
            variables={variables}
            matrix={modifiedMatrix[modifiedMatrix.length - 1].matrix}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.Process}>
      <div className={styles.Box}>
        <EquationSystemProcess
          makeProcess={props.makeProcess}
          showEquations={() => <EquationSystem equations={props.equations} />}
        />
        <Matrix matrix={aumentedMatrix.matrix} />
      </div>
      <div className={styles.Box}>{props.makeProcess && GetProcess()}</div>
    </div>
  );
}