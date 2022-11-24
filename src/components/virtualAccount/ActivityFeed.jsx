import React from 'react';
import { transactions } from '../../data';

export const ActivityFeed = ({ feed }) => {
	return (
		<div className="bg-[#ffffff] rounded-lg py-[23px]">
			<div className="px-4 flex items-start gap-3 justify-between mb-[23px]">
				<h3 className="text-[#000000] text-base capitalize font-bold">
					Activity Feed - <span className="text-[#65717C]">{feed?.bankName} </span>
				</h3>

				<p className="flex items-start">
					<span className="text-[#02BA81] text-sm mr-2">Active</span>
					<span className="text-xs text-[#65717C]">Created 16days ago</span>
				</p>
			</div>

			<div className="w-full h-[45px] bg-[#FFEDE3] relative mb-[45px]">
				<div className="w-[52px] h-[52px] absolute left-4 top-[26px]">
					<img src={feed?.logo} alt="company logo" className="w-full h-full" />
				</div>
			</div>

			<div className="px-4 flex justify-between flex-wrap mb-4">
				<p className="text-base capitalize font-bold flex flex-col">
					<span className="text-[#000000]">{feed?.bankName}</span>
					<span className="text-[#65717C]">{feed?.accNumber}</span>
				</p>
				<button className="border border-[#E1E1E1] py-3 px-4 outline-none rounded-lg flex items-center justify-center text-[#000000] font-semibold text-sm">
					<p>Go to Account View </p>
					<img src="/images/blue-arrow.svg" alt="arrow right" />
				</button>
			</div>

			<div className="flex items-center p-4 justify-between gap-3 flex-wrap border-y border-[#E1E1E1]">
				<div>
					<p className="text-[#65717C] text-sm">Total Inflow</p>
					<p className="text-[#000000] text-base font-medium">₦ {feed?.inflow.toLocaleString()}</p>
				</div>
				<div>
					<p className="text-[#65717C] text-sm">Last Activity Date</p>
					<p className="text-[#000000] text-base font-medium">3th Sept. 2022</p>
				</div>
				<div>
					<p className="text-[#65717C] text-sm">Linked Branch</p>
					<div
						className={`rounded-[4px] py-[6.3px] px-[7.3px] text-xs flex items-center gap-2 ${
							feed?.branch === 'Ikeja'
								? 'bg-[#EBF5FF] text-[#1A72F7]'
								: feed?.branch === 'Lekki II'
								? 'bg-[#FFF6EB] text-[#EA8A15]'
								: 'bg-[#F2EBFF] text-[#B01AF7]'
						}`}
					>
						<img
							src={
								feed?.branch === 'Ikeja'
									? '/images/blue-square.svg'
									: feed?.branch === 'Lekki II'
									? '/images/yellow-square.svg'
									: '/images/purple-square.svg'
							}
							alt=""
						/>
						{`Dodo - ${feed?.branch}`}
					</div>
				</div>
			</div>

			<div className="bg-white pt-4 pb-5 px-4 w-full overflow-x-auto">
				<table className="w-full">
					<thead>
						<tr className="h-[40px] w-full text-sm leading-none text-[#65717C]">
							<th className="font-normal text-left min-w-[100px]">Transaction Details</th>
							<th className="font-normal text-left pl-4 min-w-[100px]">Amount</th>
							<th className="font-normal text-left pl-4 min-w-[150px]">Date</th>
						</tr>
					</thead>
					<tbody className="w-full">
						{transactions.map((item, i) => {
							return (
								<tr
									key={i}
									className="h-12 text-sm font-medium leading-none text-gray-800 bg-white hover:bg-[#F5F6FAB2] border-t border-t-[#E1E1E1CC] cursor-pointer"
								>
									<td className="">
										<div className="flex items-center">
											<div className="">
												<p className="">{item?.transDet}</p>
											</div>
										</div>
									</td>
									<td className="pl-4">
										<p className="text-sm leading-none text-gray-800">₦{item?.amount.toLocaleString()}</p>
									</td>
									<td className="pl-4">
										<p className="">{item?.date}</p>
									</td>

									<td className="">
										<button className="focus:outline-none pl-7">
											<img src="/images/black-arrow.svg" className="w-[20px]" alt="more" />
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
