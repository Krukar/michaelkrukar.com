'use client';

import { useEffect, useRef, useState } from 'react';

import Lines from './Lines';

import debounce from '@Utils/debounce';

export default function Component() {
    const [state, set_state] = useState<{
        height: number;
        width: number;
    } | null>(null);

    const ref = useRef<HTMLDivElement | null>(null);

    const handle_resize = () => {
        if (!ref.current) return;

        set_state({
            height: ref.current.clientHeight,
            width: ref.current.clientWidth,
        });
    };

    useEffect(() => {
        handle_resize();
    }, []);

    useEffect(() => {
        const debounced_handle_resize = debounce(handle_resize, 250);

        window.addEventListener('resize', debounced_handle_resize);

        return () => window.removeEventListener('resize', debounced_handle_resize);
    }, []);

    return (
        <div className="flex-1 flex flex-col justify-end">
            <div className="h-1/2 lg:h-2/3 flex flex-col justify-end" ref={ref}>
                {state && <Lines max_height={state.height} width={state.width} />}
            </div>
        </div>
    );
}
