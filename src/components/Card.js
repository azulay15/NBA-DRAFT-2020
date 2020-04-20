import React from 'react';
import './Card.css';

const Card = ({ image, name, playerHeight, team, position, ndrName, espnName, brName, taName, combinedName, pts, reb, ast, stl, blk, min, to, fg, threePoint, ft, teamImage, compImage}) => {
    return(
        <div className='bg-dark-red dib br3 pa3 ma2 grow tc bw2 shadow-5 card'>
            <img alt={name} src={image} width='200' height='240' class='image'/>
            <div className="personal-deatails">
                <h3>{name}</h3>
                <p>{position}</p>
                <p>{playerHeight}</p>
                <p>{team}</p>
            </div>
            <div className="site-rank">
                <h3>MockDraft Rank</h3>
                <p>{ndrName}</p>
                <p>{espnName}</p>
                <p>{brName}</p>
                <p>{taName}</p>
                <p>{combinedName}</p>
            </div>
            <div className="site-rank">
                <h3>Season states</h3>
                <p>PTS - {pts}</p>
                <p>REB - {reb}</p>
                <p>AST - {ast}</p>
                <p>STL - {stl}</p>
                <p>BLK - {blk}</p>
            </div>
            <div className="site-rank">
                <h3>More states</h3>
                <p>MIN - {min}</p>
                <p>TO - {to}</p>
                <p>FG% - {fg}</p>
                <p>3P% - {threePoint}</p>
                <p>FT% - {ft}</p>
            </div>
            <div className="site-rank">
                <h3>Team Select</h3>
                <img src={teamImage} className='teamImage' />
            </div>
            <div className="site-rank">
                <h3>Player Comparasion</h3>
                <img src={compImage} className='compImage' />
            </div>
        </div>
    );
}

export default Card;