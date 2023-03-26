import Ekran from "@Svgs/Ekran";
import FiveOz from "@Svgs/FiveOz";
import ManOfParts from "@Svgs/ManOfParts";
import TurboaBoard from "@Svgs/TurboBoard";

const Component = () => (
    <div className="flex flex-wrap p-9 gap-y-8">
        <a className="link" href="https://turboboard.io/" rel="noreferrer" target="_blank">
            <TurboaBoard />
        </a>

        <a className="link" href="https://5oz.com/" rel="noreferrer" target="_blank">
            <FiveOz />
        </a>

        <a className="link" href="https://ekran.ca/" rel="noreferrer" target="_blank">
            <Ekran />
        </a>

        <a className="link" href="https://manofparts.com/" rel="noreferrer" target="_blank">
            <ManOfParts />
        </a>
    </div>
);

export default Component;
