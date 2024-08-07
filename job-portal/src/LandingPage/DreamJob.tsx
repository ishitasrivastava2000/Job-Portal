import { Avatar, AvatarGroup, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
    return (
        <div className="flex items-center px-16"
        style={{
            backgroundImage: "url('job-search-img.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "89.5vh", // Adjust height as needed
        }}>
            <div className="flex flex-col w-[45%] gap-3">
                <div className="text-6xl font-bold leading-tight text-cyan-100 [&>span]:text-tulip-tree-400">
                    Find your <span>dream job</span> with us
                </div>
                <div className="text-lg text-cyan-200">
                    A good life begins with a good company.
                </div>
                <div className="flex gap-3 mt-5">
                    <TextInput
                    className="bg-cyan-900 rounded-lg p-1 px-2 text-cyan-100 [&_input]:!text-cyan-100"
                    variant="unstyled"
                    label="Job Title"
                    placeholder="Software Engineer"/>
                    <TextInput
                    className="bg-cyan-900 rounded-lg p-1 px-2 text-cyan-100 [&_input]:!text-cyan-100"
                    variant="unstyled"
                    label="Job Type"
                    placeholder="Full-time"/>
                    <div className="flex items-center justify-center h-full w-20 bg-tulip-tree-400 text-cyan-100 rounded-lg p-2 hover:bg-tulip-tree-500 cursor-pointer">
                        <IconSearch stroke={2} className="h-[85%] w-[85%]"/>
                    </div>
                </div>
            </div>
            <div className="w-[55%] flex items-center justify-center">
                <div className="w-{30rem} relative">
                    <div className="absolute -right-10 w-fit top-[50%] border-tulip-tree-400 border rounded-lg p-2 backdrop-blur-md">
                        <div className="text-center mb-1 text-sm text-cyan-100">10K+ got job</div>
                        <AvatarGroup>
                            <Avatar src="img.png" />
                            <Avatar src="img.png" />
                            <Avatar src="img.png" />
                            <Avatar>+9K</Avatar>
                        </AvatarGroup>
                    </div>
                    <div className="absolute -left-10 w-fit top-[28%] border-tulip-tree-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col">
                        <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 p-1 bg-cyan-900 rounded-lg">
                                <img src="google.png"/>
                            </div>
                            <div className="text-sm text-cyan-100">
                                <div>Software Engineer</div>
                                <div className="text-cyan-200 text-xs">New York</div>
                            </div>
                        </div>
                        <div className="fle gap-2 justify-around text-cyan-200 text-xs">
                            <span>1 day ago</span>
                            <span>120 Applicants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DreamJob;