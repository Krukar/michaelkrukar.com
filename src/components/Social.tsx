import { ReactElement } from 'react';

import Instagram from '@Svgs/Instagram';
import LinkedIn from '@Svgs/LinkedIn';
import Twitter from '@Svgs/Twitter';

const get_social_icon = (id: string): ReactElement => {
    switch (id) {
        case 'in':
            return <Instagram />;

        case 'li':
            return <LinkedIn />;

        case 'tw':
            return <Twitter />;

        default:
            throw new Error('Invalid social icon id');
    }
};

export default function Component() {
    return (
        <div className="flex space-x-5 md:space-x-6">
            {[
                {
                    href: 'https://www.linkedin.com/in/krukar',
                    id: 'li',
                    label: 'Check out my LinkedIn for my work',
                },
                {
                    href: 'https://www.instagram.com/theneutralmans',
                    id: 'in',
                    label: 'Check out my Instagram for my life',
                },
                {
                    href: 'https://twitter.com/MichaelKrukar',
                    id: 'tw',
                    label: 'Check out my Twitter for my jokes',
                },
            ].map(({ href, id, label }) => (
                <a key={id} aria-label={label} className="h-base md:h-7" href={href} rel="noreferrer" target="_blank">
                    {get_social_icon(id)}
                </a>
            ))}
        </div>
    );
}
