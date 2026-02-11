import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Pictures from "./components/Pictures";

const page = () => {
	return (
		<div className="min-h-screen w-full">
			<Navbar />
			<Landing />
			<Pictures />
		</div>
	);
};

export default page;
