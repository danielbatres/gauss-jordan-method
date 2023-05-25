import { ProcessMatrix } from "./types";

function useProcess(matrixReceived: number[][]): ProcessMatrix[] {
  const processedMatrix: ProcessMatrix[] = [];

  let matrix = matrixReceived.slice();

  for (let pivot = 0; pivot < matrix.length; pivot++) {
    const processMatrix: ProcessMatrix = {
      oppositeElements: [],
      pivotRow: pivot + 1,
      matrix: []
    };

    if (matrix[pivot][pivot] !== 0) {
      const divisor = matrix[pivot][pivot];
      matrix[pivot] = matrix[pivot].map((value: number) => value / divisor);
    } else {
      let maxValue: number = 0;

      for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][pivot] > maxValue) {
          maxValue = matrix[i][pivot];
        }
      }

      const newValue: any = matrix.map(vector => {
        if (vector[pivot] === maxValue) {
          return vector[pivot];
        }
      })[0];

      matrix = [...matrix.slice(0, pivot), newValue, ...matrix.slice(pivot + 1)];

      matrix = [...matrix.slice(0, matrix.indexOf(newValue))]
    }

    for (let i = 0; i < matrix.length; i++) {
      if (i === pivot) continue;

      const oppositeElement: number = matrix[i][pivot] * -1;
      processMatrix.oppositeElements.push(oppositeElement);

      const newRow = matrix[i].map((vector: number, index: number) => {
        return (oppositeElement * matrix[pivot][index]) + vector;
      });

      matrix = [...matrix.slice(0, i), newRow, ...matrix.slice(i + 1)];
    }

    processMatrix.matrix = matrix;
    processedMatrix.push(processMatrix);
  }

  return processedMatrix;
}

export { useProcess }