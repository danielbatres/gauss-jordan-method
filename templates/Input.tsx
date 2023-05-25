import { FC } from 'react';
import { EquationSystemInput } from '../components/EquationSystemInput';
import { EquationSystem } from '../components/EquationSystem';
import styles from '../styles/Input.module.sass'

export const Input = (props: any): JSX.Element => {
  return (
    <div className={styles.ContainerInput}>
      <EquationSystem equations={props.equations} />
      <EquationSystemInput
        equations={props.equations}
        setEquations={props.setEquations}
        inputEquation={props.inputEquation}
        setInputEquation={props.setInputEquation}
        makeProcess={props.makeProcess}
        setMakeProcess={props.setMakeProcess}
      />
    </div>
  );
} 