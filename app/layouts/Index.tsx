import dynamic from "next/dynamic";

import Ekran from "@Svgs/Ekran";
import FiveOz from "@Svgs/FiveOz";
import ManOfParts from "@Svgs/ManOfParts";
import TurboaBoard from "@Svgs/TurboBoard";

const Grid = dynamic(() => import("@Components/Grid"), {
    ssr: false,
});

const Layout = () => (
    <div>
        <div className="h-screen bg-neutral-900">
            <Grid />
        </div>

        <div className="absolute left-0 right-0 bottom-0 z-10">
            <div className="flex flex-wrap p-9 gap-y-8">
                <a className="link saturate-0" href="https://turboboard.io/" rel="noreferrer" target="_blank">
                    <TurboaBoard />
                </a>

                <a className="link text-white" href="https://5oz.com/" rel="noreferrer" target="_blank">
                    <FiveOz />
                </a>

                <a className="link text-white" href="https://ekran.ca/" rel="noreferrer" target="_blank">
                    <Ekran />
                </a>

                <a className="link text-white" href="https://manofparts.com/" rel="noreferrer" target="_blank">
                    <ManOfParts />
                </a>
            </div>
        </div>
    </div>
);

export default Layout;
