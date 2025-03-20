import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { StateManager } from './stateManager.jsx';
import { initialState } from './initialState.js';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<StateManager initialState={initialState}>
			<App />
		</StateManager>
	</StrictMode>,
);
