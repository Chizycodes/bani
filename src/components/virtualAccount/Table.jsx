import React, { useState } from 'react';
import { tableData } from '../../data';

const Table = ({ setFeed }) => {
	const [show, setShow] = useState(null);
	const [copied, setCopied] = useState([null, false]);

	//Function to copy account number to clipboard
	const copyTextToClipboard = async (text) => {
		return await navigator.clipboard.writeText(text);
	};

	const handleCopy = (number, i) => {
		copyTextToClipboard(number, i)
			.then(() => {
				// If successful, update the copied state value
				setCopied([i, true]);
				setTimeout(() => {
					setCopied([null, false]);
				}, 1500);
			})
			.catch((err) => {
				// console.log(err);
			});
	};

	return (
		<div className="py-[36px] bg-[#ffffff] rounded-lg min-h-full">
			<div className="px-[16px] flex items-center justify-between mb-[10px]">
				<h2 className="text-[#000000] font-semibold text-base">Your Virtual Accounts</h2>
				<div className="flex items-center gap-3">
					<div className="h-[36px] w-[36px] rounded-lg border border-primary flex items-center justify-center cursor-pointer">
						<img src="/images/element-3.svg" alt="" />
					</div>
					<div className="h-[36px] w-[36px] rounded-lg border border-[#E1E1E1] flex items-center justify-center cursor-pointer">
						<img src="/images/row-vertical.svg" alt="" />
					</div>
				</div>
			</div>

			<div className="border-y border-[#E1E1E1] w-full px-4 lg:px-[30px] py-[12px] flex justify-between items-center gap-5 mb-[50px]">
				<div className="bg-[#F4F3FF] rounded-[100px] py-[8px] px-[11px] text-primary">Branch</div>
				<div className="flex justify-start items-center relative">
					<input
						className="text-sm leading-none text-left pl-4 pr-8 py-3 w-[200px] border rounded-lg border-[#E1E1E1] outline-none lg:w-[474px]"
						type="text"
						placeholder="Search for virtual account"
					/>
					<img src="/images/search.svg" alt="search" className="absolute right-3 z-10 cursor-pointer" />
				</div>
			</div>

			<div className="px-[16px] flex items-center justify-between mb-[10px]">
				<h2 className="text-[#000000] font-semibold text-base">Lekki II</h2>
				<div className="flex items-center gap-3">
					<p className="text-primary">Manage</p>
					<img src="/images/setting.svg" alt="" />
				</div>
			</div>

			<div className="bg-white pt-4 pb-5 w-full overflow-x-auto">
				<table className="w-full ">
					<thead>
						<tr className="h-[40px] w-full text-base leading-none text-[#65717C]">
							<th className="font-normal text-left pl-4 min-w-[220px]">Bank name</th>
							<th className="font-normal text-left pl-4 min-w-[300px]">Account number</th>
							<th className="font-normal text-left pl-4 min-w-[150px]">Total inflow</th>
							<th className="font-normal text-left pl-4 min-w-[100px]"></th>
						</tr>
					</thead>
					<tbody className="w-full">
						{tableData.map((item, i) => {
							return (
								<tr
									key={i}
									className="h-20 text-sm leading-none text-gray-800 bg-white border-l-2 border-l-[#ffffff] hover:bg-[#F5F6FAB2] hover:border-l-2 hover:border-l-[#5444F2] border-t border-t-[#E1E1E1CC] cursor-pointer"
									onClick={() => setFeed(item)}
								>
									<td className="pl-4">
										<div className="flex items-center">
											<div className="w-10 h-10">
												<img className="w-full h-full" src={item?.logo} alt="company logo" />
											</div>
											<div className="pl-4">
												<p className="font-medium">{item?.bankName}</p>
											</div>
										</div>
									</td>
									<td className="pl-4">
										<div className="flex items-center gap-3">
											<p className="text-sm font-medium leading-none text-gray-800">{item?.accNumber}</p>
											{copied[1] && copied[0] === i ? (
												<p className="text-primary text-sm">Copied</p>
											) : (
												<img src="/images/copy.svg" alt="copy" onClick={() => handleCopy(item?.accNumber, i)} />
											)}

											<div
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
											</div>
										</div>
									</td>
									<td className="pl-4">
										<p className="font-medium">NGN {item?.inflow.toLocaleString()}</p>
									</td>

									<td className="pl-4 relative">
										<button
											onClick={() => (show === i ? setShow(null) : setShow(i))}
											className="focus:outline-none pl-7"
										>
											<img src="/images/more.svg" alt="more" />
										</button>

										{show === i && (
											<div className="dropdown-content bg-[#ffffff] shadow w-24 absolute z-30 right-0 mr-6 ">
												<div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
													<p>Edit</p>
												</div>
												<div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
													<p>Delete</p>
												</div>
											</div>
										)}
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

export default Table;
