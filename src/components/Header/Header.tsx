import './Header.scss'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 0) {
      // Show header at the very top of the page
      setShowHeader(true);
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down, hide header
      setShowHeader(false);
    } else {
      // Scrolling up, show header
      setShowHeader(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={showHeader ? 'visible' : 'hidden'}>
      <Link to='/'>
        <div className='logo'>
          <img src={logo} />
        </div>
      </Link>
      <h1>Stardew Valley Gifts Guide</h1>
    </header>
  )
}

export default Header
