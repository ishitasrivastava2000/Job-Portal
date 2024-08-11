import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
import Subscribe from "../LandingPage/Subscribe";
import Testimonials from "../LandingPage/Testimonials";
import Working from "../LandingPage/Working";
import Footer from "../Footer/Footer"

const HomePage = () => {
    return (
        <div className="min-h-[100vh] bg-cyan-950 font-['poppins']">
            <DreamJob/>
            <Companies/>
            <JobCategory/>
            <Working/>
            <Testimonials/>
            <Subscribe/>
        </div>
    )
}
export default HomePage;