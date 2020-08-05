import React from 'react';


import Wrapper from './components/UI/Wrapper/Wrapper';

import Parallax from './components/UI/Parallax/Parallax';
import JsTextAnimation from './components/UI/JsTextAnimation/JsTextAnimation';
import BasicInputAnimation from './components/UI/BasicInputAnimation/BasicInputAnimation';
import Template from './components/Template/Template';

import classes from './App.module.css'

function App() {
  return (
    <Wrapper wrappedComponent="BasicInputAnimation">
        <BasicInputAnimation />
    </Wrapper>
  );
}

export default App;
