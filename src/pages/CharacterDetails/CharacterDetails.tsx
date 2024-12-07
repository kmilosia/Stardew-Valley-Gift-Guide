import { useParams } from 'react-router';
import { charactersInfo, items, itemTypes } from '../../utils/data';
import './CharacterDetails.scss';
import GiftItem from '../../components/GiftItem/GiftItem';
import { Item, SelectOption } from '../../utils/types';
import { useState } from 'react';
import Select from 'react-select';

const CharacterDetails = () => {
    const params = useParams<{ name: string }>();
    const characterInfo = charactersInfo.find((item) => item.name === params.name);
    const [selectedType, setSelectedType] = useState<string>('');

    const selectOptions: SelectOption[] = itemTypes.map((item) => ({
        value: item,
        label: item,
    }));

    const handleTypeChange = (selectedOption: SelectOption | null) => {
        setSelectedType(selectedOption ? selectedOption.value : '');
    };

    const filterItemsByType = (items: Item[]) => {
        if (!selectedType) return items;
        return items.filter((item) => item.type === selectedType);
    };

    // FIX ANY TYPES
    const getItemDetails = (itemIds: number[]) =>
        itemIds.map((id) => items.find((item) => item.id === id)).filter(Boolean);

    return (
        <main className="character-details-main">
            {characterInfo ? (
                <>
                    <section className="character-info">
                        <h1>{characterInfo.name}</h1>
                        <img
                            src={characterInfo.avatar}
                            alt={`${characterInfo.name}'s avatar`}
                        />
                    </section>
                    <Select
                          styles={{
                            control: (baseStyles, state) => ({
                              ...baseStyles,
                              background: 'rgba(255,255,255,0.2)',
                              backdropFilter: 'blur(5px)',
                              borderRadius: '0.5rem',
                              fontSize: '1.1rem',
                              padding: '0.3rem',
                              cursor: 'pointer',
                              color: 'black'
                            }),
                            placeholder: (baseStyles) => ({
                                ...baseStyles,
                                color: '#242424',
                            }),
                          }}
                        className='select-type'
                        options={selectOptions}
                        onChange={handleTypeChange}
                        placeholder="Choose item type"
                        isClearable
                    />
                    <section className="gifts">
                        <section>
                            <h2>Loved</h2>
                            <ul>
                                {filterItemsByType(getItemDetails(characterInfo.loved) as Item[]).map((item: Item) => (
                                    <GiftItem key={item.id} item={item} />
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2>Liked</h2>
                            <ul>
                                {filterItemsByType(getItemDetails(characterInfo.liked) as Item[]).map((item: Item) => (
                                    <GiftItem key={item.id} item={item} />
                                ))}
                            </ul>
                        </section>
                        <section>
                            <h2>Neutral</h2>
                            <ul>
                                {filterItemsByType(getItemDetails(characterInfo.neutral) as Item[]).map((item: Item) => (
                                    <GiftItem key={item.id} item={item} />
                                ))}
                            </ul>
                        </section>
                    </section>
                </>
            ) : (
                <section className='not-found'>
                    <img src="https://stardewvalleywiki.com/mediawiki/images/5/5e/DialogueBubbleHate.png" aria-hidden='true'/>
                    <h1>Character not found</h1>
              </section>
            )}
        </main>
    );
};

export default CharacterDetails;
