import React from 'react';
import './CharacterContainer.css'
import CharacterIcon from './CharacterIcon';



let CharacterContainer = () => {
  return (
  <div id='CharacterContainer' className='character-container'>
    <CharacterIcon character='Jean' />
    <CharacterIcon character='Amber' />
    <CharacterIcon character='Kaeya' />
    <CharacterIcon character='Barbara' />
    <CharacterIcon character='Diluc' />
    <CharacterIcon character='Razor' />
    <CharacterIcon character='Venti' />
    <CharacterIcon character='Klee' />
    <CharacterIcon character='Bennett' />
    <CharacterIcon character='Noelle' />
    <CharacterIcon character='Fischl' />
    <CharacterIcon character='Sucrose' />
    <CharacterIcon character='Mona' />
    <CharacterIcon character='Diona' />
    <CharacterIcon character='Albedo' />
  </div>

  )
}

export default CharacterContainer;