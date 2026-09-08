import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error('Failed to find the root element in index.html. Make sure there is an element with id="root" in your HTML file.');
}

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
)