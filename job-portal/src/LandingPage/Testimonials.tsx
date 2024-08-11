import { Avatar, Rating } from "@mantine/core";
const testimonials = [
    {
        "name": "Shivam Patel",
        "testimonials": "This job portal made my job search easy and quick. Recommended to all young professionals!",
        "rating": 5
    },
    {
        "name": "Abhishek Kullu",
        "testimonials": "Found my dream job within a week! The application process was smooth.",
        "rating": 5
    },
    {
        "name": "Mridula Pandey",
        "testimonials": "I secured a job offer within a few days of applying.",
        "rating": 5
    },
];

const Testimonials = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold mb-3 text-cyan-100">What <span className="text-tulip-tree-400">Users </span> Say About Us</div>
        <div className="flex justify-evenly">
            {
                testimonials.map((data, index) => 
                    <div key={index} className="flex flex-col gap-3 w-[23%] border-tulip-tree-400 p-3 border rounded-xl mt-10">
                        <div className="flex gap-2 items-ceter">
                            <Avatar className="!h-14 !w-14" src="avatar.png" alt="It's a user"/>
                            <div>
                                <div className="text-lg text-cyan-100 font-semibold">{data.name}</div>
                                <Rating value={data.rating} fractions={2} readOnly/>
                            </div>
                        </div>
                        <div className="text-xs text-cyan-300">
                            {data.testimonials}
                        </div>
                    </div>
                )
            }
        </div>
    </div>
}
export default Testimonials;