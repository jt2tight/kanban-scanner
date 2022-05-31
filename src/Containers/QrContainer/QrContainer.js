import React, { ReactDOM, Component } from 'react';
import AddedItem from '../../Components/AddedItem/AddedItem';
import QRscanner from '../../Components/QRscanner/QRscanner';
import QrItemList from '../../Components/QrItemList/QrItemList';
import classes from './QrContainer.module.css'


class QrContainer extends Component {
    
    state = {
        scannedItems: [],
        currentItem: null, 
        scanner: true,
        viewItems: false,
        submit: false, 
    }

    componentDidMount(){

        let kanbanOrder = localStorage.getItem('kanbanOrder')

        if(!kanbanOrder){
            console.log('No order found')
            kanbanOrder = localStorage.setItem('kanbanOrder', JSON.stringify({items: []}))
        } else {
            JSON.parse(kanbanOrder)
            console.log(kanbanOrder)
            // this.setState({
            //     scannedItems: kanbanOrder
            // })
        }
    }


    componentDidUpdate(){

        console.log(this.state)
        

    }

    // shouldComponentUpdate(prevState){
    //     let update = true 
    //     let diff = this.state.scannedItems.filter(item => !prevState.scannedItems.includes(item))
    //     console.log(diff)

    //     return update

    // }

    confirm = () => {
        console.log(this.state.currentItem)
        let newItem = this.state.currentItem

        let currentItems = [...this.state.scannedItems, newItem]

        localStorage.removeItem('kanbanOrder')
        localStorage.setItem('kanbanOrder', JSON.stringify(currentItems))

        this.setState({
            scannedItems: currentItems,
            currentItem: null
        })
        
    }


    render(){
        let scanner = <QRscanner getItem={(item) => this.setState({ currentItem: item })} />

        let itemList = <QrItemList 
                            Items={this.state.scannedItems} 
                            Scan={()=> this.setState({ currentItem: null, scanner: true, viewItems: false })}
                            View={()=> this.setState({ currentItem: null, scanner: false, viewItems: true })}
                            Submit={()=> console.log('clickity boo')}
                        />



    

        let addedItem = <AddedItem Item={this.state.currentItem} 
                            Item = {this.state.currentItem}
                            Confirm={this.confirm}
                            Scan={()=> this.setState({ currentItem: null, scanner: true, viewItems: false })}
                            View={()=> this.setState({ currentItem: null, scanner: false, viewItems: true })}
                            
                        />

        let scannedItem = (
            <div className={classes.ScannedItem}>
                {addedItem}
            </div>
        )

        if(this.state.currentItem === null){
            addedItem = <div className={classes.Invisible}></div>
            
        }

        if(this.state.viewItems){
            <div className={classes.ScannedItem}>
                {addedItem}
            </div>

        }

        if(this.state.viewItems !== true){
            itemList = <div></div>
            //scannedItem = <div className={classes.Invisible}></div>
            // 
        }

        if(this.state.scanner === false){
            scanner = null
        }

        return(
        
        <div className={classes.Main}>
            <div className={classes.Title}>
                <h1>KANBAN SCAN</h1>
            </div>
            <div className={classes.QrContainer} >
                {scanner}
                {this.state.scanner ? <div className={classes.Btn} onClick={()=> this.setState({ viewItems: true, scanner: false})}>View Order</div> : <span></span> }
            </div>
            <div className={classes.ScannedItem}>
                {addedItem}
            </div>
            <div>
                {itemList}
            </div>
        </div>
        )
    }

}

export default QrContainer; 