import dynamic from "next/dynamic";

import Links from "@Components/Links";

const Wave = dynamic(() => import("@Components/wave/Wave"), {
    ssr: false,
});

const Layout = () => (
    <div>
        <div className="h-screen bg-dark">
            <Wave />
        </div>

        <div className="absolute left-0 right-0 bottom-0 z-10">
            <Links />
        </div>
    </div>
);

export default Layout;
