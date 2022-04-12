import { Calculator } from "./components/Calculator";
import styles from './home.module.scss';

export function App() {
  return (
    <div className={styles.container}>
      <p>Calculadora ReactJS + Typescript</p>
      <Calculator />
    </div>
  );
}
