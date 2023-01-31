import Login from './pages/Login';
import { VirtualAccount } from './pages/Dashboard/VirtualAccount';
import { AuthContextProvider } from './context/AuthContext';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {
	return (
		<div className="bg-[#F5F6FA]">
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/dashboard"
						element={
							<PrivateRoutes>
								<VirtualAccount />
							</PrivateRoutes>
						}
					/>
					<Route
						path="/dashboard/virtual-account"
						element={
							<PrivateRoutes>
								<VirtualAccount />
							</PrivateRoutes>
						}
					/>

					<Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
