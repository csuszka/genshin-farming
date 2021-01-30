import React from 'react';
import './WeekdayStripe.css';
import DomainIcon from './DomainIcon';
import CharacterIcon from './CharacterIcon';



type Props = {
  day: string;
  selectedCharacters: string[];
  setSelectedCharacters: (selectedCharacters: string[]) => void;
}

let WeekdayStripe = (props: Props) => {
  let characterArray = props.selectedCharacters;
  return (
    <div id='weekdayStripe' className='weekday-stripe'>
      {props.day} {characterArray}
    </div>

  )
}

export default WeekdayStripe;