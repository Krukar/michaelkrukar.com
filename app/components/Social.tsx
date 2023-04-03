import Instagram from "@Svgs/Instagram";
import LinkedIn from "@Svgs/LinkedIn";
import Twitter from "@Svgs/Twitter";

const Component = () => (
    <div className="flex space-x-6">
        <a aria-label="Check out my LinkedIn for my work" className="social-link" href="https://www.linkedin.com/in/krukar/" rel="noreferrer" target="_blank">
            <LinkedIn />
        </a>

        <a aria-label="Check out my Twitter for my jokes" className="social-link" href="https://twitter.com/MichaelKrukar" rel="noreferrer" target="_blank">
            <Twitter />
        </a>

        <a aria-label="Check out my Instagram for my life" className="social-link" href="https://www.instagram.com/theneutralmans/" rel="noreferrer" target="_blank">
            <Instagram />
        </a>
    </div>
);

export default Component;
