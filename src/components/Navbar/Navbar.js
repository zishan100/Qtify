import React from 'react'
import styles from './Navbar.css'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import Button from '../Button/Button'
import LogoImg from '../../assets/logoimage.png';

export default function Navbar() {
  return (
    <nav className="Navbar" >
        <Logo pngImage={LogoImg} />
        <SearchBar />
        <Button />
    </nav>
  )
}
