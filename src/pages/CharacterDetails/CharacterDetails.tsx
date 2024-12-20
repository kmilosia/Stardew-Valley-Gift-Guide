import { useParams } from 'react-router';
import { charactersInfo, items, itemTypes } from '../../utils/data';
import './CharacterDetails.scss';
import GiftItem from '../../components/GiftItem/GiftItem';
import { Item, SelectOption } from '../../utils/types';
import { useState } from 'react';
import Select from 'react-select';
import { selectStyles } from '../../utils/utils';

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
                        styles={selectStyles}
                        className='select-type'
                        options={selectOptions}
                        onChange={handleTypeChange}
                        placeholder="Choose item type"
                        isClearable
                        isSearchable={false}
                    />
                    <section className="gifts">
                        {filterItemsByType(getItemDetails(characterInfo.loved) as Item[]).length > 0 && (
                        <section>
                            <h2>Loved</h2>
                            <ul>
                                {filterItemsByType(getItemDetails(characterInfo.loved) as Item[]).map((item: Item) => (
                                    <GiftItem key={item.id} item={item} />
                                ))}
                            </ul>
                        </section>)}
                        {filterItemsByType(getItemDetails(characterInfo.liked) as Item[]).length > 0 && (
                        <section>
                            <h2>Liked</h2>
                            <ul>
                                {filterItemsByType(getItemDetails(characterInfo.liked) as Item[]).map((item: Item) => (
                                    <GiftItem key={item.id} item={item} />
                                ))}
                            </ul>
                        </section>)}
                        {filterItemsByType(getItemDetails(characterInfo.neutral) as Item[]).length > 0 && (
                        <section>
                            <h2>Neutral</h2>
                            <ul>
                                {filterItemsByType(getItemDetails(characterInfo.neutral) as Item[]).map((item: Item) => (
                                    <GiftItem key={item.id} item={item} />
                                ))}
                            </ul>
                        </section>)}
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
