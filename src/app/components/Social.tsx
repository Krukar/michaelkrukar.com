import { ReactElement } from 'react';

import Envelope from '@Svgs/social/Envelope';
import GitHub from '@Svgs/social/GitHub';
import Instagram from '@Svgs/social/Instagram';
import LinkedIn from '@Svgs/social/LinkedIn';
import Twitter from '@Svgs/social/Twitter';

const get_social_icon = (id: string): ReactElement => {
    switch (id) {
        case 'em':
            return <Envelope />;

        case 'gh':
            return <GitHub />;

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
        <div className="flex space-x-4.5">
            {[
                {
                    href: 'https://www.instagram.com/theneutralmans',
                    id: 'in',
                    label: 'Check out my Instagram for my life.',
                },
                {
                    href: 'https://twitter.com/MichaelKrukar',
                    id: 'tw',
                    label: 'Check out my Twitter for my jokes.',
                },
                {
                    href: 'https://www.linkedin.com/in/krukar',
                    id: 'li',
                    label: 'Check out my LinkedIn for my work.',
                },
                {
                    href: 'https://github.com/Krukar',
                    id: 'gh',
                    label: 'Check out my GitHub for my code.',
                },
                {
                    href: 'mailto:mail+contact@michaelkrukar.com?subject=Hello',
                    id: 'em',
                    label: 'Get in touch.',
                },
            ].map(({ href, id, label }) => (
                <a key={id} aria-label={label} className="h-6" href={href} rel="noreferrer" target="_blank">
                    {get_social_icon(id)}
                </a>
            ))}
        </div>
    );
}
