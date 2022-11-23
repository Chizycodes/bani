import React from 'react';

export const Button = ({ type, bgColor, bdColor, text, textColor, icon }) => {
	return (
		<button
			type={type}
			className={`md:px-[16px] py-[12px] outline-none normal-case border border-[${bdColor}] w-full rounded-lg text-[${textColor}] text-sm bg-[${bgColor}] flex items-center justify-center gap-3`}
		>
			<img src={icon} alt="icon" />
			<span>{text}</span>
		</button>
	);
};
