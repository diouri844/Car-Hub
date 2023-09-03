"use client"


import { useState } from 'react';
import SearchManuFacturer from './searchManufacturer';

function SearchBar() {
    // setup a default manufacturer :
    const [manufacturer, setManufacturer] = useState("");
    const HandelSearch = ()=>{};
    return (
    <form className='searchbar'
    onSubmit={HandelSearch}>
        <div className='searchbar__item'>
            {/* to complete later  */}
            <SearchManuFacturer 
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar;