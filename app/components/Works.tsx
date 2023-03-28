import Ekran from "@Svgs/Ekran";
import FiveOz from "@Svgs/FiveOz";
import ManOfParts from "@Svgs/ManOfParts";
import TurboaBoard from "@Svgs/TurboBoard";

const Component = () => (
    <div className="flex flex-wrap gap-y-8">
        <div className="w-full xs:w-1/2 lg:w-1/4 flex justify-center">
            <a className="works-link" href="https://turboboard.io/" rel="noreferrer" target="_blank">
                <TurboaBoard />
            </a>
        </div>

        <div className="w-full xs:w-1/2 lg:w-1/4 flex justify-center">
            <a className="works-link" href="https://5oz.com/" rel="noreferrer" target="_blank">
                <FiveOz />
            </a>
        </div>

        <div className="w-full xs:w-1/2 lg:w-1/4 flex justify-center">
            <a className="works-link" href="https://ekran.ca/" rel="noreferrer" target="_blank">
                <Ekran />
            </a>
        </div>

        <div className="w-full xs:w-1/2 lg:w-1/4 flex justify-center">
            <a className="works-link" href="https://manofparts.com/" rel="noreferrer" target="_blank">
                <ManOfParts />
            </a>
        </div>
    </div>
);

export default Component;
