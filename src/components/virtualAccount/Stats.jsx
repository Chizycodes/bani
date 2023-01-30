export const Stats = () => {
	return (
		<div className="bg-[#ffffff] border-[0.5px] border-[#E1E1E1] rounded-lg py-[34px] px-[30px] flex items-center gap-3 justify-between w-full overflow-x-auto">
			<div className="min-w-fit">
				<p className="text-[#65717C] text-sm">Total Credits</p>
				<p className="text-[#000000] text-base md:text-[20px] xl:text-[24px] font-bold">NGN 3,287,902.00</p>
			</div>
			<div className="min-w-fit">
				<p className="text-[#65717C] text-sm">Total Transfer Settlememts</p>
				<p className="text-[#000000] text-base md:text-[20px] xl:text-[24px] font-bold">81 Settlement</p>
			</div>
			<div className="min-w-fit">
				<p className="text-[#65717C] text-sm">Generated Accounts</p>
				<p className="text-[#000000] text-base md:text-[20px] xl:text-[24px] font-bold">12 Accounts</p>
			</div>
		</div>
	);
};
