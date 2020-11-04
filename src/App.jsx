import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Planets from './components/Planets.jsx'
import People from './components/People.jsx'
import { ReactQueryDevtools as Devtools } from 'react-query-devtools'

const initialState = 'planets'


function App() {
  const [Page, setPage] = useState(initialState)
  return (
    <>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {Page === 'planets' ? <Planets /> : <People />}
        </div>
      </div>
      <Devtools initialIsOpen={false} />
    </>
  );
}

export default App;
