import React from 'react'
import styles from './Navbar.css'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import Button from '../Button/Button'

export default function Navbar() {
  return (
    <nav className="Navbar" >
        <Logo />
        <SearchBar />
        <Button />
    </nav>
  )
}
