import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const Navbar = ({userInfo, onSearchNote, handleClearSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = () =>{
    if(searchQuery){
      onSearchNote(searchQuery)
    }
  };

  const onClearSearch = () =>{
    setSearchQuery("");
    handleClearSearch()
  }

  const onLogout = () =>{
    localStorage.clear();
    navigate("/login");
  }
  return (
    <div className='flex items-center justify-between px-6 py-2 drop-shadow bg-yellow-500'>
        <h2 className='text-xl font-medium text-white py-2'>Notes</h2>
        <SearchBar value={searchQuery} onChange={({target}) => {setSearchQuery(target.value)}} handleSearch={handleSearch} onClearSearch={onClearSearch}/>
        {userInfo && <ProfileInfo userInfo={userInfo} onLogout={onLogout}/>}
    </div>
  )
}

export default Navbar