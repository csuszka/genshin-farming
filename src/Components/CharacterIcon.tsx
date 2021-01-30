import React, { useState } from 'react';
import './CharacterIcon.css'


type Props = { character: string };

let characters: Record<string, { img: string; name: string; } | undefined> = {
  Jean: {
    name: 'Jean',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20200316/2020031619494241375.png'
  },
  Amber: {
    name: 'Amber',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20200310/2020031016592515874.png'
  },
  Lisa: {
    name: 'Lisa',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20200316/2020031619510379464.png'
  },
  Kaeya: {
    name: 'Kaeya',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20200316/2020031619490965086.png'
  },
  Barbara: {
    name: 'Barbara',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20200316/2020031619500256389.png'
  },
  Diluc: {
    name: 'Diluc',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20200316/2020031619504030315.png'
  },
  Razor: {
    name: 'Razor',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20200316/2020031619513419872.png'
  },
  Venti: {
    name: 'Venti',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20200316/2020031619520566339.png'
  },
  Klee: {
    name: 'Klee',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20200316/2020031619524764235.png'
  },
  Bennett: {
    name: 'Bennett',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20200312/2020031220001073799.png'
  },
  Noelle: {
    name: 'Noelle',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20200315/2020031517331182257.png'
  },
  Fischl: {
    name: 'Fischl',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20200330/2020033022164911534.png'
  },
  Sucrose: {
    name: 'Sucrose',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20200723/2020072319114696003.png'
  },
  Mona: {
    name: 'Mona',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20200828/2020082817270441202.png'
  },
  Diona: {
    name: 'Diona',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20201106/2020110618564834380.png'
  },
  Albedo: {
    name: 'Albedo',
    img: 'https://uploadstatic-sea.mihoyo.com/contentweb/20201216/2020121611141454228.png'
  }
}

let CharacterIcon = (props: Props) => {
  const [selected, setSelected] = useState(false);

  let handleClick = () => {
    setSelected(prev => !prev);
  }
 
  let characterName = props.character;
  let characterObject = characters[characterName];
  let image: string;
  if (characterObject) {
    image = characterObject.img;
  } else {
    throw new Error('Character not found')
  }
  return (
    <div id='characterIcon' className={selected ? 'character-icon selected' : 'character-icon'} onClick={handleClick}>
      <img src={image} alt={characterName} />
      <p>{characterName}</p>
    </div>

  )

}

export default CharacterIcon;