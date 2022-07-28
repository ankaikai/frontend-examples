import React from 'react';
import classes from './PersonInfo.module.scss';
import photo from '../../../images/cat.jpg';

const PersonInfo = () => {
    return (
        <div className={classes.personInfo}>
            <div className={classes.image}>
                <img src={photo} alt="Ava" />
            </div>
            <div className={classes.description}>
                <h3 className={classes.name}>
                    Anton K.
                </h3>
                <p>
                   Date of Birth: <span className={classes.descriptionValue}>99 may</span>
                </p>
                <p>
                   City: <span className={classes.descriptionValue}>Kyiv</span>
                </p>
                <p>
                   Education: <span className={classes.descriptionValue}>From God</span>
                </p>
            </div> 
        </div>
    );
}
export default PersonInfo;