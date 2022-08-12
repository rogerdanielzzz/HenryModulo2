import React from 'react'
import Style from "./styles/NavBar.module.css"
import SearchBar from './SearchBar'
import icon from "./img/icon.png"

export default function NavBar({onSearch}) {
return (
<div className={Style.NavContainer}>
  <h3 className={Style.NavTitulo}><img className={Style.icon} src={icon} alt="Icon" /> TheRealWeahterApp</h3>
  <SearchBar onSearch={onSearch}
    />

</div>
)
} 