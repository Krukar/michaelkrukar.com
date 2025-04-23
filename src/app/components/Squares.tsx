'use client';

import { useEffect } from 'react';

import { createTimeline } from 'animejs';

import Squares from '@Svgs/Squares';

const ease = 'outCubic';

export default function Component() {
    useEffect(() => {
        const tl = createTimeline();

        tl.label('start', 0)
            .label('center', 100)
            .add(
                '.squares__outer--left',
                {
                    duration: 500,
                    ease,
                    x: {
                        from: 75,
                        to: 0,
                    },
                },
                'start'
            )
            .add(
                '.squares__outer--right',
                {
                    duration: 500,
                    ease,
                    x: {
                        from: 95,
                        to: 170,
                    },
                },
                'start'
            )
            .add(
                '.squares__inner--left',
                {
                    duration: 500,
                    ease,
                    x: {
                        from: 75,
                        to: 30,
                    },
                },
                'start'
            )
            .add(
                '.squares__inner--right',
                {
                    duration: 500,
                    ease,
                    x: {
                        from: 80,
                        to: 125,
                    },
                },
                'start'
            )
            .add(
                '.squares__center--top',
                {
                    duration: 750,
                    ease,
                    y: {
                        from: 10,
                        to: 0,
                    },
                },
                'center'
            )
            .add(
                '.squares__center--bottom',
                {
                    duration: 750,
                    ease,
                    y: {
                        from: 20,
                        to: 30,
                    },
                },
                'center'
            );
    }, []);

    return <Squares />;
}
