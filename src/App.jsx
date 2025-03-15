import { Navigate, Route, Routes } from 'react-router-dom';
import { ErrorPage, MainPage, TodoPage } from './Pages';
import './App.module.scss';

function App() {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/todo/:id" element={<TodoPage />} />
				<Route path="/404" element={<ErrorPage />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</div>
	);
}

export default App;
