import { useNavigate } from 'react-router-dom'
import './PageNotFound.scss'
import { PiArrowArcLeftBold } from "react-icons/pi";

const PageNotFound = () => {
    const navigate = useNavigate();
  return (
    <main className='page-not-found'>
      <img src='https://stardewvalleywiki.com/mediawiki/images/6/67/Void_Chicken.png' alt='Void Chicken'/>
      <h1>Page not found!</h1>
      <button onClick={() => navigate(-1)}>
        <PiArrowArcLeftBold />
        Navigate back to previous page
      </button>
    </main>
  )
}

export default PageNotFound
