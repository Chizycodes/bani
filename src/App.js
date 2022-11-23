import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="*" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
