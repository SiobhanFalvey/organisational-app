import * as React from "react";
import styles from "./mealPlan.module.scss";

export interface IProps {}

export interface IState {}

class MealPlan extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <div>
        <header className={styles.mealPlanHeader}>Meal Plan</header>
      </div>
    );
  }
}

export default MealPlan;
