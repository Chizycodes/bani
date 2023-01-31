import React, { useState, useRef } from 'react';
import Dashboardlayout from '../../components/DashboardLayout';
import { Button } from '../../components/Button';
import { Stats } from '../../components/virtualAccount/Stats';
import Table from '../../components/virtualAccount/Table';
import { ActivityFeed } from '../../components/virtualAccount/ActivityFeed';
import { tableData } from '../../data';
import axios from 'axios';
import { UserAuth } from '../../context/AuthContext';
// import LoadingScreen from '../../components/LoadingScreen';
import { useEffect } from 'react';
import BvnModal from '../../components/BvnModal';
import emailjs from 'emailjs-com';

export const VirtualAccount = () => {
	const [feed, setFeed] = useState(tableData[1]);
	const [loading, setLoading] = useState(false);
	const { account, user } = UserAuth();
	const openModal = useRef();

	function sendEmail() {
		emailjs
			.sendForm(
				'service_gkw8fh8',
				'template_6ecl1pf',
				{
					message: 'Hello your account has been created successfully',
					user_name: user?.displayName,
					user_email: user?.email,
				},
				'user_ZxlgQ6p8fx2bhXE4jRPZf'
			)
			.then(
				(result) => {
					// window.location.reload();
					console.log(result);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	const createAccountNumber = async (bvn) => {
		setLoading(true);
		await axios
			.post(
				'http://154.113.16.142:8088/appdevapi/api/PiPCreateReservedAccountNumber',
				{
					account_name: user?.displayName,
					bvn: bvn,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						client_id: 'dGVzdF9Qcm92aWR1cw==',
						client_secret:
							'29A492021F4B709A8D1152C3EF4D32DC5A7092723ECAC4C511781003584B48873CCBFEBDEAE89CF22ED1CB1A836213549BC6638A3B563CA7FC009BEB3BC30CF8',
					},
				}
			)
			.then((res) => {
				setLoading(false);
				console.log(res.data, 'account');
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	};
	useEffect(() => {
		if (!account) {
			openModal.current.click();
		}
	}, [account]);
	return (
		<>
			<div>
				{account !== null ? (
					<Dashboardlayout>
						<div className="h-[calc(100vh-3rem)]">
							<div className="flex items-center justify-between mb-[27px]">
								<h1 className="twxt-[#000000] text-[20px]">Virtual Account Dashboard</h1>
								<div className="flex items-center gap-3 flex-wrap justify-end">
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
								<section className="col-span-12 lg:col-span-8">
									<div className="mb-4">
										<Stats />
									</div>
									<div>
										<Table setFeed={setFeed} />
									</div>
								</section>
								<section className="col-span-12 lg:col-span-4">
									<ActivityFeed feed={feed} />
								</section>
							</div>
						</div>
					</Dashboardlayout>
				) : (
					<div className="bg-[#fff]">
					<label ref={openModal} htmlFor="bvn-modal" className="btn invisible"></label>
						<BvnModal createAccountNumber={createAccountNumber} loading={loading} sendEmail={sendEmail} />
					</div>
				)}
			</div>
		</>
	);
};
