import React from 'react';
import classes from './CancelOrder.module.css';
import { NavLink } from 'react-router-dom';

const CancelOrder = () => {

    localStorage.removeItem('kanbanOrder')

    console.log('order cancelled')

    return(
        <div className={classes.CancelOrder}>
            <h1>Order Cleared!</h1>
            <p><NavLink to="/" exact>Start New Order</NavLink></p>
        </div>
    )
}

export default CancelOrder