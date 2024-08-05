import { IconCompass } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";
import { IconSettings } from "@tabler/icons-react";
import { Avatar, Indicator } from '@mantine/core';
import NavLinks from "./NavLinks";

const Header = () => {
    return <div className="w-full bg-cyan-950 px-6 text-white h-20 flex justify-between
            items-center">
        <div className="flex gap-1 items-center text-tulip-tree-400">
            <IconCompass className="h-10 w-8" stroke={2.3}/>
            <div className="text-3xl font-semibold">JobCompass</div>
        </div>
        {NavLinks()}
        <div className="flex gap-3 items-center">
            <div className="flex items-center gap-2">
                <div>Ishita</div>
                <Avatar src="avatar.png" alt="User profile picture"/>
            </div>
            <div className="bg-cyan-900 p-1.5 rounded-full">
                <Indicator color="tulip-tree.5" offset={6} size={8} processing>
                    <IconBell stroke={1.5}/>
                </Indicator>
            </div>
            <div className="bg-cyan-900 p-1.5 rounded-full">
                <IconSettings stroke={1.5}/>
            </div>
        </div>
    </div>
}
export default Header;