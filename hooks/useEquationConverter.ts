import { EquationProperties } from './types';

export function useEquationConverter() {
  const setVariables = (equations: string[]): string[] => {
    const equationProperties: EquationProperties[] = [];

    equations?.forEach(equation => {
      equationProperties.push({
        variablesQuantities: extractVariables(equation).length,
        equation: equation
      });
    });

    const variablesQuantities: number[] = [];

    equationProperties.forEach((property: EquationProperties) => {
      variablesQuantities.push(property.variablesQuantities);
    });

    const maxNumber: number = Math.max(...variablesQuantities);
    let variables: string[] = [];

    for (const property of equationProperties) {
      if (property.variablesQuantities != maxNumber) {
        continue;
      }

      variables = extractVariables(property.equation);
      break;
    }

    return variables;
  }
  
  const extractCoefficients = (equation: string, variables: string[]): number[] => {
    const valuesFromEquation: string[] = [];
    const coefficients: number[] = [];
    const lastPartOfEquation = extractNumber(getLastPartOfEquation(equation));
    let term: string = "";
    let sign: number = 1;

    for (const text of equation) {
      term += text;

      switch (text) {
        case '+':
        case '-':
          term = term.slice(0, -1);
          valuesFromEquation.push(term);
          term = text;
          break;
        case '=':
          term = term.slice(0, -1);
          valuesFromEquation.push(term);
          term = "";
          break;
      }
    }

    valuesFromEquation.push(term);

    for (let i = 0; i < variables.length; i++) {
      coefficients.push(0);
    }

    coefficients.push(lastPartOfEquation);

    valuesFromEquation.forEach(value => {
      const extractedVariables = extractVariables(value);

      if (extractedVariables.length === 1 && variables.includes(extractedVariables[0])) {
        const variableIndex = variables.indexOf(extractedVariables[0]);
        const coefficient = extractNumber(value) * sign; 

        coefficients[variableIndex] = coefficient;
      } else if (extractedVariables.length === 0 && value === '-') {
        sign = -1;
      }
    });

    return coefficients;
  };

  const extractVariables = (equation: string): string[] => {
    const regex = /[a-zA-Z]/g;
    return equation.match(regex) ?? [];
  }

  const extractNumber = (string: string): number => {
    const regex = /-?\d+/;
    const matches = string.match(regex);

    if (matches && matches.length > 0) {
      return parseInt(matches[0]);
    }

    if (string.includes("-")) {
      return -1;
    } else {
      return 1;
    }
  }

  const getLastPartOfEquation = (equation: string): string => {
    const parts = equation.split('=');
    if (parts.length !== 2) {
      return "";
    }

    return parts[1];
  }

  return {
    extractVariables,
    setVariables,
    extractCoefficients
  }
}