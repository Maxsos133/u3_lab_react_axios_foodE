import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react'

const Nav = () => {

    let navigate = useNavigate()
    const [searchName, setSearchName] = useState('');

    const showCocktail = (search) => {
        navigate(`/cocktails/${search}`)
      }

      const handleSearch = (e) => {
        e.preventDefault()
        showCocktail(searchName)
        setSearchName('')
      }
  
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <form onSubmit={handleSearch}>
            <input type="text"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    placeholder='Search by cocktail name'/>
                    <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default Nav
