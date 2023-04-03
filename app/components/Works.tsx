import Ekran from "@Svgs/Ekran";
import FiveOz from "@Svgs/FiveOz";
import ManOfParts from "@Svgs/ManOfParts";
import TurboaBoard from "@Svgs/TurboBoard";

const Component = () => (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 lg:gap-8">
        <div className="works-item">
            <a aria-label="Check out my video game bounty board" className="works-link" href="https://turboboard.io/" rel="noreferrer" target="_blank">
                <TurboaBoard />
            </a>
        </div>
        <div className="works-item">
            <a aria-label="Toronto Art Gallery website I built for a client" className="works-link" href="https://5oz.com/" rel="noreferrer" target="_blank">
                <FiveOz />
            </a>
        </div>
        <div className="works-item">
            <a aria-label="Toronto Polish Film organization I volunteer at" className="works-link" href="https://ekran.ca/" rel="noreferrer" target="_blank">
                <Ekran />
            </a>
        </div>
        <div className="works-item">
            <a aria-label="Furniture website I designed and built for a client" className="works-link" href="https://manofparts.com/" rel="noreferrer" target="_blank">
                <ManOfParts />
            </a>
        </div>
    </div>
);

export default Component;
