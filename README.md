# frontend-playground-react

frontend-playground-react is a React project that serves as a wrapper around mostly unrelated components. Usually centered in UI animation and effects



## 🔎 It explores
- basic layouts
- parallax effect



## 🧾 It uses
- CSS modules
- useEffect & useRef Hooks



## 📦 Contents

### JsTextAnimation
Simple text using vanilla JS and React Hooks

### Parallax
Simple parallax effect using vanilla JS and React Hooks



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
