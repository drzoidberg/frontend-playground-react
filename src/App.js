import React from 'react';


import Wrapper from './components/UI/Wrapper/Wrapper';
import Template from './components/Template/Template';

import FluidImageContainer from './containers/FluidImageContainer/FluidImageContainer';
import Parallax from './components/UI/Parallax/Parallax';
import JsTextAnimation from './components/UI/JsTextAnimation/JsTextAnimation';
import BasicInputAnimation from './components/UI/BasicInputAnimation/BasicInputAnimation';

import classes from './App.module.css'

function App() {
  return (
    <Wrapper wrappedComponent="FluidImageContainer">
        <FluidImageContainer />
    </Wrapper>
  );
}

export default App;
