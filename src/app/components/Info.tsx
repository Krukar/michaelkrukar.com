import Social from './Social';
import Work from './Work';

export default function Component() {
    return (
        <div className="bg-light text-dark">
            <div className="min-h-screen flex flex-col gutter">
                <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
                    <h1 className="uppercase">Krukar</h1>

                    <h2>Design Engineer</h2>
                </div>

                <div className="flex-1">
                    <h3 className="mb-5">Active Projects</h3>

                    <Work />
                </div>

                <div>
                    <h3 className="mb-2">Get In Touch</h3>

                    <Social />
                </div>
            </div>
        </div>
    );
}
