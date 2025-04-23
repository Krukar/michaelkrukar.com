'use client';

import { useRef } from 'react';

import Ball from './Ball';
import Grid from './Grid/Index';
import Squares from './Squares';

export default function Component() {
    const ref = useRef<HTMLDivElement | null>(null);

    return (
        <div className="bg-dark text-light" ref={ref}>
            <div className="h-screen flex flex-col gutter">
                <div className="flex justify-between mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
                    <div>
                        <h1 className="uppercase">Krukar</h1>

                        <h2>ハッカー</h2>
                    </div>

                    <div className="w-1/10">
                        <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
                            <Squares />
                        </div>

                        <div>
                            <Ball ref={ref} />
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex mb-12">
                    <Grid />
                </div>

                <div>
                    <h3 className="text-center">Made in Canada</h3>
                </div>
            </div>
        </div>
    );
}
