import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return(
        <div className={classes.Header}>
            <div className={classes.Navbar}>
                {/* <div className={classes.Logo}>
                    
                <h1><NavLink to="/" exact>KANBAN SCANNER</NavLink></h1>
                </div> */}
                {/* <div className={classes.Links}>
                    <ul>
                        <li><NavLink to="/cancel" exact>Clear</NavLink></li>
                        
                        
                    </ul>

                </div> */}
                <div className={classes.Links}>
                <NavLink to="/cancel" exact>CLEAR</NavLink>
                </div>
            </div>

        </div>
    )
}

export default Header; 