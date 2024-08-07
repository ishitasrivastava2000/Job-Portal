import Marquee from "react-fast-marquee";

const companies = ["Google", "Amazon", "Figma", "Netflix", "Meta", "Microsoft", "Pinterest", 
    "Slack", "Spotify", "Visa", "Walmart"
];

const Companies = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold mb-10 text-cyan-100">Trusted By <span className="text-tulip-tree-400">1000+</span> 
        Companies</div>
        <Marquee pauseOnHover={true}>
            {
                companies.map((company, index) => 
                    <div key={index} className="mx-8 px-2 py-1 hover:bg-cyan-900 rounded-xl cursor-pointer">
                    <img className="h-14" src={`/Companies/${company}.png`} alt={company}/>
                    </div>
                )
            }
        </Marquee>
    </div>
}
export default Companies;