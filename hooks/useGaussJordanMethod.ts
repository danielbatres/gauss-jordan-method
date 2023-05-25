import { EquationSystem, Equation, AumentedMatrix, ProcessMatrix } from './types';
import { useEquationConverter } from './useEquationConverter';
import { useProcess } from './useProcess';

export function useGaussJordanMethod(equations: string[]) {
  const {
    extractVariables,
    setVariables,
    extractCoefficients
  } = useEquationConverter();
  
  const equationsForSystem: Equation[] = [];
  const variables: string[] = setVariables(equations);
  const aumentedMatrix: AumentedMatrix = {
    matrix: []
  }

  let modifiedMatrix: ProcessMatrix[] = [];
  
  equations.forEach(equation => {
    equationsForSystem.push({
      completeEquation: equation,
      variables: extractVariables(equation),
      coefficients: extractCoefficients(equation, variables)
    });
  });
  
  const equationSystem: EquationSystem = {
    equations: equationsForSystem,
    systemVariables: variables
  };

  equationSystem.equations.map((equation: Equation) => {
    aumentedMatrix.matrix.push(equation.coefficients);
  });

  modifiedMatrix = useProcess(aumentedMatrix.matrix);

  return {
    equationsForSystem,
    equationSystem,
    aumentedMatrix,
    modifiedMatrix,
    variables
  }
}
