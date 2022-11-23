import React, { useState } from 'react';
import Dashboardlayout from '../../components/DashboardLayout';
import { Button } from '../../components/Button';
import { Stats } from '../../components/virtualAccount/Stats';
import Table from '../../components/virtualAccount/Table';
import { ActivityFeed } from '../../components/virtualAccount/ActivityFeed';

export const VirtualAccount = () => {
  const [feed, setFeed] = useState("");
	return (
		<div>
			<Dashboardlayout>
				<div className='h-[calc(100vh-3rem)]'>
					<div className="flex items-center justify-between mb-[27px]">
						<h1 className="twxt-[#000000] text-[20px]">Virtual Account Dashboard</h1>
						<div className="flex items-center gap-3">
							<div>
								<Button
									type=""
									text="Create New Branch"
									bgColor="#ffffff"
									bdColor="#E1E1E1"
									icon="/images/format-square.svg"
								/>
							</div>
							<div>
								<Button
									type=""
									text="Create Virtual Account"
									bgColor="#5444F2"
									bdColor="#5444F2"
									textColor="#ffffff"
									icon="/images/add.svg"
								/>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-12 gap-5 w-full">
						<section className="col-span-8">
							<div className="mb-4">
								<Stats />
							</div>
							<div>
								<Table setFeed={setFeed} />
							</div>
						</section>
						<section className="col-span-4">
							<ActivityFeed />
						</section>
					</div>
				</div>
			</Dashboardlayout>
		</div>
	);
};
