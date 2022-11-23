import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/dashboard');
	};
	return (
		<div className="bg-[#F5F6FA] w-full flex justify-center min-h-screen pt-[50px]">
			<div className="max-w-[426px] w-full mx-5">
				<img src="/images/logo.svg" alt="Logo" className="mb-[80px] mx-auto" />

				<div className="bg-[#ffffff] rounded-lg p-[2rem]">
					<form onSubmit={handleSubmit}>
						<h1 className="text-[1.5rem] text-[#000000] font-medium mb-[32px]">Log in to your account</h1>
						<p className="mb-[36px] font-bold">
							Don't have an account? <span className="text-[#5444F2]">Get Started</span>
						</p>
						<div className="flex flex-col mb-[2rem]">
							<label htmlFor="email" className="mb-[12px] text-[#65717C] text-sm font-medium">
								Email
							</label>
							<input
								type="email"
								placeholder="E.g: victor.onazi@getbani.co"
								className="border-[0.5px] border-[#E1E1E1] rounded-lg py-[13px] px-[16px] placeholder:text-[#C1C1C1] focus:border-[#5444F2] outline-none"
							/>
						</div>

						<div className="flex flex-col">
							<div className="flex justify-between items-center mb-[12px]">
								<label htmlFor="email" className="text-[rgb(101,113,124)] text-sm font-medium">
									Password
								</label>

								<Link to="#" className="text-[#5444F2] text-sm">
									Forgot password?
								</Link>
							</div>

							<div className="relative w-full mb-[2rem]">
								<input
									type="password"
									placeholder="Password"
									className="border-[0.5px] border-[#E1E1E1] rounded-lg py-[13px] px-[16px] placeholder:text-[#C1C1C1] w-full focus:border-[#5444F2] outline-none"
								/>
								<img src="/images/eye.svg" alt="visibility icon" className="absolute right-[12px] top-[15px]" />
							</div>
						</div>

						<button
							type="submit"
							className="md:px-[40px] py-[13px] outline-none normal-case border-[#5444F2] w-full rounded-lg text-[#ffffff] text-sm bg-[#5444F2] font-bold"
						>
							Log in
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
