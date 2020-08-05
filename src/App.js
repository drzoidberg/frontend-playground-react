import React from 'react';


import Wrapper from './components/UI/Wrapper/Wrapper';
import Template from './components/Template/Template';

import ReadingProgress from './components/UI/ReadingProgress/ReadingProgress';
import SVGAnimationWithText from './components/UI/SVGAnimationWithText/SVGAnimationWithText';
import FluidImageContainer from './containers/FluidImageContainer/FluidImageContainer';
import Parallax from './components/UI/Parallax/Parallax';
import JsTextAnimation from './components/UI/JsTextAnimation/JsTextAnimation';
import BasicInputAnimation from './components/UI/BasicInputAnimation/BasicInputAnimation';

import classes from './App.module.css'

function App() {
  return (
    <Wrapper wrappedComponent="ReadingProgress">
        <ReadingProgress />
    </Wrapper>
  );
}

export default App;
