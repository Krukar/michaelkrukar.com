'use client';

import { RefObject, useEffect } from 'react';

import { createTimeline } from 'animejs';

const ease = 'inOutCubic';

export default function Component({ ref }: { ref: RefObject<HTMLDivElement | null> }) {
    useEffect(() => {
        const tl = createTimeline();

        tl.label('start', 0)
            .label('loop', 1000)
            .add(
                '.ball',
                {
                    duration: 1000,
                    ease,
                    loop: false,
                    scale: {
                        from: 0,
                        to: 1,
                    },
                },
                'start'
            )
            .add(
                '.ball',
                {
                    alternate: true,
                    duration: 1250,
                    ease,
                    loop: true,
                    scale: 0.95,
                },
                '.loop'
            );
    }, []);

    const handle_click = () => {
        if (!ref.current?.clientHeight) return;

        const height: number = ref.current.clientHeight;

        window.scrollTo({
            top: height,
            behavior: 'smooth',
        });
    };

    return <button className="ball" onClick={handle_click} />;
}
