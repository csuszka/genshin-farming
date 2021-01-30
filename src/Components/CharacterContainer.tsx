import React from 'react';
import './CharacterContainer.css'
import CharacterIcon from './CharacterIcon';

type Props = { 
  selectedCharacters: string[];
  setSelectedCharacters: (selecterCharacters: string[]) => void;
}

let CharacterContainer = (props: Props) => {
  return (
  <div id='characterContainer' className='character-container'>
    <CharacterIcon selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters}character='Jean' />
    <CharacterIcon selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters}character='Amber' />
    <CharacterIcon selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters}character='Kaeya' />
    <CharacterIcon selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters}character='Barbara' />
    <CharacterIcon selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters}character='Diluc' />
    <CharacterIcon selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters}character='Razor' />
    <CharacterIcon selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters}character='Venti' />
    <CharacterIcon selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters}character='Klee' />
    <CharacterIcon selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters}character='Bennett' />
    <CharacterIcon selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters}character='Noelle' />
    <CharacterIcon selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters}character='Fischl' />
    <CharacterIcon selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters}character='Sucrose' />
    <CharacterIcon selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters}character='Mona' />
    <CharacterIcon selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters}character='Diona' />
    <CharacterIcon selectedCharacters={props.selectedCharacters} setSelectedCharacters={props.setSelectedCharacters}character='Albedo' />
  </div>

  )
}

export default CharacterContainer;