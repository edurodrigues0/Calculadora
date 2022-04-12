import { Button } from '../Button';
import styles from "./styles.module.scss";
import { useState } from "react";

export function Calculator() {
  const [calculatorValue, setCalculatorValue] = useState("0");
  const [calculatorOldValue, setCalculatorOldValue] = useState(0);
  const [operator, setOperator] = useState();

  function inputValue(e: any) {
    let input = e.target.value;

    if (calculatorValue === "0") {
      return setCalculatorValue(input);
    }

    return setCalculatorValue(calculatorValue + input);
  }

  function clearHandler() {
    setCalculatorValue("0");
  }

  function porcetageHandler() {
    const r = parseFloat(calculatorValue) / 100;
    setCalculatorValue(r.toString());
  }

  function changeSignHandler() {
    let num = parseFloat(calculatorValue);
    let res;

    if (parseFloat(calculatorValue) > 0) {
      res = (num * -1).toString();
      return setCalculatorValue(res);
    } else {
      res = Math.abs(num).toString();
      return setCalculatorValue(res);
    }
  }

  function operatorHandler(e: any) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setCalculatorOldValue(parseFloat(calculatorValue));
    setCalculatorValue("0");
  }

  function resultHandler() {
    setCalculatorValue("0");
    let num = parseFloat(calculatorValue);
    let r = 0;

    console.log(num);

    if (operator === "x") {
      r = calculatorOldValue * num;
      setCalculatorValue(r.toString());
      return;
    }

    if (operator === "/") {
      r = calculatorOldValue * num;
      return setCalculatorValue(r.toString());
    }

    if (operator === "+") {
      r = calculatorOldValue + num;
      return setCalculatorValue(r.toString());
    }

    if (operator === "-") {
      r = calculatorOldValue - num;
      return setCalculatorValue(r.toString());
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.result}>
          {calculatorValue === '9999999999999999' ? (
            <h1
              style={{fontSize: '1.5rem'}}
            >
              9999999999999999+
            </h1>
          ) : (
            <h1>
              {calculatorValue}
            </h1>
          )}
        </div>

        <Button
          character="AC"
          variantStyle={styles.whiteButton}
          fn={clearHandler}
        />

        <Button
          character="+/-"
          variantStyle={styles.whiteButton}
          fn={changeSignHandler}
        />

        <Button
          character="%"
          variantStyle={styles.whiteButton}
          fn={porcetageHandler}
        />

        <Button
          value="/"
          character="/"
          variantStyle={styles.blueButton}
          fn={operatorHandler}
        />

        <Button
          value="7"
          character="7"
          variantStyle={styles.normalButton}
          fn={inputValue}
        />

        <Button
          value="8"
          character="8"
          variantStyle={styles.normalButton}
          fn={inputValue}
        />

        <Button
          value="9"
          character="9"
          variantStyle={styles.normalButton}
          fn={inputValue}
        />

        <Button
          value="x"
          character="x"
          variantStyle={styles.blueButton}
          fn={operatorHandler}
        />

        <Button
          value="4"
          character="4"
          variantStyle={styles.normalButton}
          fn={inputValue}
        />

        <Button
          value="5"
          character="5"
          variantStyle={styles.normalButton}
          fn={inputValue}
        />

        <Button
          value="6"
          character="6"
          variantStyle={styles.normalButton}
          fn={inputValue}
        />

        <Button
          value="-"
          character="-"
          variantStyle={styles.blueButton}
          fn={operatorHandler}
        />

        <Button
          value="1"
          character="1"
          variantStyle={styles.normalButton}
          fn={inputValue}
        />

        <Button
          value="2"
          character="2"
          variantStyle={styles.normalButton}
          fn={inputValue}
        />

        <Button
          value="3"
          character="3"
          variantStyle={styles.normalButton}
          fn={inputValue}
        />

        <Button
          value="+"
          character="+"
          variantStyle={styles.blueButton}
          fn={operatorHandler}
        />

        <Button
          value="0"
          character="0"
          variantStyle={styles.largeButton}
          fn={inputValue}
        />

        <Button
          value="."
          character="."
          variantStyle={styles.normalButton}
          fn={inputValue}
        />

        <Button
          character="="
          variantStyle={styles.blueButton}
          fn={resultHandler}
        />
      </div>
    </div>
  );
}
