import React from "react";

const Pictures = () => {
	return (
		<section className=" bg-[#1e2f23] pb-[17.5vh] pt-[13vh] relative">
			<div className="flex items-center justify-center gap-[2vh] h-[40vh] min-w-fit group relative">
				<img
					src="/workshop1.png"
					className="w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-8 group-hover:rotate-0"
					alt="picture of a workshop"
				/>
				<img
					src="/workshop2.png"
					className="w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-[-5deg] group-hover:rotate-0"
					alt="picture of a workshop"
				/>
				<img
					src="/workshop3.png"
					className="w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-12 group-hover:rotate-0"
					alt="picture of a workshop"
				/>
				<img
					src="/workshop4.png"
					className="w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-[-5deg] group-hover:rotate-0"
					alt="picture of a workshop"
				/>
			</div>
			<h3 className="wim text-[10vh] text-white leading-[10vh] ml-auto absolute bottom-0 left-[5vw]">
				Workshop Pictures
			</h3>
		</section>
	);
};

export default Pictures;
