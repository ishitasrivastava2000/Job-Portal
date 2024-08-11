import { Avatar } from "@mantine/core";

const work = [
    
    {
        "name": "Build Your Resume",
        "desc": "Create a standout resume with your skills."
    },
    {
        "name": "Apply for Job",
        "desc": "Find and apply for jobs that match your skills."
    },
    {
        "name": "Get Hired",
        "desc": "Connect with employers and start your new job."
    }
];

const Working=()=>{
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold mb-3 text-cyan-100">How it  <span className="text-tulip-tree-400"> Works</span></div>
        <div className="text-lg mb-10 mx-auto text-cyan-300 text-center w-1/2">Effortlessly navigate through the process and land your dream job.</div>
        <div className="flex px-16 items-center">
            <div className="relative mr-20">
                <img className="w-[30rem]" src="/Working/Girl-working.png" alt="Girl searching for job on her laptop."/>
                <div className="w-36 flex top-[15%] right-0 absolute flex-col items-center gap-1 border border-tulip-tree-400 rounded-xl py-3 px-1 backdrop-blur-md">
                    <Avatar className="!h-16 !w-16" src="avatar.png" alt="It's me"/>
                    <div className="text-sm font-semibold text-cyan-200 text-center">Complete your Profile</div>
                    <div className="text-xs text-cyan-300">70% Completed</div>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                {
                    work.map((item, index) => 
                        <div key={index} className="flex items-center gap-4">
                            <div className="p-2.5 bg-tulip-tree-300 rounded-full">
                                <img  className="h-12 w-12" src={`/Working/${item.name}.png`} alt={item.name}/>
                            </div>
                            <div>
                                <div className="text-cyan-200 text-xl font-semibold">{item.name}</div>
                                <div className="text-cyan-300">{item.desc}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
}
export default Working;