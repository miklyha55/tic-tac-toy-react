import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store = {store}>
        <App></App>
    </Provider>
);

reportWebVitals();
