import { useState } from 'react';
import { apiGenerator } from './misc/config';
import ShowGrid from './show/ShowGrid';
import ActorGrid from './actor/ActorGrid';
import style from '../../styles/boxOffice.module.css';

const BoxOfficeApp = () => {
   const [input, setInput] = useState('');
   const [filmState, setFilmState] = useState(null);
   const [searchOption, setSearchOption] = useState(null);

   const handleInput = (e) => {
      setInput(e.target.value);
   };
   const handleSearch = async (e) => {
      if (e === '') {
         alert('Please Type Something!');
      } else if (searchOption === null) {
         alert('Please choose actor or show!');
      } else {
         apiGenerator(
            `https://api.tvmaze.com/search/${searchOption}?q=${e}`
         ).then((films) => setFilmState(films));
      }
   };

   const handleKey = (e) => {
      if (e.keyCode === 13) {
         handleSearch(input);
      }
   };

   function handleSearchOption(e) {
      setSearchOption(e.target.value);
      setFilmState('');
   }

   const renderResult = () => {
      if (filmState && filmState.length === 0) {
         return <p>Nothing Found</p>;
      }
      if (filmState && filmState.length > 0) {
         if (searchOption === 'shows') {
            return <ShowGrid filmState={filmState} />;
         } else if (searchOption === 'people') {
            return <ActorGrid filmState={filmState} />;
         }
         return null;
      }
      return null;
   };

   return (
      <div className={`${style.divBoxOffice} `}>
         <div className={`${style.gridLayout} firstDiv`}>
            <input
               className={` ${style.inpt}`}
               type="text"
               onChange={handleInput}
               onKeyDown={handleKey}
               value={input}
               placeholder="Search for films"
            />

            <div
               className={`${style.btn}  searchDiv`}
               onClick={() => handleSearch(input)}
            >
               Search
            </div>
         </div>

         <div className={`${style.gridLayout}`}>
            <label style={{ display: 'flex' }} htmlFor="shows">
               <div className={`${style.btn} btn `}>
                  Search Show
                  <input
                     className={style.radioInpt}
                     type="radio"
                     name="search"
                     id="shows"
                     value="shows"
                     onClick={handleSearchOption}
                  />
               </div>
            </label>

            <label style={{ display: 'flex' }} htmlFor="people">
               <span className={`${style.btn} btn`}>
                  Search Actor
                  <input
                     className={style.radioInpt}
                     type="radio"
                     name="search"
                     id="people"
                     value="people"
                     onClick={handleSearchOption}
                  />
               </span>
            </label>
         </div>

         <div>
            <div
               style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
               }}
            >
               {renderResult()}
            </div>
         </div>

         <style jsx>{`
            .firstDiv {
               margin-bottom: 50px;
            }
            .btn {
               width: 80%;
               height: 70px;
            }
            .searchDiv {
               font-size: 1.4rem;
            }
         `}</style>
      </div>
   );
};

export default BoxOfficeApp;
