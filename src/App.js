import Login from './pages/Login';
import { VirtualAccount } from './pages/Dashboard/VirtualAccount';

import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/dashboard/" element={<VirtualAccount />}>
					<Route path="/dashboard/account" element={<VirtualAccount />} />
				</Route>

				<Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
			</Routes>
		</div>
	);
}

export default App;
