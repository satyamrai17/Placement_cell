import BgImage from "../../assets/BgImage.jpg";

export const Overview = () =>{
    return(<>
        <div className="bg-[#EFF8F6] w-auto">
            <div className="text-center text-lg md:text-4xl py-8 font-semibold">
                <h1>Welcome to <span className="text-[#FF0000]">Career Cruise</span></h1>
            </div>
            <div className="m-auto items-center px-12 pb-8 md:flex">
                <div className=" pb-4 md:w-1/2">
                    <img src={BgImage} alt="image" className="m-auto h-full w-full rounded-lg shadow"/>
                </div>
                <div className="text-justify m-4 text-base lg:text-xl font-bold md:w-1/2">
                    <p>
                    Career Cruise is a pioneering software project designed to facilitate job opportunities for fresh graduates in the competitive landscape of campus drive placements. Tailored specifically for fresher students, this innovative platform serves as a bridge connecting aspiring graduates with multiple companies seeking to recruit emerging talents. The primary focus of Career Cruise is to streamline the often complex and overwhelming process of job hunting for entry-level positions. Through a user-friendly interface, the software centralizes job listings from various companies, offering a comprehensive and accessible resource for freshers to explore and apply to a multitude of opportunities.
                    </p>
                </div>
            </div>
        </div>
    </>)
}