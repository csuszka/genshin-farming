import React from 'react';
import './WeekdayStripe.css';
import DomainIcon from './DomainIcon';
import CharacterIcon from './CharacterIcon';



type Props = {
  day: string;
  selectedCharacters: string[];
}

let WeekdayStripe = (props: Props) => {
  let characterArray = props.selectedCharacters;
  let domainName = 'Forsaken Rift'
  return (
    <div id='weekdayStripe' className='weekday-stripe'>
      <div>
        {props.day}
      </div>
      <div>
        {characterArray}
      </div>
      <div>
        <DomainIcon domainName={domainName} selectedCharacters={props.selectedCharacters} />
      </div>
    </div>

  )
}

export default WeekdayStripe;