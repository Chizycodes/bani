import React, { useState } from 'react';
import { SideBar } from './SideBar';
import { TopNav } from './TopNav';

const Dashboardlayout = ({ children }) => {
	const [show, setShow] = useState(false);
	const [profile, setProfile] = useState(false);

	return (
		<>
			<div className="w-full h-full bg-[#F5F6FA]">
				<div className="flex flex-no-wrap h-full">
					<SideBar show={show} setShow={setShow} />
					<div className="w-full h-screen">
						<TopNav show={show} setShow={setShow} profile={profile} setProfile={setProfile} />
						<div className="container mx-auto py-[36px] px-6 ">
							<div className="w-full ">{children}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboardlayout;
