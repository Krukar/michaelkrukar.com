import { ReactElement } from 'react';

import Bluesky from '@Svgs/social/Bluesky';
import Envelope from '@Svgs/social/Envelope';
import GitHub from '@Svgs/social/GitHub';
import Instagram from '@Svgs/social/Instagram';
import Letterboxd from '@Svgs/social/Letterboxd';
import LinkedIn from '@Svgs/social/LinkedIn';
import Twitter from '@Svgs/social/Twitter';

const get_social_icon = (id: string): ReactElement => {
    switch (id) {
        case 'bs':
            return <Bluesky />;

        case 'em':
            return <Envelope />;

        case 'gh':
            return <GitHub />;

        case 'in':
            return <Instagram />;

        case 'le':
            return <Letterboxd />;

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
                    href: 'mailto:mail+contact@michaelkrukar.com?subject=Hello',
                    id: 'em',
                    label: 'Get in touch.',
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
                    href: 'https://boxd.it/6UIAz',
                    id: 'le',
                    label: 'Check out my Letterboxd for my reviews.',
                },
                {
                    href: 'https://www.instagram.com/theneutralmans',
                    id: 'in',
                    label: 'Check out my Instagram for my life.',
                },
                {
                    href: 'https://bsky.app/profile/fucklandlords.com',
                    id: 'bs',
                    label: 'Check out my Bluesky for my takes.',
                },
                {
                    href: 'https://twitter.com/MichaelKrukar',
                    id: 'tw',
                    label: 'Check out my Twitter for my jokes.',
                },
            ].map(({ href, id, label }) => (
                <a key={id} aria-label={label} className="h-6" href={href} rel="noreferrer" target="_blank">
                    {get_social_icon(id)}
                </a>
            ))}
        </div>
    );
}
