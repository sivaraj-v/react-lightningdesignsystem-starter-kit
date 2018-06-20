// import css from '../css/custom.css'
// import homeIcon from '../img/mario.png';
// var homeImg = document.getElementById('home');
// homeImg.src = homeIcon;
// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // { a: 3, b: 4 }
// [5, 6].map(n => console.log(n));
// const add2 = num => num + 2
// console.log(add2(2)); //testing arrow function
require('../../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css')

import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
// import App from './form';
const App = Loadable({
  loader: () => import('./form'),
  loading: () => <h1>Loading...</h1>,
});
class Columns extends React.Component {
    render() {
      return (
        <React.Fragment>
          <App/>
        </React.Fragment>
      );
    }
  }


  // import Loadable from 'react-loadable';

// const form = Loadable({
//   loader: () => import('./form'),
//   loading: () => <div>Loading...</div>,
// });

// const MyComponent = () => (
//   <form/>
// );

ReactDOM.render(<Columns />, document.getElementById('app'));