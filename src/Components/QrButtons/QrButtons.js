import React from 'react';
import classes from './QrButtons.module.css';
import { NavLink } from 'react-router-dom';

const QrButtons = (props) => {

    let actionButton1=(
        <div className={classes.Button} id="View_List" onClick={props.Confirm}>
                    <p>Confirm</p>
        </div>

    )

    let actionButton2 = (
        <div className={classes.Button} id="View_List" onClick={props.View}>
                    <p>View Items</p>
        </div>

    )

    if(!props.View){
        actionButton2 = (
            <div className={classes.Button} id="Submit" onClick={props.Submit}>
                    <NavLink to="/Submitted" exact><p>Submit Order</p></NavLink>
                </div>
        )
    }

    if(!props.Confirm){
        actionButton1 = (
            <div className={classes.Button} id="Submit" onClick={props.Scan}>
                    <p>Add More</p>
                </div>
        )
    }



    return(
        <div className={classes.Actions}>
                {actionButton1}
                {actionButton2}
            </div>
    )
}

export default QrButtons;