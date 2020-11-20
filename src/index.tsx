import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';

const render = () => {
    const App = require('./App').default;

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./App', render);
}
