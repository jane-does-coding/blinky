import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<img src="/bg3.jpg" className="w-full" alt="" />
			<div className="h-[50vh] bg-[#1e2f23]"></div>
			<h1 className="wim text-[25vh] fixed top-[7vh] left-[5vw] text-white">
				Blinker
			</h1>
			<button className="bg-black px-[2vw] py-[0.75vh] fixed top-[36.75vh] left-[5.5vw] wim text-[4vh] leading-[4vh]">
				Run a Blinky workshop for your Club
			</button>
			<button className="bg-amber-50 px-[2vw] py-[0.75vh] fixed top-[36vh] left-[5vw] wim text-[4vh] leading-[4vh]">
				Run a Blinky workshop for your Club
			</button>
			<button className="bg-black px-[2vw] py-[0.75vh] fixed top-[44.75vh] left-[15.5vw] wim text-[4vh] leading-[4vh]">
				Join a Blinky workshop
			</button>
			<button className="bg-amber-50 px-[2vw] py-[0.75vh] fixed top-[44vh] left-[15vw] wim text-[4vh] leading-[4vh]">
				Join a Blinky workshop
			</button>

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
			<button className="bg-black px-[2vw] h-[7.5vh] py-[0.75vh] fixed top-[1.5vh] left-[60.5vw] wim text-[4vh] leading-[4vh]">
				A button
			</button>
			<button className="bg-amber-50 px-[2vw] h-[7.5vh] py-[0.75vh] fixed top-[0.75vh] left-[60vw] wim text-[4vh] leading-[4vh]">
				A button
			</button>

			<div className="fixed top-[15vh] rotate-10 right-[40vw]">
				<img
					src="/example.png"
					className="w-[20vw] drop-shadow-2xl drop-shadow-black/30"
					alt=""
				/>
			</div>
		</div>
	);
}
