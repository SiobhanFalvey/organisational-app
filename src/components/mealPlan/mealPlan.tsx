import * as React from "react";
import styles from "./mealPlan.module.scss";
// import IInnerMealPlan from "../mealPlan/innerMealPlan/innerMealPlan";

export interface IProps {}

export interface IState {}

class IMealPlan extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <div>
        <header className={styles.mealPlanHeader}>Meal Plan</header>
        {/* <IInnerMealPlan /> */}
      </div>
    );
  }
}

export default IMealPlan;
