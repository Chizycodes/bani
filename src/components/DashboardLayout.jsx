import React, { useState } from 'react';
import { SideBar } from './SideBar';
import { TopNav } from './TopNav';

const Dashboardlayout = ({ children }) => {
	const [show, setShow] = useState(false);
	const [profile, setProfile] = useState(false);

	return (
		<>
			<div className="w-full h-full bg-[#F5F6FA]">
				<div className="flex flex-no-wrap">
					<SideBar show={show} setShow={setShow} />
					<div className="w-full">
						<TopNav show={show} setShow={setShow} profile={profile} setProfile={setProfile} />
						<div className="container mx-auto py-[36px] h-64 px-6">
							<div className="w-full h-full ">{children}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboardlayout;
