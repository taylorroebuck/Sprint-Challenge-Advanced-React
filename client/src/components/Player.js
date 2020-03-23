import React from 'react';

function Player(props) {
    return(
        <div className='player'>
            <h2>{props.players.name}</h2>
            <div className='player-info'>
                <h3>Country: {props.players.country}</h3>
                <h3>Number of Searches: {props.players.searches}</h3>
            </div>
        </div>
    )
};

export default Player;