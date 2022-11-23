import React from 'react';
import { transactions } from '../../data';

export const ActivityFeed = ({ feed }) => {
	return (
		<div className="bg-[#ffffff] rounded-lg py-[23px]">
			<div className="px-4 flex items-center justify-between mb-[23px]">
				<h3 className="text-[#000000] text-base capitalize font-bold">
					Activity Feed - <span className="text-[#65717C]">GT Bank </span>
				</h3>

				<p className="flex items-center">
					<span className="text-[#02BA81] text-sm mr-2">Active</span>
					<span className="text-sm text-[#65717C]">Created 16days ago</span>
				</p>
			</div>

			<div className="w-full h-[45px] bg-[#FFEDE3] relative mb-[45px]">
				<div className="w-[52px] h-[52px] absolute left-4 top-[26px]">
					<img src="/images/gt.svg" alt="company logo" className="w-full h-full" />
				</div>
			</div>

			<div className="px-4 flex items-center justify-between mb-4">
				<p className="text-base capitalize font-bold flex flex-col">
					<span className="text-[#000000]">Guaranty Trust Bank</span>
					<span className="text-[#65717C]">209630**83</span>
				</p>
				<button className="border border-[#E1E1E1] py-3 px-4 outline-none rounded-lg flex items-center justify-center text-[#000000] font-semibold">
					<p>Go to Account View </p>
					<img src="/images/blue-arrow.svg" alt="arrow right" />
				</button>
			</div>

			<div className="flex items-center p-4 justify-between border-y border-[#E1E1E1]">
				<div>
					<p className="text-[#65717C] text-sm">Total Inflow</p>
					<p className="text-[#000000] text-base font-medium">₦77,823.00</p>
				</div>
				<div>
					<p className="text-[#65717C] text-sm">Last Activity Date</p>
					<p className="text-[#000000] text-base font-medium">3th Sept. 2022</p>
				</div>
				<div>
					<p className="text-[#65717C] text-sm">Linked Branch</p>
					{/* <div
						className={`rounded-[4px] py-[6.3px] px-[7.3px] text-xs flex items-center gap-2 ${
							item.branch === 'Ikeja'
								? 'bg-[#EBF5FF] text-[#1A72F7]'
								: item.branch === 'Lekki II'
								? 'bg-[#FFF6EB] text-[#EA8A15]'
								: 'bg-[#F2EBFF] text-[#B01AF7]'
						}`}
					>
						<img
							src={
								item.branch === 'Ikeja'
									? '/images/blue-square.svg'
									: item.branch === 'Lekki II'
									? '/images/yellow-square.svg'
									: '/images/purple-square.svg'
							}
							alt=""
						/>
						{`Dodo - ${item?.branch}`}
					</div> */}
				</div>
			</div>

			<div className="bg-white pt-4 pb-5 px-4 overflow-x-auto">
				<table className="w-full">
					<thead>
						<tr className="h-[40px] w-full text-sm leading-none text-[#65717C]">
							<th className="font-normal text-left ">Transaction Details</th>
							<th className="font-normal text-left pl-4 ">Amount</th>
							<th className="font-normal text-left pl-4 ">Date</th>
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
										<p className="text-sm leading-none text-gray-800">{item?.amount}</p>
									</td>
									<td className="pl-4">
										<p className="">{item?.date}</p>
									</td>

									<td className="px-7 2xl:px-0 relative">
										<button className="focus:outline-none pl-7">
											<img src="/images/black-arrow.svg" alt="more" />
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
