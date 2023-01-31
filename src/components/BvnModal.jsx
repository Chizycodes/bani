import React, { useState, useRef } from 'react';

const BvnModal = ({ createAccountNumber, loading, sendEmail }) => {
	const closeModal = useRef();
	const [bvn, setBvn] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		// sendEmail();
		if (bvn.length === 11) {
			createAccountNumber(bvn);
			// closeModal.current.click(); 
		}
	};
	return (
		<>
			<input type="checkbox" id="bvn-modal" className="modal-toggle" />
			<label htmlFor="connect-wallet" className="modal  cursor-pointer">
				<label className="modal-box relative bg-[#ffffff] p-0">
					<div className="border-b border-[#CFD8DC] px-[32px] py-[20px] flex items-center justify-between">
						<h4 className="font-bold text-[24px] text-[#333333]">BVN</h4>
						<label htmlFor="bvn-modal" className="btn btn-sm invisible" ref={closeModal}></label>
					</div>

					<div className="p-[32px] text-[#333333]">
						<h5>Enter your BVN to proceed</h5>

						<div className="mt-4">
							<form onSubmit={handleSubmit}>
								<div className="mb-[2rem]">
									<input
										type="number"
										value={bvn}
										maxLength={11}
										required
										onChange={(e) => setBvn(e.target.value)}
										placeholder="Enter your BVN"
										className="border-[0.5px] border-[#E1E1E1] rounded-lg py-[13px] px-[16px] placeholder:text-[#C1C1C1] focus:border-[#5444F2] outline-none w-full"
									/>
								</div>

								<button
									type="submit"
									className="md:px-[40px] py-[13px] outline-none normal-case border-[#5444F2] w-full rounded-lg text-[#ffffff] text-sm bg-[#5444F2] font-bold"
									disabled={loading}
								>
									{loading ? 'Loading...' : 'Submit'}
								</button>
							</form>
						</div>
					</div>
				</label>
			</label>
		</>
	);
};

export default BvnModal;
