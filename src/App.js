import React from 'react';


import Wrapper from './components/UI/Wrapper/Wrapper';
import Parallax from './components/UI/Parallax/Parallax';
import JsTextAnimation from './components/UI/JsTextAnimation/JsTextAnimation';
import Template from './components/Template/Template';

import classes from './App.module.css'

function App() {
  return (
    <Wrapper wrappedComponent="JsTextAnimation">
        <JsTextAnimation />
    </Wrapper>
  );
}

export default App;
