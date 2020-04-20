import React from 'react';
import Card from './Card';

const PlayersList = ({ players }) => {
    return (
        <div>
            {
            players.map((player, i) => {
                return (
                    <Card 
                        key={i}
                        playerHeight={players[i].playerHeight}
                        name={players[i].name}
                        position={players[i].position}
                        image={players[i].image}
                        ndrName={players[i].ndrName}
                        espnName={players[i].espnName}
                        brName={players[i].brName}
                        taName={players[i].taName}
                        combinedName={players[i].combinedName}
                        pts={players[i].pts}
                        reb={players[i].reb}
                        ast={players[i].ast}
                        stl={players[i].stl}
                        blk={players[i].blk}
                        min={players[i].min}
                        to={players[i].to}
                        fg={players[i].fg}
                        threePoint={players[i].threePoint}
                        ft={players[i].ft}
                        team={players[i].team}
                        teamImage={players[i].teamImage}
                        compImage={players[i].compImage}
                        />
                    );
                })
            }
        </div>
    );
}



export default PlayersList;