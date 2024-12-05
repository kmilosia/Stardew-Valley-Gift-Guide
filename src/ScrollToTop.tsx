import { useEffect } from 'react'
import { useLocation } from 'react-router';
import { scrollTop } from './utils/utils';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      scrollTop();
    }, [pathname]);
  
    return null;
}

export default ScrollToTop
