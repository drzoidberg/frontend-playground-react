# CSS-Tricks

A list of CSS properties, selectors, pseudoselectors, hacks and so on that I find interesting

👁: watch out! Not fully compatible with multiple browsers. If it's a css property, use prefixes. Anyway caniuse link is usually provided provided

## CSS properties
### Native smooth scroll
```css
div {
    scroll-behaviour: smoooth 👁
}
```

## Document styling
### A saner way to set units
```css
body {
    font-size: 62.5%;  /* placed in body then you can use 1.5rem that it converts to 15px */
}
```

### Make a custom
```css
p {
    display: inline;
    background: linear-gradient(to left, rgb(1,200,43), rgb(43,1,200));
    background-clip: text; 👁
    text-fill-color: transparent; 👁
}
/* take a look at the TextMaskMovingAnimation component */
```
