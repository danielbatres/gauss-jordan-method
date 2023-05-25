import { useEquations } from '../hooks/useEquations';
import { Input } from '../templates/Input';
import { Process } from '../templates/Process';
import styles from '../styles/styles.module.sass';

export default function IndexPage() {
  const {
    equations,
    setEquations,
    inputEquation,
    setInputEquation,
    makeProcess,
    setMakeProcess,
  } = useEquations();
  
  return (
    <div className={styles.container} style={{ backgroundColor: "#F2EDEB" }}>
      <h1>M&eacute;todo Gauss - Jordan</h1>
      <div className={styles.content}>
        {!makeProcess && (
          <Input
            equations={equations}
            setEquations={setEquations}
            inputEquation={inputEquation}
            setInputEquation={setInputEquation}
            makeProcess={makeProcess}
            setMakeProcess={setMakeProcess}
          />
        )}
        {makeProcess && (
          <Process makeProcess={makeProcess} equations={equations} />
        )}
      </div>
    </div>
  );
}
