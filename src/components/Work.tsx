import { ReactElement } from 'react';

import Ekran from '@Svgs/Ekran';
import FiveOz from '@Svgs/FiveOz';
import ManOfParts from '@Svgs/ManOfParts';
import AvenueRoad from '@Svgs/AvenueRoad';

const get_work_icon = (id: string): ReactElement => {
    switch (id) {
        case 'ek':
            return <Ekran />;

        case '5oz':
            return <FiveOz />;

        case 'mop':
            return <ManOfParts />;

        case 'ar':
            return <AvenueRoad />;

        default:
            throw new Error('Invalid social icon id');
    }
};

export default function Component() {
    return (
        <div className="grid grid-cols-2 xs:grid-cols-4 gap-7 xs:gap-0">
            {[
                {
                    href: 'https://5oz.com/',
                    id: '5oz',
                    label: 'Toronto Art Gallery website I built for a client',
                },
                {
                    href: 'https://stocked.avenue-road.com/',
                    id: 'ar',
                    label: 'Furniture microsite I designed and built for a client',
                },

                {
                    href: 'https://manofparts.com/',
                    id: 'mop',
                    label: 'Furniture website I designed and built for a client',
                },
                {
                    href: 'https://ekran.ca/',
                    id: 'ek',
                    label: 'Toronto Polish Film organization I volunteer at',
                },
            ].map(({ href, id, label }) => (
                <div key={id} className="flex justify-center">
                    <a aria-label={label} className="h-8 sm:h-icon" href={href} rel="noreferrer" target="_blank">
                        {get_work_icon(id)}
                    </a>
                </div>
            ))}
        </div>
    );
}
