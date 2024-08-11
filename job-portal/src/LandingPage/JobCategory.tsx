import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

const jobCategory = [
    {
        "name": "Digital Marketing",
        "desc": "",
        "jobs": "1K"
    },
    {
        "name": "",
        "desc": "",
        "jobs": ""
    },
    {
        "name": "",
        "desc": "",
        "jobs": ""
    }
];

const JobCategory = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold mb-3 text-cyan-100">Browse <span className="text-tulip-tree-400">Job</span> Categories</div>
        <div className="text-lg mb-10 mx-auto text-cyan-300 text-center w-1/2">Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>
        <Carousel slideSize="22%" slideGap="md" loop className="focus-visible:[&_button]:!outline-none
        [&_button]:!bg-tulip-tree-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
        nextControlIcon={<IconArrowRight className="h-8 w-8"/>}
        previousControlIcon={<IconArrowLeft className="h-8 w-8"/>}
        >
        {
            jobCategory.map((category, index) => <Carousel.Slide>
                <div className=" flex flex-col items-center w-64 gap-2 border border-tulip-tree-300 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-tulip-tree-300">
                <div className="p-2 bg-tulip-tree-300 rounded-full">
                        <img className="h-8 w-8" src={`../Categories/${category.name}.png`} alt={category.name}/>
                    </div>
                    <div className="text-cyan-100 text-xl font-semibold">{category.name}</div>
                    <div className="text-sm text-center text-cyan-300">{category.desc}</div>
                    <div className="text-tulip-tree-300 text-lg">{category.jobs}+ new jobs posted</div>
                </div>
            </Carousel.Slide>)
        }
        </Carousel>
    </div>
}
export default JobCategory;