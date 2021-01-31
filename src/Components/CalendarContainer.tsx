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
      <WeekdayStripe day='Monday' selectedCharacters={props.selectedCharacters} />
      <WeekdayStripe day='Tuesday' selectedCharacters={props.selectedCharacters} />
      <WeekdayStripe day='Wednesday' selectedCharacters={props.selectedCharacters} />
      <WeekdayStripe day='Thursday' selectedCharacters={props.selectedCharacters} />
      <WeekdayStripe day='Friday' selectedCharacters={props.selectedCharacters} />
      <WeekdayStripe day='Saturday' selectedCharacters={props.selectedCharacters} />
      <WeekdayStripe day='Sunday' selectedCharacters={props.selectedCharacters} />
    </div>

  )
}

export default CalendarContainer;