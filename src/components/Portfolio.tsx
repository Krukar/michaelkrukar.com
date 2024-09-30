'use client';

import { useState } from 'react';

import dynamic from 'next/dynamic';

import Play from '@Components/Play';
import Social from '@Components/Social';
import Work from '@Components/Work';

// To prevent audio issues we disable SSR
const Wave = dynamic(() => import('@Components/Wave'), { ssr: false });

export default function Component() {
    const [play, set_play] = useState<boolean>(false);

    const toggle_play = () => set_play(!play);

    let class_name = 'h-screen text-krukar';

    if (play) class_name += ' playing';

    return (
        <div className={class_name}>
            <div className="h-full flex flex-col justify-between">
                <div className="gutter gutter-y flex justify-between items-center">
                    <Social />

                    <Play playing={play} toggle_playing={toggle_play} />
                </div>

                <div className="gutter gutter-y--large">
                    <Work />
                </div>
            </div>

            <Wave play={play} />
        </div>
    );
}
