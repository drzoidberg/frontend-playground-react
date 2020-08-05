# frontend-playground

frontend-playground is a React project that serves as a wrapper around motly unrelated components

## 🔎 It explores
- basic layouts
- parallax effect

## 🧾 It uses
- CSS modules
- useEffect & useRef Hooks

## 🛠 Installation & 🚀 Usage

Use the node package manager [npm](https://npmjs.com/) to install frontend-playground.

```javascript
// for the installation
cd ./frontend-playground
npm i

// for running the project
npm start
```

## 🙋 How to test the components
Enter in the App Component and change the prop wrappedComponent and the name of the component you want to test

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