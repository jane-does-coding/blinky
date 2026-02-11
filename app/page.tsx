import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

const page = () => {
	return (
		<div className="min-h-screen w-full">
			<Navbar />
			<Landing />
		</div>
	);
};

export default page;
