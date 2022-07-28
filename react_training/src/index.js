import reportWebVitals from './reportWebVitals';
import React from 'react';
import state, {subscribe} from './state_redux/state';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { addPosts } from './state_redux/state'
import { updateTextArea } from './state_redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerender = () => {
    root.render(
        <React.StrictMode>
            <App state={state} updateTextArea={updateTextArea} addPosts={addPosts} />
        </React.StrictMode>
    );
}
rerender(state);
subscribe(rerender);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
