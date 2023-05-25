export type Equation = {
    completeEquation: string,
    variables: string[],
    coefficients: number[]
}

export type EquationSystem = {
    equations: Equation[],
    systemVariables: string[]
}

export type AumentedMatrix = {
    matrix: number[][]
}

export type EquationProperties = {
    variablesQuantities: number,
    equation: string
}

export type ProcessMatrix = {
    oppositeElements: number[],
    pivotRow: number,
    matrix: number[][]
}