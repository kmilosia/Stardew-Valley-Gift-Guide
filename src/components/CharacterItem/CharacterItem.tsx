import { Link } from 'react-router-dom'
import { Character } from '../../utils/types'
import './CharacterItem.scss'

const CharacterItem = ({item} : {item: Character}) => {
  return (
    <li className='character-item'>
      <Link to={`/${item.name}`}>
        <div className='character-link'>
          <img src={item.avatar} alt={`${item.name}'s avatar`}/>
          <h3>{item.name}</h3>
        </div>
      </Link>
    </li>
  )
}

export default CharacterItem
