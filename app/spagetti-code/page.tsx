import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<img src="/bg.png" className="w-full absolute top-[-20vh]" alt="" />
			<div className="h-[50vh] bg-[#1e2f23]"></div>
			<div className="flex flex-col items-center justify-center absolute top-[15vh] left-[5vw] bg-red-300/0">
				<h1 className="wim text-[25vh] text-white leading-[25vh] mx-auto">
					Tinker
				</h1>
				<div className="flex flex-col gap-[2vh] items-end justify-center bg-violet-300/0 w-[32.5vw]">
					<div className="flex relative group min-h-[5vh]">
						<div className="bg-black px-[2vw] py-[0.75vh] wim text-[4vh] leading-[4vh] absolute z-0 top-[0.95vh] right-0">
							Run a Blinky workshop for your Club
						</div>
						<button
							className="bg-white px-[2vw] py-[0.75vh] wim text-[4vh] leading-[4vh] z-10 mr-[0.5vw] group-hover:translate-y-[0.5vh] group-hover:mr-[0.25vw]
 cursor-pointer transition-all ease-in-out "
						>
							Run a Blinky workshop for your Club
						</button>
					</div>
					<div className="flex relative group min-h-[5vh]">
						<div className="bg-black px-[2vw] py-[0.75vh] wim text-[4vh] leading-[4vh] absolute z-0 top-[0.95vh] right-0">
							Join a Blinky workshop
						</div>
						<button className="bg-white px-[2vw] py-[0.75vh] wim text-[4vh] leading-[4vh] z-10 mr-[0.5vw] group-hover:mt-[0.5vh] group-hover:mr-[0.25vw] cursor-pointer transition-all ease-in-out ">
							Join a Blinky workshop
						</button>
					</div>
				</div>
			</div>

			{/* Navbar */}
			{/* Navbar */}
			<div className="fixed top-0 left-0 z-[9999] w-full pointer-events-auto">
				<div className="bg-[#000000] h-[7.5vh] w-[30vw] absolute top-[1.5vh] left-[28.5vw]"></div>

				<div className="bg-[#1c2d4d] h-[7.5vh] w-[30vw] absolute top-[0.75vh] left-[28vw] flex items-center justify-start">
					<img src="/hack-club.png" className="w-[6.5vw]" alt="" />
					<a href="/" className="text-white text-[3vh] pl-[1vw] wim">
						Some Link
					</a>
					<a href="/" className="text-white text-[3vh] pl-[2vw] wim">
						Some Link
					</a>
					<a href="/" className="text-white text-[3vh] pl-[2vw] wim">
						Some Link
					</a>
				</div>

				<div className="absolute top-[0.75vh] left-[59.5vw]">
					<div className="flex relative group min-h-[6vh] w-[11.25vw] items-center justify-center">
						<div className="bg-black px-[2vw] py-[0.75vh] wim text-[4vh] absolute z-0 top-[0.75vh] right-0 h-[7.5vh]">
							A BUTTON
						</div>
						<button className="bg-white px-[2vw] py-[0.75vh] wim text-[4vh] z-10 mr-[0.5vw] group-hover:translate-x-[0.25vh] group-hover:translate-y-[0.5vh] group-hover:mr-[0.25vw] h-[7.5vh] transition-all cursor-pointer">
							A BUTTON
						</button>
					</div>
				</div>
			</div>

			<div className="absolute top-[15vh] rotate-10 right-[40vw] z-1">
				<img
					src="/example.png"
					className="w-[20vw] drop-shadow-2xl drop-shadow-black/30"
					alt=""
				/>
			</div>

			{/*  */}
			<div className="min-h-[80vh] bg-[#1e2f23] mt-[57.5vh] w-full relative pt-[5vh]">
				<h1 className="wim text-[20vh] text-white w-fit leading-[20vh] mx-auto ml-[5vw] relative">
					How it works?
				</h1>
				<div className="flex flex-col items-end justify-between mr-[12.5vw] h-[60vh] relative">
					<div className="flex flex-col h-[60vh] w-[5vw] bg-red-300/0 absolute top-0 right-[-7.5vw] items-center justify-between py-[5vh]">
						<div className="h-full w-[0.5vw] bg-white absolute top-0 left-[50%] translate-x-[-50%] z-0"></div>
						<div className="w-[2.5vw] h-[2.5vw] bg-white border-[0.45vh] border-black z-10"></div>
						<div className="w-[2.5vw] h-[2.5vw] bg-white border-[0.45vh] border-black z-10"></div>
						<div className="w-[2.5vw] h-[2.5vw] bg-white border-[0.45vh] border-black z-10"></div>
					</div>
					<h1 className="wim text-[12.5vh] text-white leading-[15vh] ml-auto">
						Apply
					</h1>
					<h1 className="wim text-[12.5vh] text-white leading-[15vh] ml-auto">
						Run a workshop
					</h1>
					<h1 className="wim text-[12.5vh] text-white leading-[15vh] ml-auto">
						get free Blinky kits and PCB's
					</h1>
				</div>

				{/* 	<h1 className="wim text-[20vh] text-white leading-[25vh] mx-auto ml-[5vw]">
					Workshops
				</h1> */}
				<div className="flex items-center justify-center gap-[2vh] h-[40vh] bg-red-500/0 min-w-fit group mb-[15vh] mt-[15vh] relative">
					<img
						src="/workshop1.png"
						className="w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-8 group-hover:rotate-0"
						alt="idk"
					/>
					<img
						src="/workshop2.png"
						className="w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-[-5deg] group-hover:rotate-0"
						alt="idk"
					/>
					<img
						src="/workshop3.png"
						className="w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-12 group-hover:rotate-0"
						alt="idk"
					/>
					<img
						src="/workshop4.png"
						className="w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-[-5deg] group-hover:rotate-0"
						alt="idk"
					/>
					<h1 className="wim text-[10vh] text-white leading-[10vh] ml-auto absolute bottom-[-17vh] left-[5vw]">
						Workshop Pictures
					</h1>
				</div>
				<div className="min-h-[80vh] bg-[#20633B]">
					<img src="another2.png" alt="" className="w-[105vw] left-[-5vw]" />
					<h1 className="wim text-[20vh] text-white w-fit leading-[20vh] mx-auto ml-[5vw] relative">
						Blinky Kit Contains
					</h1>
					<div className="grid grid-cols-3 w-[90vw] mx-auto gap-[2vw] mt-[2vh] pb-[5vh]">
						{[
							"10x Blue LED's",
							"10x Green LED's",
							"10x White LED's",
							"10x Orange LED's",
							"10x Yellow LED's",
							"2x 1uF Capacitors",
							"2x 10nF Capacitors",
							"2x 1x1 pin headers",
							"2x 1x2 pin headers",
							"2x 470 ohm resistors",
							"2x 1k ohm resistors",
							"2x 50k variable resistors",
							"2x 555 Timer IC's",
							"2x CD4017 LED Controller IC's",
							"1x 9V Battery Buckle",
						].map((item, i) => (
							<div
								key={i}
								className="w-full bg-white text-[4vh] wim py-[1vh] px-[2vw] relative border-[0.45vh] border-black/0 font-semibold tracking-[0.15vh]"
							>
								<div className="absolute w-[1vh] h-[1vh] bg-[#20633B] top-[-0.5vh] left-[-0.5vh] border-b-[0.45vh] border-r-[0.45vh] border-black/0"></div>
								<div className="absolute w-[1vh] h-[1vh] bg-[#20633B] top-[-0.5vh] right-[-0.5vh] border-b-[0.45vh] border-l-[0.45vh] border-black/0"></div>
								<div className="absolute w-[1vh] h-[1vh] bg-[#20633B] bottom-[-0.5vh] left-[-0.5vh] border-t-[0.45vh] border-r-[0.45vh] border-black/0"></div>
								<div className="absolute w-[1vh] h-[1vh] bg-[#20633B] bottom-[-0.5vh] right-[-0.5vh] border-t-[0.45vh] border-l-[0.45vh] border-black/0"></div>
								{item}
							</div>
						))}
					</div>
					<img src="/another4.png" className="w-full" alt="" />
					<img src="/footer2.png" className="w-full" alt="" />
					<div className="absolute bottom-[0.35vh] tracking-[0.1vh] left-[50%] translate-x-[-50%] wim text-white text-[3.5vh]">
						Made with love by Hack Clubbers
					</div>
				</div>
			</div>
		</div>
	);
}
