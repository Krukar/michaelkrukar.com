import dynamic from "next/dynamic";

import Social from "@Components/Social";
import Works from "@Components/Works";

const Wave = dynamic(() => import("@Components/wave/Wave"), {
    ssr: false,
});

const Layout = () => (
    <div>
        <div className="h-screen bg-dark">
            <Wave />
        </div>

        <div className="absolute top-9 left-9 z-10">
            <Social />
        </div>

        <div className="absolute left-0 right-0 bottom-9 z-10">
            <Works />
        </div>
    </div>
);

export default Layout;
