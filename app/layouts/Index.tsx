import { useState } from "react";

import dynamic from "next/dynamic";

import Play from "@Components/Play";
import Social from "@Components/Social";
import Works from "@Components/Works";

const Wave = dynamic(() => import("@Components/Wave"), {
    ssr: false,
});

const Layout = () => {
    const [play, set_play] = useState<boolean>(false);

    return (
        <div className="h-screen py-7 md:py-8 lg:py-9">
            <div className="gutter h-full flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <Social />

                    <Play play={play} set_play={set_play} />
                </div>

                <Works />
            </div>

            <Wave play={play} />
        </div>
    );
};

export default Layout;
