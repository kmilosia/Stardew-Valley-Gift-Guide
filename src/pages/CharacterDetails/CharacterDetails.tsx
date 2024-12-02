import { useParams } from 'react-router';
import { charactersInfo, items } from '../../utils/data';
import './CharacterDetails.scss';

const CharacterDetails = () => {
    const params = useParams<{ name: string }>();
    const characterInfo = charactersInfo.find((item) => item.name === params.name);

    // FIX ANY TYPES
    const getItemDetails = (itemIds: any) =>
        itemIds.map((id: any) => items.find((item: any) => item.id === id)).filter(Boolean);

    return (
        <main className='character-details-main'>
            {characterInfo && (
                <>
                    <section className='character-info'>
                        <h1>{characterInfo.name}</h1>
                        <img src={characterInfo.avatar} alt={`${characterInfo.name}'s avatar`} />
                    </section>

                    <section className='gifts'>
                        <section>
                            <h2>Loved</h2>
                            <ul>
                                {getItemDetails(characterInfo.loved).map((item: any) => (
                                    <li key={item.id}>
                                        <img src={item.image} alt={item.name} />
                                        <p>{item.name}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2>Liked</h2>
                            <ul>
                                {getItemDetails(characterInfo.liked).map((item: any) => (
                                    <li key={item.id}>
                                        <img src={item.image} alt={item.name} />
                                        <p>{item.name}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2>Neutral</h2>
                            <ul>
                                {getItemDetails(characterInfo.neutral).map((item: any) => (
                                    <li key={item.id}>
                                        <img src={item.image} alt={item.name} />
                                        <p>{item.name}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </section>
                </>
            )}
        </main>
    );
};

export default CharacterDetails;
