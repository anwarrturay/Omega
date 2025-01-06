import React, { useState, useEffect } from 'react';
import InputArea from './components/InputArea';
import LineItems from './components/LineItems';
// import Counter from './Features/Counter/Counter';
import { useSelector } from 'react-redux';
import { allItems } from './Features/itemsSlice';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  const [search, setSearch] = useState('');
  const items = useSelector(allItems);
  const [searchResults, setSearchResults] = useState([])

    useEffect(()=>{
      const searchedResults = items.filter((item)=> ((item.listItem).toLowerCase()).includes(search.toLowerCase()));
      setSearchResults(searchedResults);
    }, [items, search]);

  return (
    <div>
      <Header />
      <main className='flex flex-col items-center justify-center mt-12'>
        <InputArea />
        <input 
            id='search'
            className='border border-[#ccc] m-2 w-[300px] py-2.5 pl-2 rounded-md outline-none placeholder:font-montserrat xs:w-[420px] sm:w-[600px] md:w-[690px] lg:w-[300px] xl:w-[400px] xl:m-3 focus:ring-2 focus:ring-blue-500'
            type="search"
            placeholder='Search....'
            value={search}
            onChange={(e)=> setSearch(e.target.value)} 

          />
        <LineItems searchResults={searchResults}/>
        {/* <Counter /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
