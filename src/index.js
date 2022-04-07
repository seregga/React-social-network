import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
window.store = store

reportWebVitals();
// export let renderEntireTree = () => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <Provider store={store}>
//                     <App store={store} />
//                 </Provider>
//             </BrowserRouter>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }

// renderEntireTree();

// store.subscribe(() => {
//     renderEntireTree();
// });


// export let renderEntireTree = (data) => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <StoreContext.Provider value={store}>
//                     <App />
//                 </StoreContext.Provider>
//             </BrowserRouter>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }