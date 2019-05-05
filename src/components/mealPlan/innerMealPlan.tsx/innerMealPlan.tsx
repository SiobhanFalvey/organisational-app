import * as React from "react";

export interface IInnerMealPlanProps {}

export interface IInnerMealPlanState {}

class IInnerMealPlan extends React.Component<
  IInnerMealPlanProps,
  IInnerMealPlanState
> {
  // state = { :  }
  render() {
    return (
      <div>
        <ul>
          <li>Monday</li>
          <li>Tuesday</li>
          <li>Wednesday</li>
          <li>Thursday</li>
          <li>Friday</li>
          <li>Saturday</li>
          <li>Sunday</li>
        </ul>
      </div>
    );
  }
}

export default IInnerMealPlan;
