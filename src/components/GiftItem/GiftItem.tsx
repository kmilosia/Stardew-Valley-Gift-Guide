import { Link } from "react-router-dom";
import { Item } from "../../utils/types"
import './GiftItem.scss'

interface GiftItemProps {
    item: Item;
};

const GiftItem = ({item}: GiftItemProps) => {
  return (
    <li className="gift-item">
      <Link to={`/item/${item.id}`}>
        <img src={item.image} alt={item.name} />
        <span className="tooltip">{item.name}</span>
      </Link>
    </li>
  )
}

export default GiftItem
