import React from "react";

const Button = ({ text }: { text: string }) => (
	<button className="relative bg-green-500/0 pr-[0.6vw] pb-[1.1vh] group">
		{/* shadow */}
		<span className="absolute inset-0 bg-black z-0 w-[98%] h-[92%] mt-auto ml-auto"></span>

		{/* button face */}
		<span className="relative bg-white text-[4vh] wim px-[1.5vw] py-[0.25vh] z-10 inline-block group-hover:translate-x-[0.3vw] group-hover:translate-y-[0.5vh] transition-all ease-in-out">
			{text}
		</span>
	</button>
);

const page = () => {
	return (
		<div className="min-h-screen w-full">
			{/* landing */}
			<section className="h-[110vh] relative">
				{/* main section */}
				<div className="flex flex-col items-center justify-center w-fit bg-red-400/0">
					<h1 className="wim text-[25vh] leading-[25vh] text-white">Blinker</h1>
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
		</div>
	);
};

export default page;
