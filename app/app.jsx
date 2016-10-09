var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'Dustin',
  location: 'Savannah',

};

var objTwo = {
  age :25,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>boilerplate app</h1>,
  document.getElementById('app')
);
