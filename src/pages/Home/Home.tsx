import CharacterItem from '../../components/CharacterItem/CharacterItem'
import { characters } from '../../utils/data'
import { Character } from '../../utils/types'
import './Home.scss'

const Home = () => {
  return (
    <main>
      <h2>Characters</h2>
      <section className='characters-list'>
        <ul>
          {characters.map((item: Character) => (
            <CharacterItem key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Home
