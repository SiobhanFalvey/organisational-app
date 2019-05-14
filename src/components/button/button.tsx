import * as React from 'react';
import styles from "./button.module.scss"
export interface IProps {
    
}
 
export interface IState {
    
}
 
class PrimaryButton extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return ( 
        <>
        <button className={styles.button}>Add</button>
        </> );
    }
}
 
export default PrimaryButton;