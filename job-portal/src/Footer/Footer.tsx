import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconCompass } from "@tabler/icons-react";

const footerLinks = [
    {title: "Product", links: ["Find Job", "Find Company", "Find Employee"]},
    {title: "Company", links: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"]},
    {title: "Product", links: ["Support", "Help & Support", "Feedback", "FAQs"]},
]

const Footer = () =>
{
    return <div className="pt-20  pb-5 flex gap-5 justify-around bg-cyan-950 font-['poppins']">
        <div className="w-1/4 flex flex-col gap-4">
            <div className="flex gap-1 items-center text-tulip-tree-400">
                <IconCompass className="h-6 w-6" stroke={2.3}/>
                <div className="text-xl font-semibold">JobCompass</div>
            </div>
            <div className="text-sm text-cyan-300">Job portal with user profiles, skill updates, certificationss, work experience and admin job postings.</div>
            <div className="flex gap-3 text-tulip-tree-400 [&>div]:bg-cyan-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-cyan-700">
                <div><IconBrandFacebook/></div>
                <div><IconBrandInstagram/></div>
                <div><IconBrandX/></div>
            </div>
        </div>
        {
            footerLinks.map((item, index)=> <div key={index}>
                <div className="text-lg font-semibold mb-4 text-tulip-tree-400">{item.title}</div>
                {
                    item.links.map((link, index)=> <div key={index} className="text-cyan-300 text-sm hover:text-tulip-tree-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out">
                            {link}
                        </div>
                    )
                }
            </div>)
        }
    </div>
}
export default Footer;