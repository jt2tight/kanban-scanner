import React from "react";
import classes from './AddedItem.module.css';
import QrButtons from "../QrButtons/QrButtons";

const AddedItem = (props) => {


    return(
        <div className={classes.Modal}>
        <div className={classes.AddedItem}>
            <div className={classes.ItemInfo}>
                <p>{props.Item}</p>
            </div>
            <QrButtons Scan={props.Scan} View={props.View} Item={props.Item} Confirm={props.Confirm} />
            {/* <div className={classes.Actions}>
                <div className={classes.Button} id="Scan_Another" onClick={props.Scan}>
                    <p>Add More Items</p>
                </div>
                <div className={classes.Button} id="View_List" onClick={props.View}>
                    <p>View Items</p>
                </div>
            </div> */}

        </div>
        </div>
    )
}

export default AddedItem