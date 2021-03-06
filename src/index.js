import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import App from './App';
import './assets/scss/index.scss';
import * as serviceWorker from './serviceWorker';

const renderMethod = process.env.NODE_ENV !== 'production' ? ReactDOM.render : ReactDOM.hydrate;

window.onload = () => {
  Loadable.preloadReady().then(() => {
    renderMethod(
      App,
      document.getElementById('root')
    );
  });
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
