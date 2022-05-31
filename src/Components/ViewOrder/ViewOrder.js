import React, { Component } from 'react';
import classes from './ViewOrder.module.css';
import QrItemList from '../QrItemList/QrItemList';

class ViewOrder extends Component{

    state = {
        order: []
    }

    componentDidMount(){

        let kanbanOrder = localStorage.getItem('kanbanOrder')

        if(!kanbanOrder){
            console.log('No order found')
            kanbanOrder = localStorage.setItem('kanbanOrder', JSON.stringify({items: []}))
        } else {
            JSON.parse(kanbanOrder)
            console.log(kanbanOrder)
            this.setState({
                order: kanbanOrder
            })
        }
    }

    render(){

        let items = 'Loading...'

        if(this.state.order.length > 0){
            items = this.state.order.map(item => {
                return (
                    <div className={classes.Item}>{item}</div>
                )
            })

        }

        let itemList = <QrItemList 
                            Items={this.state.scannedItems} 
                            Scan={()=> this.setState({ currentItem: null, scanner: true, viewItems: false })}
                            View={()=> this.setState({ currentItem: null, scanner: false, viewItems: true })}
                            Submit={()=> console.log('clickity boo')}
                        />

        


        return(
            <div className={classes.ViewOrder}>
                <div className={classes.Header}>
                <h1>Kanban Order</h1>
                </div>
                <div>
                {itemList}
                </div>
                
                
                
            </div>
        )
    }
}

export default ViewOrder