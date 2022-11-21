import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import {Header} from "./components"
import {HeaderMenu} from "./configs/HeaderMenu"
import {URLPath} from "./helpers/URLPath"
import {Home, CharacterPage, ComicsPage} from "./pages"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <React.Fragment>
      <Header
        menus={HeaderMenu}
        activeMenu={URLPath()}
      />
      <div
        style={{height: "calc(100vh - 96px)"}}
        className="overflow-auto"
      >
         <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="characters" element={ <CharacterPage /> } />
          <Route path="comics" element={ <ComicsPage /> } />
        </Routes>
      </div>
      <div className='bg-red-600 px-3 py-1 text-center text-sm font-bold'>
        © 2022 hanafiantho
      </div>
    </React.Fragment>
  );
}

export default App;
