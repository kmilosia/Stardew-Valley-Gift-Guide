import './Header.scss'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setScrollDirection('down');
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection('up');
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
    <header className={scrollDirection === 'up' ? 'show' : 'hide'}>
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
