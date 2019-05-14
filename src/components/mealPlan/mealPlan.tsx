import * as React from "react";
import styles from "./mealPlan.module.scss";
import PrimaryButton from "../button/button"
import MealPlanInner from "./mealPlanInner"

export interface IProps {}

export interface IState {}

class MealPlan extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <div>
        <header className={styles.mealPlanHeader}>Meal Plan</header>
        <section className={styles.mealPlanContainer}>
          <MealPlanInner/>
          <PrimaryButton/>
        </section>
      </div>
    );
  }
}

export default MealPlan;
