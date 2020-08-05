# frontend-playground-react

frontend-playground-react is a React project that serves as a wrapper around mostly unrelated components. They're usually centered around UI animation and effects



## 🔎 It explores
- basic layouts
- parallax effect
- text & layout animations



## 🧾 It uses
- CSS modules
- useEffect & useRef Hooks
- class-based components & functional components



## 📦 Contents

With only tuning a few lines of these components, real cool and different effects can be achieved

### JsTextAnimation001
A simple text using vanilla JS and React Hooks. Kinda versatile.

### SVGAnimationWithText
A simple SVG animation (in the shape of text) built with class-based and functional.

### Parallax
A simple parallax effect using vanilla JS and React Hooks

### CustomSelectInput
A simple styled select input, with no animations

### BasicInputAnimation
A simple input animation built with React Hooks and CSS

### ReadingProgress
A simple horizontal progress that indicates the position of the current viewport, with CSS styles applied

### BasicFullPageAnimation // 🚧 WIP
A simple example of a SPA using the barba.js library and gsap

### FluidImageContainer // 🚧 WIP
A a tiny gallery using class-based components and some css effects applied.


## 🛠 Installation & 🚀 Usage

Use the node package manager [npm](https://npmjs.com/) to install frontend-playground-react.

```javascript
// for the installation
cd ./frontend-playground-react
npm i

// for running the project
npm start
```



## 🙋‍♂️ How to test the components
These components *unless otherwise stated* are thought to be used in a visual and aesthetically manner. That's why the structure *component-parent component* is what it is.

- Enter in the App Component and change the prop wrappedComponent and the name of the component you want to test
- Save App.js
- You're good to go!

```javascript
import React from 'react';


import Wrapper from './components/UI/Wrapper/Wrapper';
import Parallax from './components/UI/Parallax/Parallax';

function App() {
  return (
    <Wrapper wrappedComponent="Parallax">
        <Parallax />
    </Wrapper>
  );
}
```
