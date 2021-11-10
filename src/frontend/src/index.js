import React from 'react';
import ReactDOM from 'react-dom';
import "./i18n";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// i18next.init({
//     interpolation: { escapeValue: false },  // React already does escaping
// });

ReactDOM.render(
    <React.StrictMode>
            <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
