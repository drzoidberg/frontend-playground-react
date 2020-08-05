import React from 'react';


import Wrapper from './components/UI/Wrapper/Wrapper';
import Parallax from './components/UI/Parallax/Parallax';
import Dummy from './components/Dummy/Dummy';

import classes from './App.module.css'

function App() {
  return (
    <Wrapper wrappedComponent="Parallax">
        <Parallax />
    </Wrapper>
  );
}

export default App;
