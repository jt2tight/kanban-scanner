import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import classes from './QRscanner.module.css';
import { library} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons'


const QRscanner = (props) => {
    const [data, setData ] = useState('No Result')
    const [camera, setCamera] = useState('user')

    const [scanDelay, setDelay ] = useState(3000)

    let constraints = { facingMode : camera }

    console.log(constraints)
    
    const switchCamera = () => {

        if(camera === 'user'){
            setCamera('environment')
        }

        if(camera === 'environment'){
            setCamera('user')
        }
    }


    return(
        <div className={classes.ScannerContainer}>
        <QrReader className={classes.QRscanner} scanDelay={3000}
            onResult={(result, error) =>{
                if(!!result){
                    setData(result?.text)
                    setDelay(60000)
                    navigator.getUserMedia({audio: false, video: true}, (stream)=> {
                        let track = stream.getTracks()[0]
                        track.stop()
                    },(err => console.log(err)))
                    return props.getItem(result?.text)
                    
                }
                if(error){
                    console.info(error)
                }
            }}

            />
            <div className={classes.Flip} constraints={constraints} onClick={() => switchCamera()}>Flip Camera</div>
            {/* <p>{data}</p> */}
        </div>

    );
};

export default QRscanner