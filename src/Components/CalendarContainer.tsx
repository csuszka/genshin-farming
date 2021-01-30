import React from 'react';
import './CalendarContainer.css'
import WeekdayStripe from './WeekdayStripe'


type Props = {
  selectedCharacters: string[];
  setSelectedCharacters: (selecterCharacters: string[]) => void;
}

let CalendarContainer = (props: Props) => {
  return (
    <div id='calendarContainer' className='calendar-container'>
      <WeekdayStripe day='Monday' selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters} />
      <WeekdayStripe day='Tuesday' selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters} />
      <WeekdayStripe day='Wednesday' selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters} />
      <WeekdayStripe day='Thursday' selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters} />
      <WeekdayStripe day='Friday' selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters} />
      <WeekdayStripe day='Saturday' selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters} />
      <WeekdayStripe day='Sunday' selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters} />
    </div>

  )
}

export default CalendarContainer;