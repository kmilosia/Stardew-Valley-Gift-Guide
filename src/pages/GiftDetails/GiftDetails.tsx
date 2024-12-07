import { useParams } from 'react-router';
import { items } from '../../utils/data';
import './GiftDetails.scss'

const GiftDetails = () => {
    const params = useParams<{ id: string }>();
    const giftId = params.id ? parseInt(params.id, 10) : NaN;
    const giftInfo = items.find((item) => item.id === giftId);

  return (
    <main className='gift-details'>
        {giftInfo ? (
            <section>
                <img src={giftInfo.image} alt={giftInfo.name} />
                <h1>{giftInfo.name}</h1>
                <p>{giftInfo.type}</p>
            </section>
        ) : (
          <section>
            <img src="https://stardewvalleywiki.com/mediawiki/images/5/5e/DialogueBubbleHate.png" aria-hidden='true'/>
            <h1>Item not found</h1>
          </section>
        )}
    </main>
  )
}

export default GiftDetails
