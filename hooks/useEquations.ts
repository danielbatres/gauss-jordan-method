import React from 'react';

export function useEquations() {
  const [equations, setEquations] = React.useState([]);
  const [inputEquation, setInputEquation] = React.useState("");
  const [makeProcess, setMakeProcess] = React.useState(false);

  return {
    equations,
    setEquations,
    inputEquation,
    setInputEquation,
    makeProcess,
    setMakeProcess
  }
}