import Ekran from "@Svgs/Ekran";
import FiveOz from "@Svgs/FiveOz";
import ManOfParts from "@Svgs/ManOfParts";
import TurboaBoard from "@Svgs/TurboBoard";

const Component = () => (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 lg:gap-8">
        <div className="works-item">
            <a className="works-link" href="https://turboboard.io/" rel="noreferrer" target="_blank">
                <TurboaBoard />
            </a>
        </div>
        <div className="works-item">
            <a className="works-link" href="https://5oz.com/" rel="noreferrer" target="_blank">
                <FiveOz />
            </a>
        </div>
        <div className="works-item">
            <a className="works-link" href="https://ekran.ca/" rel="noreferrer" target="_blank">
                <Ekran />
            </a>
        </div>
        <div className="works-item">
            <a className="works-link" href="https://manofparts.com/" rel="noreferrer" target="_blank">
                <ManOfParts />
            </a>
        </div>
    </div>
);

export default Component;
