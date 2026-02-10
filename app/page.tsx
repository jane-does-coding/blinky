import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<img src="/bg3.jpg" className="w-full absolute top-[-25vh]" alt="" />
			<div className="h-[50vh] bg-[#1e2f23]"></div>
			<div className="flex flex-col items-center justify-center absolute top-[15vh] left-[5vw] bg-red-300/0">
				<h1 className="wim text-[25vh] text-white leading-[25vh] mx-auto">
					Blinker
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
			<div className="bg-[#000000] h-[7.5vh] w-[30vw] fixed top-[1.5vh] left-[28.5vw] wim text-[4vh] leading-[4vh]"></div>
			<div className="bg-[#1c2d4d] h-[7.5vh] w-[30vw] fixed top-[0.75vh] left-[28vw] wim text-[4vh] leading-[4vh] flex items-center justify-start">
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
			<div className="fixed top-[0.75vh] left-[59.5vw]">
				{/* when changing the text, change the width around to align */}
				<div className="flex relative group min-h-[6vh] w-[11.25vw] items-center justify-center">
					<div className="bg-black px-[2vw] py-[0.75vh] wim text-[4vh] leading-[4vh] absolute z-0 top-[0.75vh] right-0 h-[7.5vh]">
						A BUTTON
					</div>
					<button className="bg-white px-[2vw] py-[0.75vh] wim text-[4vh] leading-[4vh] z-10 mr-[0.5vw] group-hover:translate-x-[0.25vh] group-hover:translate-y-[0.5vh] group-hover:mr-[0.25vw] h-[7.5vh] cursor-pointer transition-all ease-in-out ">
						A BUTTON
					</button>
				</div>
			</div>

			<div className="absolute top-[15vh] rotate-10 right-[40vw]">
				<img
					src="/example.png"
					className="w-[20vw] drop-shadow-2xl drop-shadow-black/30"
					alt=""
				/>
			</div>

			{/*  */}
			<div className="h-[80vh] bg-[#193023] mt-[52.5vh] w-full"></div>
		</div>
	);
}
