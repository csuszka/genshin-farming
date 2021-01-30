import React from 'react';
import './DomainIcon.css';



type Props = { 
  selectedCharacters: string[];
  setSelectedCharacters: (selectedCharacters: string[]) => void;
}

let DomainIcon = (props: Props) => {
  return (
  <div id='domainIcon' className='domain-icon'>

  </div>

  )
}

export default DomainIcon;