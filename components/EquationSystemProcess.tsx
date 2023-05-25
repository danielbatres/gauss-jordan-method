import styles from '../styles/EquationSystemProcess.module.sass';

export const EquationSystemProcess = (props: any): JSX.Element => {
  return (
    <div className={styles.Content}>
      <h2>Procedimiento</h2>
      <p>Sistema de ecuaciones</p>
      {props.makeProcess && props.showEquations()}
      <p>Matriz aumentada con coeficientes</p>
    </div>
  );  
}