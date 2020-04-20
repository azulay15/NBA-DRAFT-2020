import React from 'react';
import { players } from '../components/players';
import PlayersList from '../components/PlayersList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';



class App extends React.Component {
    constructor(){
        super()
        this.state = {
            players: players,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        };

    render() {
        const filterPlayers = this.state.players.filter(player => {
            return player.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className='tc'>
                <div className='header'>
                </div>
                <div>
                    <h1 className='f1 main-header'>NBA Draft - Class 0f 2020</h1>
                </div>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <PlayersList players={filterPlayers}/>
                </Scroll>
            </div>
    
        );
    }
}

export default App;