import React from "react";
import Button from "./Button";

const Landing = () => {
	return (
		<>
			{/* landing */}
			<section className="h-[110vh] relative">
				{/* main section */}
				<div className="flex flex-col items-center justify-center w-fit pt-[15vh] ml-[6vw] bg-red-400/0">
					<h1 className="wim text-[25vh] leading-[22.5vh] text-white">
						Blinker
					</h1>
					{/* buttons */}
					<div className="flex flex-col items-end justify-center w-full gap-[1vh]">
						<Button text="Run a Blinky workshop for your Club" />
						<Button text="Join a blinky workshop" />
					</div>
				</div>
				{/* background image */}
				<img
					src="/image3.png"
					className="w-full h-[130vh] object-cover absolute top-[-20vh] z-[-1]"
					alt=""
				/>
			</section>
			{/* how it works */}
			<section className="min-h-[80vh] bg-[#1e2f23] mt-[-2vh] w-full relative pt-[5vh]">
				<h2 className="wim text-[20vh] text-white w-fit leading-[20vh] mx-auto ml-[5vw] relative">
					How it works?
				</h2>
			</section>
		</>
	);
};

export default Landing;
