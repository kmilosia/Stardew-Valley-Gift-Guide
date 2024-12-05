import { useEffect, useState } from 'react';
import { scrollTop } from '../../utils/utils'
import './ScrollTopButton.scss'
import { PiArrowFatLineUpFill } from 'react-icons/pi'

const ScrollTopButton = () => {
    const [showButton, setShowButton] = useState(false);
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowButton(currentScrollY > 0);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <button 
        className={`${showButton ? 'scroll-top-button--visible' : 'scroll-top-button--hidden'} scroll-top-button`} 
        onClick={() => scrollTop()}>
        <PiArrowFatLineUpFill />
        <span className='sr-only'>Scroll to the top of page</span>
    </button>
  )
}

export default ScrollTopButton
