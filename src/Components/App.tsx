import React, {useState} from 'react';
import './App.css';
import CharacterContainer from './CharacterContainer';
import CalendarContainer from './CalendarContainer';

function App() {
  let [selectedCharacters, setSelectedCharacters] = useState([] as string[]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Select your team</h1>
      </header>
      <CharacterContainer selectedCharacters={selectedCharacters} setSelectedCharacters={setSelectedCharacters} />
      <CalendarContainer selectedCharacters={selectedCharacters} setSelectedCharacters={setSelectedCharacters} />
    </div>
  );
}

export default App;
