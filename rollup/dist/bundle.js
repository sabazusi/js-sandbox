(function (React,ReactDOM) {
'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

var target = document.querySelector('#main');

ReactDOM.render(React.createElement(Container, null), target);

}(React,ReactDOM));
