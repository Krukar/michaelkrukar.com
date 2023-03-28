import Instagram from "@Svgs/Instagram";
import LinkedIn from "@Svgs/LinkedIn";
import Twitter from "@Svgs/Twitter";

const Component = () => (
    <div className="flex space-x-6">
        <a className="social-link" href="https://www.linkedin.com/in/krukar/" rel="noreferrer" target="_blank">
            <LinkedIn />
        </a>

        <a className="social-link" href="https://twitter.com/MichaelKrukar" rel="noreferrer" target="_blank">
            <Twitter />
        </a>

        <a className="social-link" href="https://www.instagram.com/theneutralmans/" rel="noreferrer" target="_blank">
            <Instagram />
        </a>
    </div>
);

export default Component;
