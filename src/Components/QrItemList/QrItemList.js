import React from 'react';
import classes from './QrItemList.module.css';
import QrButtons from '../QrButtons/QrButtons';

const QrItemList = (props) => {

    let key = 1;

    let itemsList = props.Items.map(item => {
        key += 1; 
        return <div className={classes.Item} key={key}>{item}</div>
    })

    if(!props.Items){
        itemsList = <div></div>
    }

    return(
        <div className={classes.QrItemList}>
            <div className={classes.Header}>
                <h1>Scanned Items</h1>
            </div>
            <div classname={classes.List}>
            {itemsList}
            </div>
            <QrButtons Scan={props.Scan} Submit={props.Submit} />
        </div>
    )

}

export default QrItemList