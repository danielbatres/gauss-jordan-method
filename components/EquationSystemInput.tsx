import styles from '../styles/EquationSystemInput.module.sass';

export const EquationSystemInput = (props: any): JSX.Element => {
  const onChangeValue = (event: any): void => {
    props.setInputEquation(event.target.value);
  }

  const saveEquation = (): void => {
    if (props.inputEquation !== "") 
      props.setEquations([...props.equations, props.inputEquation]);
      props.setInputEquation("");
  }

  return (
    <section className={styles.ContentInput}>
      <form>
        <div className={styles.InputContainer}>
          <input type="text" className={styles.Input} onChange={onChangeValue} value={props.inputEquation} placeholder="Ingresar ecuaci&oacute;n" />
          <button type="button" className={styles.UpButton} onClick={saveEquation}>Up</button>
        </div>
        <button type="button" className={styles.ProcessButton} onClick={() => props.setMakeProcess(!props.makeProcess)}>
          Realizar procedimiento
        </button>
      </form>
    </section>
  );
}