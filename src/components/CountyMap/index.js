export { default } from "./CountyMap";
// This allows us to import CountyMap from the directory without knowing about internal file structure.

// Putting a lot of code into <directory>/index.js files means that when you’re looking at a stacktrace,
// or opening different source files inside the browser, they’re all going to be named index.js.
// Life is easier when components live inside a file named the same as the component you’re using.
