export const scrollTop = () => {
    window.scrollTo(0, 0);
}

export const selectStyles = {
    control: (baseStyles:any) => ({
      ...baseStyles,
      background: 'rgba(255,255,255,0.2)',
      backdropFilter: 'blur(5px)',
      borderRadius: '0.5rem',
      fontSize: '1.1rem',
      padding: '0.3rem',
      cursor: 'pointer',
      color: 'black'
    }),
    placeholder: (baseStyles:any) => ({
        ...baseStyles,
        color: '#242424',
    }),
    menuList: (baseStyles:any) => ({
        ...baseStyles,
        maxHeight: '10rem',
        overflowY: 'auto', 
    }),
  }