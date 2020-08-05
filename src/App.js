import React from 'react';


import Wrapper from './components/UI/Wrapper/Wrapper';
import Parallax from './components/UI/Parallax/Parallax';
import JsTextAnimation from './components/UI/JsTextAnimation/JsTextAnimation';
import Dummy from './components/Dummy/Dummy';

import classes from './App.module.css'

function App() {
  return (
    <Wrapper wrappedComponent="JsTextAnimation">
        <JsTextAnimation />
    </Wrapper>
  );
}

export default App;
