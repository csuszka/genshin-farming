import { url } from 'inspector';
import React from 'react';
import './DomainIcon.css';



type Props = {
  domainName: string;
  selectedCharacters: string[];
}

let domainPictureUrl: string = 'https://static.wikia.nocookie.net/gensin-impact/images/a/a1/Domain_Forsaken_Rift.png';

let domainStyle = {
  backgroundSize: 'cover',
  backgroundImage: 'url(' + domainPictureUrl + ')'
}

let DomainIcon = (props: Props) => {
  return (
    <div id='domainIcon' className='domain-icon' style={domainStyle}>
      {props.domainName}
    </div>

  )
}

export default DomainIcon;