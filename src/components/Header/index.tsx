import icon from '../../../public/assets/images/logo.svg'
import { IoSunnyOutline,IoMoonOutline } from "react-icons/io5";
import { StyledContainer } from './style'
import { useState } from 'react';

interface ThemeProps {
  onThemeChange: (theme: string) => void;
}


export function Header({ onThemeChange }: ThemeProps) {

  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    const newTheme = isActive ? 'white' : 'dark';
    onThemeChange(newTheme);
    setIsActive(!isActive);
  }


  return (

    <StyledContainer>
      <img src={icon} className='icon' />
      <button className={isActive ? 'dark' : 'white'} onClick={handleClick}>
        {isActive ? <IoSunnyOutline /> : <IoMoonOutline />}
      </button>

    </StyledContainer>


  )
}
