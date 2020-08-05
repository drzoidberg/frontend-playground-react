import React from 'react';


import Wrapper from './components/UI/Wrapper/Wrapper';
import Template from './components/Template/Template';

import JsTextAnimation002glitchEffect from './components/UI/JsTextAnimation002glitchEffect/JsTextAnimation002glitchEffect';
import CustomSelectInput from './components/UI/CustomSelectInput/CustomSelectInput';
import BasicFullPageAnimation from './components/UI/BasicFullPageAnimation/BasicFullPageAnimation';
import ReadingProgress from './components/UI/ReadingProgress/ReadingProgress';
import SVGAnimationWithText from './components/UI/SVGAnimationWithText/SVGAnimationWithText';
import FluidImageContainer from './containers/FluidImageContainer/FluidImageContainer';
import Parallax from './components/UI/Parallax/Parallax';
import JsTextAnimation001 from './components/UI/JsTextAnimation001/JsTextAnimation001';
import BasicInputAnimation from './components/UI/BasicInputAnimation/BasicInputAnimation';

import classes from './App.module.css'

function App() {
  return (
    <Wrapper wrappedComponent="JsTextAnimation002glitchEffect">
        <JsTextAnimation002glitchEffect />
    </Wrapper>
  );
}

export default App;
