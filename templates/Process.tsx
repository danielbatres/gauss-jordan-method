import { EquationSystemProcess } from '../components/EquationSystemProcess';
import { EquationSystem } from '../components/EquationSystem';
import { useGaussJordanMethod } from '../hooks/useGaussJordanMethod';
import { Matrix } from '../components/Matrix';
import { Formula } from '../components/Formula';
import { ProcessMatrix } from '../hooks/types';
import { Results } from '../components/Results';

export const Process = (props: any): JSX.Element => {
  const GetProcess = () => {
    const {
      aumentedMatrix,
      modifiedMatrix,
      variables
    } = useGaussJordanMethod(props.equations);

    return (
      <>
        <Matrix matrix={aumentedMatrix.matrix} />
        <h4>Operaciones</h4>
        {modifiedMatrix.map((processedMatrix: ProcessMatrix) => {
          return (
            <>
              <Formula
                oppositeElements={processedMatrix.oppositeElements}
                pivotRow={processedMatrix.pivotRow}
              />
              <Matrix matrix={processedMatrix.matrix} />
            </>
          );
        })}
        <Results variables={variables} matrix={modifiedMatrix[modifiedMatrix.length - 1].matrix} />
      </>
    );
  }

  return (
    <>
      <EquationSystemProcess
        makeProcess={props.makeProcess}
        showEquations={() => <EquationSystem equations={props.equations} />}
      />
      {props.makeProcess && GetProcess()}
    </>
  );
}