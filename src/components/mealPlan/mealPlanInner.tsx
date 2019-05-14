import * as React from 'react';
import styles from "./mealPlan.module.scss";


export interface IProps {
    
}
 
export interface IState {
    
}
 
class MealPlanInner extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( 
            <section>
                <input type="text" className={styles.mealPlanInput}/>
            </section>
         );
    }
}
 
export default MealPlanInner;