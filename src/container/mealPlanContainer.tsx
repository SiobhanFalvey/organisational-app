import * as React from "react";
import MealPlan from "../components/mealPlan/mealPlan";

export interface IProps {}

export interface IState {}

class MealPlanContainer extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <>
        <MealPlan />
      </>
    );
  }
}

export default MealPlanContainer;
