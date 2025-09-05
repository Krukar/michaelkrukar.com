import { ReactElement } from 'react';

import AvenueRoad from '@Svgs/work/AvenueRoad';
import FiveOz from '@Svgs/work/FiveOz';

const get_social_icon = (id: string): ReactElement => {
    switch (id) {
        case 'ar':
            return <AvenueRoad />;

        case 'oz':
            return <FiveOz />;

        default:
            throw new Error('Invalid social icon id');
    }
};

export default function Component() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
                {
                    href: 'https://5oz.com/',
                    id: 'oz',
                    label: 'Art gallery in Toronto.',
                },
                {
                    href: 'https://avenue-road.com/',
                    id: 'ar',
                    label: 'Furniture company catalogue.',
                },
            ].map(({ href, id, label }) => (
                <a
                    key={id}
                    aria-label={label}
                    className="h-10 xs:h-14 sm:h-16 md:h-20 l:h-24 xl:h-28"
                    href={href}
                    rel="noreferrer"
                    target="_blank"
                >
                    {get_social_icon(id)}
                </a>
            ))}
        </div>
    );
}
