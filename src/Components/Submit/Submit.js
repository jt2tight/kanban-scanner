import React from 'react';
import classes from './Submit.module.css';
import { NavLink } from 'react-router-dom';


const Submit = () => {

    const order = JSON.parse(localStorage.getItem('kanbanOrder'))

    let orderItems;
    let header = <h1>Order Submitted!</h1>
    let message = <p>Your Kanban Order has been submitted to jtrezza@hilumzusa.com</p>

    console.log(order)
    try {
        orderItems = order.map(item => <div>{item}</div>)
    } catch {
        orderItems = 'Nothing on order yet'

    }

    if(order.items.length == 0){
        orderItems = 'Nothing on order...'
        header = <h1>Nothing on Order...</h1>
        message = <p>Please add items to submit this order</p>
        
    }


    return(
        <div className={classes.Submit}>
            {header}
            {message}
            <hr />
            <div className={classes.Items}>
                <h2>Items</h2>
            {orderItems}
            </div>
            
            <div className={classes.Action}>
                <div className={classes.Button} onClick={()=> localStorage.removeItem('kanbanOrder')}>
                    <NavLink to="/" exact>Start New Order</NavLink>
                </div>
            </div>
            
            <div className={classes.Warning}>If you are complete please close the browser tab as I'm too lazy to figure out how to turn the camera off right now.</div>
            
        </div>
    )
}

export default Submit