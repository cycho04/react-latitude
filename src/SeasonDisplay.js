import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Summer Time',
        iconName: 'sun'
    },
    winter: {
        text: 'Winter Time',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {

    const mySeason = getSeason(props.latitude, new Date().getMonth());

    const {text, iconName} = seasonConfig[mySeason];

    return (
        <div className={`season-display ${mySeason}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
};

export default SeasonDisplay;